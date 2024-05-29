import Header from './Header/Header';
import Footer from './Footer/Footer';

interface UserLayoutProps {
    children: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default UserLayout;