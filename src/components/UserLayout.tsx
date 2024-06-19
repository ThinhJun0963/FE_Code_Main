import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Box } from '@mui/material';

interface UserLayoutProps {
    children: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <Box sx={{ backgroundColor: '#ffffff', overflowY: 'auto'}}>
                {children}
            </Box>
            <Footer />
        </>
    );
}

export default UserLayout;
