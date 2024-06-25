import { UserInfo } from "../interfaces/User/UserDefinition"
import { connection_path } from "../../constants/developments"
import axios from "axios";




export const getUserData = async (): Promise<UserInfo> => {
    const api_url: string = connection_path.base_url + connection_path.user.customer;

    const config = {
        method: 'GET',
        url: api_url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
        },
    };

    try {
        const response = await axios(config);
        console.log('response:', response)
        if (response.status === 200) {
            const user: UserInfo = response.data.content;
            console.log('Fetch user data successfully');
            return user;
        } else {
            console.log('Failed to fetch user');
            return {} as UserInfo;
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        return {} as UserInfo;
    }
}



export interface UserInfoToSend {
    id: number;
    username: string;
    passwordHash: string;
    salt: string;
    email: string;
    phone: string;
    fullname: string;
    role: string;
    isActive: boolean;
    isRemoved: boolean;
    joinedDate: string;
    customerId: number;
    birthdate: string;
    sex: string;
    insurance: string;
    dentistId: number;
    clinicId: number;
    isOwner: boolean;
}

export const putUserData = async (userData: UserInfoToSend) => {
    const api_url: string = connection_path.base_url + connection_path.user.customer_update;

    const config = {
        method: "PUT",
        url: api_url,
        data: userData,
        headers: {
            'Content-Type': 'application/json'
        },
    }

    try {
        const response = await axios(config);
        if (response.status = 200) {
            return response.data;
        } else {
            throw new Error(`Unexpected response status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error updating user data:', error);
        throw error; 
    }

};