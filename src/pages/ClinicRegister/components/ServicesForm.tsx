import { Box, Breadcrumbs, Button, Link, TextField, Typography } from '@mui/material';
import UseMultipleStepForm from '../../../components/UseMultipleStepForm/UseMultipleStepForm';
import ServicesForm from './ServicesForm';
import CertificationForm from './CertificationForm';
import BasicForm from './BasicForm/BasicForm';

const ClinicRegisterContent = () => {
    const generalContent = [
        { id: 'clinic-name', type: 'text', label: 'Tên phòng khám', placeholder: 'Tên phòng khám' },
        { id: 'clinic-address', type: 'text', label: 'Địa chỉ', placeholder: 'Địa chỉ' },
        { id: 'phone-number', type: 'text', label: 'Số điện thoại', placeholder: 'Số điện thoại' },
        { id: 'email', type: 'email', label: 'Email', placeholder: 'Email' }
    ];

    const { steps, currentStep, step, isFirstStep, isFinalStep, next, back } = UseMultipleStepForm([<BasicForm inputs={generalContent} />, <ServicesForm />, <CertificationForm />]);

    return (
        <Box sx={{ marginTop: '5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '80%', marginTop: '-3em', textAlign: 'right', color: 'black' }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Trang chủ
                    </Link>
                    <Typography color="text.primary">Phòng khám</Typography>
                </Breadcrumbs>
            </Box>

            <Box sx={{ position: 'relative', height: '500px', width: '900px', fontFamily: 'Arial, Helvetica, sans-serif', color: 'black', backgroundColor: '#ffffff', margin: '40px auto 40px auto', borderRadius: '20px', border: '2px solid #e0e0e0' }}>
                <Box sx={{ width: '100%', height: '100%', margin: '0 auto', padding: '50px' }}>
                    {step}
                    {currentStep === 0 && <Box sx={{ display: 'flex', gap: '.5rem' }}>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: 5 }}>
                            <TextField id="open-hour" label="Giờ mở cửa" placeholder='7:00' sx={{ height: '50%', width: '50%' }} />
                            <TextField id="close-hour" label="Giờ đóng cửa" placeholder='17:00' sx={{ height: '50%', width: '50%' }} />
                        </Box>
                    </Box>}
                    <Box sx={{ position: 'absolute', bottom: '30px', right: '50px', display: 'flex', gap: '.5rem', justifyContent: 'flex-end', marginTop: '1em', }}>
                        {!isFirstStep && <Button variant="contained" onClick={back}>Back</Button>}
                        {!isFinalStep && <Button variant="contained" color="primary" onClick={next}>Next</Button>}
                        {isFinalStep && <Button variant="contained" color="primary" type="submit">Submit</Button>}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ClinicRegisterContent;