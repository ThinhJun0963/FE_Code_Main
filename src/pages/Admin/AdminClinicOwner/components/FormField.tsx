import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'



const FormField : React.FC<TextFieldProps> = ({ placeholder, name, label, ...rest }) => {
    return (
        <TextField
            fullWidth
            label={label}
            placeholder={placeholder}
            name={name}
            {...rest}
        />
    )
}

export default FormField