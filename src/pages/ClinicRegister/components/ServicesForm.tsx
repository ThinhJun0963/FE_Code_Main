import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import services from './data';

const ServicesForm = () => {
    return (
        <Box>
            <Typography variant="h6">Các dịch vụ</Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {services.map((service) =>
                    <Box sx={{ width: '25%', marginTop: '1rem' }} key={service.id}>
                        <FormControlLabel
                            control={<Checkbox id={service.id} />}
                            label={service.name}
                            sx={{ width: '150px', whiteSpace: 'nowrap' }}
                        />
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default ServicesForm;