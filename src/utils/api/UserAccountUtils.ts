import { UserInfo } from "../interfaces/User/UserDefinition"
import { connection_path } from "../../constants/developments"
import axios from "axios";




export const getUserData = async (userId: number): Promise<UserInfo> => {
    const end_point: string =  `/${userId}` ; 
    const api_url: string = connection_path.base_url + connection_path.user.user + end_point;

    const config = {
        method: 'GET',
        url: api_url,
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            id: userId,
        },
    };

    try {
        const response = await axios(config);
        
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
