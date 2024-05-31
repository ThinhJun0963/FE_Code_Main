import { Box, TextField, Typography } from '@mui/material';

interface Input {
    id: string,
    type: string,
    label: string,
    placeholder: string,
}

function Form({ inputs }: { inputs: Input[] }) {
    return (
        <Box>
            <Typography variant="h6">Các thông tin cơ bản</Typography>
            {
                inputs.map((input, index) => (
                    <Box key={index} sx={{ marginBottom: '1rem' }}>
                        <TextField
                            id={input.id}
                            label={input.label}
                            placeholder={input.placeholder}
                            type={input.type}
                            fullWidth
                        />
                    </Box>
                ))
            }
        </Box>
    );
}

export default Form;