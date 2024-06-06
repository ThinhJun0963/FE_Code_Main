import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Box } from '@mui/material';

interface UserLayoutProps {
    children: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <Box sx={{ backgroundColor: '#e1e8f0', height: '100%' }}>
                {children}
            </Box>
            <Footer />
        </div>
    );
}

export default UserLayout;