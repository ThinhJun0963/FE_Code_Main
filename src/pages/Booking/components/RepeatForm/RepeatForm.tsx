import { Box, Checkbox, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';

interface RepeatFormProps {
    onRepeatSelected: (is_repeated: number) => void;
}

const RepeatForm = ({ onRepeatSelected  } : RepeatFormProps) => {
    const [isRepeated, setIsRepeated] = useState<number | null>(null);

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'repeated') {
            setIsRepeated(1);
            onRepeatSelected(1);
        } else if (event.target.name === 'notRepeated') {
            setIsRepeated(2);
            onRepeatSelected(2);
        }
    };

    return (
        <Box sx={{padding: '20px'}}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isRepeated === 1}
                        onChange={handleChange}
                        name="repeated"
                        color="primary"
                    />
                }
                label="Định kì"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isRepeated === 0}
                        onChange={handleChange}
                        name="notRepeated"
                        color="primary"
                    />
                }
                label="Không định kì"
            />
        </Box>
    );
};

export default RepeatForm;