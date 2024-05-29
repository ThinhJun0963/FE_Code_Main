import { TextField, TextFieldProps } from '@mui/material'
import { FieldProps } from 'formik'
import React from 'react'



const FormField : React.FC<FieldProps & TextFieldProps> = ({ placeholder, name, label, ...rest }) => {
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