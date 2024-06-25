import { connection_path } from "../../constants/developments";
import axios from "axios";
import { ClinicToDisplay } from "../interfaces/ClinicRegister/Clinic";

export const getClinicGeneralInfo = async (clinicId: string): Promise<ClinicToDisplay | null> => {
    const api_url: string = connection_path.base_url + connection_path.clinic.get_clinic_general_info + `${clinicId}`;

    try {
        const response = await axios.get(api_url);

        if (response.status === 200) {
            const data = response.data.content;
            const clinic: ClinicToDisplay = {
                name: data.name,
                description: data.description,
                address: data.address,
                phone: data.phone,
                email: data.email,
                openHour: data.openHour,
                closeHour: data.closeHour,
            }
            return clinic;
        } else {
            console.log('Failed to get users');
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}
