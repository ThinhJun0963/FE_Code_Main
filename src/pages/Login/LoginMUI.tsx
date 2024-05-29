import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import LoginForm from './components/LoginForm';


const FormPaper = styled(Paper)(({ theme }) => ({
    width: '70%',
    height: 'auto',
    margin: '0 auto',
    // border: '4px solid black', 
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',

}))



export default function SignIn() {

    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ width: '100vw', height: '100vh' }}>
                <FormPaper sx={{ width: '100%', height: '100%', paddingTop: '100px' }}>
                    <Grid container sx={{ width: '100%' }}>
                        <Grid item lg={12} sx={{ height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Box>
                                <LoginForm />
                            </Box>
                        </Grid>
                    </Grid>
                </FormPaper>
            </Box>
        </React.Fragment>

    );
}