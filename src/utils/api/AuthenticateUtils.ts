import axios, { AxiosRequestConfig } from 'axios';
import { connection_path } from '../../constants/developments'; // Adjust the import according to your project structure
import { ref } from 'firebase/storage';


export const handleLogin = async (event: React.FormEvent<HTMLFormElement>, navigate: (path: string) => void) => {
    event.preventDefault();

    //    Dữ liệu về form
    const data = new FormData(event.currentTarget);

    //    Dữ liệu sau khi điền vào form
    const payload = {
        userName: data.get('username'),
        password: data.get('password'),
    }

    //    Chuỗi kết nối tới server backend
    //!   LƯU Ý: KHÔNG THAY ĐỔI TRỰC TIẾP CHUỖI KẾT NỐI TẠI ĐÂY (Fix cứng)
    //==  Chỉ thay đổi dữ liệu của "connection_path" trong file src/constants/developments
    const api_url: string = connection_path.base_url + connection_path.api + connection_path.endpoints.login;

    const configuration: AxiosRequestConfig = {
        method: "POST",
        url: api_url,
        data: payload
    };

    await axios(configuration)
        .then(response => {
           
            if (response.status === 200 && response.data.content.accessToken !== undefined) {
                
                var accessToken = response.data.content.accessToken;
                var refreshToken = response.data.content.refreshToken;

                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);
                //  Thành công thì cho về trang người dùng
                navigate('/')
            }
            else {
                console.log(response);  
                alert("Không đăng nhập thành công");
            }
        })
        .catch(error => {
            alert('Đăng nhập thất bại, vui lòng thử lại sau.')
            console.log(error);
        })
};

export const handleLogout = async (setAuth: React.Dispatch<React.SetStateAction<boolean>>, navigate: (path: string) => void) => {
    const api_url: string = connection_path.base_url + connection_path.api + connection_path.endpoints.logout;
    const accessToken = localStorage.getItem('accessToken');
    var refreshToken = localStorage.getItem('refreshToken');

    if (!accessToken) {
        console.error('Access token not found in localStorage');
        return;
    }

    const configuration: AxiosRequestConfig = {
        method: 'POST',
        url: api_url,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    };

    try {
        const response = await axios(configuration);
        console.log("Response:", response);
        
        if (response.status === 200) {
            console.log("Logout successful");
            // Handle successful logout (e.g., clear tokens, redirect to login page)
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            setAuth(false); // Update the auth state to false

            // Redirect user to homepage after logout
            navigate("/");
        } else {
            console.error('Logout failed with status:', response.status);
            alert('Logout failed');
        }
    } catch (error) {
        console.error('Logout error:', error);
        alert('Logout failed, please try again later.');
    }
};