import { ClinicRegistrationModel } from "../interfaces/ClinicRegister/Clinic";
import {connection_path} from "../../constants/developments";
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

    console.log(configuration)

    await axios(configuration)
        .then(response => {
            if (response.status === 200) {
                console.log("Register successful");
                navigate('/')
            } else {
                console.log(response);
                alert("Register failed");
            }
        })
        .catch(error => {
            alert('Register failed, please try again later.')
            console.log(error);
        })
};