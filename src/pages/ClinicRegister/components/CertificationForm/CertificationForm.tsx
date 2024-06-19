import React, { useState } from 'react';
import { Box, Typography, Stack, CircularProgress, Alert, Button, Link, Dialog, DialogContentText, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { MdClose, MdCloudUpload } from "react-icons/md";
import styles from './CertificationForm.module.css';
import { storage } from '../../../../../firebase';
import { v4 } from 'uuid';
import { getDownloadURL, listAll, ref, uploadBytes, UploadResult } from 'firebase/storage';

const CertificationForm = () => {
    const [uploadedFiles, setUploadedFiles] = useState<{ file: File; imageUrl: string }[]>([]);
    const [uploadSuccess, setUploadSuccess] = useState(false); // State to track upload success
    const [uploadError, setUploadError] = useState(false); // State to track upload error
    const [dragging, setDragging] = useState(false); // State to track drag over zone
    const [uploading, setUploading] = useState(false); // State to track upload progress
    const [openDialog, setOpenDialog] = useState(false); // State to control the visibility of the dialog
    const [dialogMessage, setDialogMessage] = useState(""); // State to store the dialog message

    const uploadImage = (file: File): Promise<string> => {
        if (file == null) return Promise.reject("No file");

        const imageRef = ref(storage, `pictures/${v4()}`); // Create a reference to the image

        return uploadBytes(imageRef, file)
            .then((result: UploadResult) => getDownloadURL(result.ref))
            .catch((reason) => {
                console.error("Error uploading image:", reason);
                throw reason;
            });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files); // Convert FileList to Array
            const newFiles = filesArray
                .filter(file => !uploadedFiles.some(uploadedFile => uploadedFile.file.name === file.name))
                .map(file => ({
                    file: file,
                    imageUrl: URL.createObjectURL(file) // Create preview URL for each file
                }));

            setUploadedFiles(prevFiles => [...prevFiles, ...newFiles]);
            setUploadSuccess(false);
            setUploadError(false);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(false);

        const files = event.dataTransfer.files;
        if (files.length > 0) {
            const newFile = files[0];
            const imageUrl = URL.createObjectURL(newFile);

            setUploadedFiles((prevFiles) => [...prevFiles, { file: newFile, imageUrl }]);
            setUploadSuccess(false);
            setUploadError(false);
        }
    };

    const handleUpload = () => {
        if (uploadedFiles.length === 0) return;

        // Uploading
        setUploading(true);
        const promises = uploadedFiles.map(({ file }) => uploadImage(file));

        Promise.all(promises)
            .then((urls) => {
                setUploadSuccess(true);
                setUploadError(false);
                setUploading(false);
                setDialogMessage("Đăng ảnh thành công");
                setOpenDialog(true);

                console.log("Uploaded files successfully!", urls);

                // Send URLs to backend
                // axios.post('/api/upload', { imageUrls: urls });

                setUploadedFiles([]);
            })
            .catch((error) => {
                setUploadSuccess(false);
                setUploadError(true);
                setUploading(false);
                setDialogMessage("Đăng ảnh thất bại");
                setOpenDialog(true);
                console.error("Error uploading files", error);
                setUploadedFiles([]);
            });
    };

    const handleDeleteFile = (index: number) => {
        const updatedFiles = [...uploadedFiles];
        updatedFiles.splice(index, 1);
        setUploadedFiles(updatedFiles);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };


    return (
        <Box>
            <Typography variant="h6" mb={8}>
                Các giấy chứng nhận cần thiết
            </Typography>
            <Box
                className={`${styles.upload} ${dragging ? styles.dragging : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => { document.getElementById('file-input')?.click() }}
            >
                <Stack direction="column" alignItems="center" spacing={2}>
                    {uploadedFiles.length === 0 ? (
                        <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center', justifyContent: 'center' }}>
                            <MdCloudUpload style={{ fontSize: 48, marginBottom: 8 }} />
                            Kéo thả hay chọn file
                        </Typography>
                    ) : (
                        <Button onClick={handleUpload} variant="contained" color="primary" disabled={uploading}>
                            {uploading ? 'Đang tải...' : 'Đăng ảnh'}
                        </Button>
                    )}
                    <input
                        id="file-input"
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                        multiple
                        hidden
                        onChange={handleFileChange}
                    />
                </Stack>
            </Box>
            <Box>
                {uploadedFiles.map((file, index) => (
                    <Box key={index} className={styles.uploadedFile}>
                        <Typography variant="body1" component="span">
                            {file.file.name}
                        </Typography>
                        <Box className={styles.uploadProgress}>
                            {uploading && <CircularProgress variant="determinate" value={50} />}
                            <Button
                                className={styles.delBtn}
                                onClick={() => handleDeleteFile(index)}
                            >
                                <MdClose />
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>{"Thông báo"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {dialogMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Đóng
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default CertificationForm;
