import * as React from 'react';
import { Button, TextField, Box, Grid } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import FormField from './FormField';

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
    return (
        <Formik initialValues={{ clinicName: 'Phòng khám A', address: '179-181 Nguyễn Thị Minh Khai, Q.1, HCM', openHour: '8h00', closeHour: '20h00', phoneNumber: '096 4444 999', email: 'nhakhoadainam@gmail.com' }} onSubmit={values => {
            onSubmit(values)
        }}
        >
            {({ values }) => (
                <Form>
                    <Box sx={{ width: "90%", margin: "0 auto", padding: "50px" }}>
                        <Grid container spacing={5}>
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
                        </Grid>
                    </Box>

                </Form>
            )}
        </Formik>
    )
}

export default BasicForm;