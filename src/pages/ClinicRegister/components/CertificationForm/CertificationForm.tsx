import { Box, Typography } from '@mui/material';
import { MdCloudUpload } from "react-icons/md";

const CertificationForm = () => {
    return (
        <Box sx={{  height: '350px', width: '800px' }}>
            <Typography variant="h6">Các giấy chứng nhận cần thiết</Typography>
            <input id="input-file" type="file" accept="*" hidden />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', width: '100%', height: '90%', border: '1px dashed gray', marginTop: '.5em' }}>
                <MdCloudUpload size={80} />
                <Typography>Kéo thả tệp vào đây</Typography>
            </Box>
        </Box>
    )
}

export default CertificationForm;