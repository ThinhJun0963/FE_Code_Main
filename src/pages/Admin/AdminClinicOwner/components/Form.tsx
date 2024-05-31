import * as React from 'react';
import { Button, TextField, Box, Grid, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import FormField from './FormField';
import { useState } from 'react';

interface Values {
    clinicName: string,
    address: string,
    openHour: string,
    closeHour: string,
    phoneNumber: string,
    email: string
}

interface FormProps {
    onSubmit: (values: Values) => void
}

const BasicForm = ({ onSubmit }: FormProps) => {
    const [buttonText, setButtonText] = useState('Lưu')

    const handleClick = () => {
        setButtonText(prevButtonText => prevButtonText === 'Lưu' ? 'Chỉnh sửa' : 'Lưu');
    };

    return (
        <Formik initialValues={{ clinicName: 'Phòng khám A', address: '179-181 Nguyễn Thị Minh Khai, Q.1, HCM', openHour: '8h00', closeHour: '20h00', phoneNumber: '096 4444 999', email: 'nhakhoadainam@gmail.com' }} onSubmit={values => {
            onSubmit(values)
        }}
        >
            {({ values }) => (
                <Grid container spacing={5}>
                    <Grid item lg={12}>
                        <Typography variant="h4" sx={{ flexGrow: 1, paddingLeft: 7, marginTop: 4 }}>
                            Thông tin phòng khám
                        </Typography>
                    </Grid>
                    <Grid item lg={12}>
                        <Field
                            label="Tên phòng khám"
                            name="clinicName"
                            variant="outlined"
                            placeholder="Phòng khám A"
                            width="200px"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={values.clinicName}
                            component={FormField}
                        />
                    </Grid>
                    <Grid item lg={12}>
                        <Field
                            label="Địa chỉ"
                            name="address"
                            variant="outlined"
                            placeholder="179-181 Nguyễn Thị Minh Khai, Q.1, HCM"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={values.address}
                            component={FormField}
                        />
                    </Grid>
                    <Grid item lg={12}>
                        <Field
                            label="Số điện thoại"
                            name="phoneNumber"
                            variant="outlined"
                            placeholder="096 4444 999"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={values.phoneNumber}
                            component={FormField}
                        />
                    </Grid>
                    <Grid item lg={12}>
                        <Field
                            label="Email"
                            name="email"
                            variant="outlined"
                            placeholder="spacestalincyka@gmail.com"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={values.email}
                            component={FormField}
                        />
                    </Grid>
                    <Grid item lg={6}>
                        <Field
                            label="Giờ mở cửa"
                            name="openHour"
                            variant="outlined"
                            placeholder="7:00"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={values.openHour}
                            component={FormField}
                        />
                    </Grid>
                    <Grid item lg={6}>
                        <Field
                            label="Giờ đóng cửa"
                            name="closeHour"
                            variant="outlined"
                            placeholder="20:00"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={values.closeHour}
                            component={FormField}
                        />
                    </Grid>

                    <Grid item lg={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ width: "25%" }}
                                onClick={handleClick}
                            >
                                {buttonText}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            )}
        </Formik>
    )
}

export default BasicForm;