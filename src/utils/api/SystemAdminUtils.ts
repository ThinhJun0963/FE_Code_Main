import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { connection_path } from '../../constants/developments';
import { UserInfo, UserStatus, UserRegistrationModel } from '../interfaces/User/UserDefinition';



export interface UsersToDisplay {
    id: number;
    username: string | null;
    fullname: string | null;
    phone: string | null;
    gender: string | null;
    birthdate: string | null;
    email: string | null;
    joinedDate: Date | null;
    role: string | null;
    status: boolean | null;
}

export const registerUser = async (userData: UserRegistrationModel) => {

    const api_url: string = connection_path.base_url + connection_path.user.add_user;

    const config: AxiosRequestConfig = {
        method: 'POST',
        url: api_url,
        headers: {
            'Content-Type': 'application/json',
        },
        data: userData,
    };

    try {
        const response = await axios(config);

        if (response.status === 200) {
            console.log('User registered successfully');
        } else {
            console.log('Failed to register user');
        }
    } catch (error) {
        console.error('Error registering user:', error);
    }
};


export const setUserStatus = async (userId: number, status: boolean | null) => {
    console.log(status)
    const end_point: string = status ? `/inactivate/${userId}` : `/activate/${userId}`; 
    const api_url : string = connection_path.base_url + connection_path.user.user + end_point;
    const config = {
        method: 'PUT', // Use PUT method for updating user status
        url: api_url,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await axios(config);
        if (response.status === 200) {
            console.log(`Update user ${userId} ${status ? 'activated' : 'inactivated'} successfully`);
            // Optionally, update the user status in the parent component state
            // or trigger a refresh of user data.
        } else {
            console.log(`Failed to  update status ${status ? 'activate' : 'inactivate'} of user ${userId}`);
        }
    } catch (error) {
        console.error(`Error updating ${status ? 'activating' : 'inactivating'} user ${userId}:`, error);
    }
}

export const getUsers = async (): Promise<UsersToDisplay[]> => {
    const api_url: string = connection_path.base_url + connection_path.user.user;

    try {
        const response = await axios.get(api_url);
        if (response.status === 200) {
            const users: UsersToDisplay[] = response.data.content.map((user: any) => ({
                id: user.id,
                username: user.username,
                fullname: user.fullname,
                phone: user.phone,
                gender: user.sex, // Adjust based on your backend model
                birthdate: user.birthdate, // Adjust based on your backend model
                email: user.email,
                joinedDate: user.joinedDate ? new Date(user.joinedDate) : null,
                role: user.roleName, // Adjust based on your backend model
                status: user.status
            }));
            return users;
        } else {
            console.log('Failed to get users');
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}