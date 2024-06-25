import { ClinicRegistrationModel } from "../interfaces/ClinicRegister/Clinic";
import { UserRegistrationModel } from "../interfaces/User/UserDefinition";
import { connection_path } from "../../constants/developments";
import axios from "axios";

export const handleClinicRegister = async (payload: ClinicRegistrationModel, navigate: (path: string, state?: any) => void) => {
    const api_url: string = connection_path.base_url + connection_path.user.clinic_register;

    const configuration = {
        method: "POST",
        url: api_url,
        data: payload,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    await axios(configuration)
        .then(response => {
            if (response.status === 200) {
                console.log("Register successful");
                navigate('/');
                return response.data;
            } else {
                console.log(response);
                alert("Register failed");
            }
        })
        .catch(error => {
            alert('Register failed, please try again later.')
            throw error;
        })
};
export const handleOwnerRegister = async (payload: UserRegistrationModel) => {
    const api_url = connection_path.base_url + connection_path.clinic.register_clinic_owner;

    const configuration = {
        method: "POST",
        url: api_url,
        data: payload,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios(configuration);
        const { statusCode, message } = response.data;

        if (statusCode === 200) {
            console.log("Register successful");
            return statusCode;
        } else {
            alert("Register failed: " + message);
            return statusCode;
        }
    } catch (error) {
        alert('Register failed, please try again later.');
        console.log(error);
        return null;
    }
}