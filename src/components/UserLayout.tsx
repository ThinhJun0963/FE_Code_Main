import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Box } from '@mui/material';

interface UserLayoutProps {
    children: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
    return (
        <Box  sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box sx={{ backgroundColor: '#ffffff', flexGrow: 1 }}> 
            {children}
            </Box>
            <Footer />
        </Box>
    );
}

export default UserLayout;
