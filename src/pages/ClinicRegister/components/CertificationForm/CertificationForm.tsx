import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack, CircularProgress, Alert, Button, Link, Dialog, DialogContentText, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { MdClose, MdCloudUpload } from "react-icons/md";
import styles from './CertificationForm.module.css';
import { storage } from '../../../../../firebase';
import { v4 } from 'uuid';
import { getDownloadURL, listAll, ref, uploadBytes, UploadResult } from 'firebase/storage';
import { Clinic, setClinic } from '../../../../utils/interfaces/ClinicRegister/Clinic'

interface CertificationFormProps {
    formData: Clinic;
    setFormData: setClinic;
}

const CertificationForm = ({ formData, setFormData }: CertificationFormProps) => {
    const [uploadedFiles, setUploadedFiles] = useState<{ file: File; imageUrl: string }[]>([]);
    const [uploadSuccess, setUploadSuccess] = useState(false); // State to track upload success
    const [uploadError, setUploadError] = useState(false); // State to track upload error
    const [dragging, setDragging] = useState(false); // State to track drag over zone
    const [uploading, setUploading] = useState(false); // State to track upload progress
    const [openDialog, setOpenDialog] = useState(false); // State to control the visibility of the dialog
    const [dialogMessage, setDialogMessage] = useState(""); // State to store the dialog message
    const [uploadedUrls, setUploadedUrls] = useState<string[]>([]); 

    const uploadImage = (file: File): Promise<string> => {
        if (file == null) return Promise.reject("No file");

        const imageRef = ref(storage, `pictures/${v4()}`); 

        return uploadBytes(imageRef, file)
            .then((result: UploadResult) => {
                const downloadURL = getDownloadURL(result.ref);
                return downloadURL; 
            })
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

    const handleUpload = async () => {
        if (uploadedFiles.length === 0) return;
    
        setUploading(true);
        setUploadError(false);
        setUploadSuccess(false);
    
        try {
          const uploadPromises = uploadedFiles.map(async ({ file }) => {
            const imageUrl = await uploadImage(file);
            return imageUrl;
          });
    
          const urls = await Promise.all(uploadPromises);
          console.log(urls);
          // Update local state for immediate display
          setUploadedUrls(urls); // Update uploadedUrls state
    
          // Update formData 
          setFormData((prevData) => ({
            ...prevData,
            clinicMedia: urls,
          }));
    
          setDialogMessage("Đăng ảnh thành công");
          setUploadSuccess(true);
        } catch (error) {
          setDialogMessage("Đăng ảnh thất bại");
          setUploadError(true);
          console.error("Error uploading files", error);
        } finally {
          setUploading(false);
          setOpenDialog(true);
        }
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
            <Box className={styles.headingBox}>
                <Box className={styles.heading}>Giấy chứng nhận cho phòng khám của bạn</Box>
                <Box className={styles.subHeading}>Một số giấy tờ cho phòng khám của bạn</Box>
            </Box>
            <Box className={styles.container}>
                <Box
                    className={`${styles.upload} ${dragging ? styles.dragging : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => { document.getElementById('file-input')?.click() }}
                >
                    <Stack direction="column" alignItems="center" spacing={2}>
                        {uploadedFiles.length === 0 ? (
                            <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <MdCloudUpload style={{ fontSize: 48, marginBottom: 8, color: '#1976d3' }} />
                                <Box sx={{ fontSize: '18px', fontWeight: 400 }}>Kéo thả hay
                                    <a
                                        href="#"
                                        onClick={(event) => event.preventDefault()}
                                        style={{ color: '#1976d3', textDecoration: 'underline', cursor: 'pointer', paddingLeft: '3px', paddingRight: '3px' }}
                                    >
                                        chọn
                                    </a>
                                    file
                                </Box>
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
        </Box>
    );
};

export default CertificationForm;
