import { connection_path } from "../../constants/developments";
import axios, { Axios, AxiosRequestConfig, AxiosResponse } from "axios";
import { ClinicToDisplay } from "../interfaces/ClinicRegister/Clinic";
import { ClinicSlotRegistrationModel, Weekdays } from "../interfaces/AdminClinicOwner/Slots";
import { ClinicSlotInfoModel, ClinicSlotUpdateModel } from "../interfaces/ClinicRegister/Clinic";
import { IUserAccount } from "../interfaces/User/UserDefinition";
import { DentistInfoViewModel } from "../interfaces/AdminClinicOwner/DentistAccounts";
import HttpResponseModel from "../interfaces/HttpResponseModel/HttpResponseModel";

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
                id: 0,
                ownerId: 0
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

export const fetchDentistInfo = async (): Promise<HttpResponseModel<DentistInfoViewModel>> => {
    const api_url = connection_path.base_url + connection_path.invoker.get_dentist_invoker;
    const accessToken = localStorage.getItem('accessToken');
    const config: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${accessToken}`  // Include the access token in the Authorization header
        }
    };

    try {
        const response = await axios.get<HttpResponseModel<DentistInfoViewModel>>(api_url, config);
        return response.data;
    } catch (error) {
        console.error('Error fetching dentist info:', error);
        return {
            statusCode: 500,
            message: 'Failed to fetch dentist info',
            detail: '',
        };
    }
};

export const registerSlots = async (
    slot: ClinicSlotRegistrationModel,
): Promise<boolean> => {
    const api_url = connection_path.base_url + connection_path.clinic.post_clinic_schedule;

    const configuration: AxiosRequestConfig = {
        method: "POST",
        url: api_url,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
        data: {
            clinicId: slot.clinicId,
            slotId: slot.clinicSlotId,
            weekday: slot.weekday,
            maxTreatment: slot.maxTreatment,
            maxCheckup: slot.maxCheckup
        }
    };

    try {
        const response = await axios(configuration);
        if (response.status === 200) {
            console.log("Slots registered successfully");
            return true;
        } else {
            console.error("Failed to register slots");
            return false;
        }
    } catch (error) {
        console.error("Axios error:", error);
        return false; // Indicate failure
    }
};
export const getAllClinicSlots = async (): Promise<ClinicSlotInfoModel[][]> => {
    const clinicId = 6; // Replace with your actual clinic ID or pass it as a parameter
    const token = localStorage.getItem('accessToken');
    const api_url = `${connection_path.base_url}${connection_path.clinic.get_clinic_schedule.replace(':id', clinicId.toString())}`;

    try {
        const response = await axios.get<HttpResponseModel<ClinicSlotInfoModel[]>>(
            api_url,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            }
        );

        if (response.status === 200) {
            const responseData = response.data;

            if (responseData.statusCode === 200) {
                if (responseData.content) {
                    const slotsFromAPI = responseData.content;
                    console.log('Slots from API:', slotsFromAPI);

                    // Initialize a 2D array for each weekday
                    const convertedSlots: ClinicSlotInfoModel[][] = Array.from({ length: 7 }, () => []);

                    // Map API response to ClinicSlotInfoModel format
                    slotsFromAPI.forEach((slot) => {
                        const convertedSlot: ClinicSlotInfoModel = {
                            clinicSlotId: slot.clinicSlotId,
                            clinicId: slot.clinicId,
                            maxCheckup: slot.maxCheckup,
                            maxTreatment: slot.maxTreatment,
                            weekday: slot.weekday as Weekdays,
                            slotId: slot.slotId,
                            startTime: slot.startTime,
                            endTime: slot.endTime,
                            status: slot.status,
                        };

                        convertedSlots[slot.weekday].push(convertedSlot);
                    });

                    return convertedSlots;
                } else {
                    throw new Error('Clinic slots data is undefined');
                }
            } else {
                throw new Error(responseData.message || 'Failed to fetch clinic slots');
            }
        } else {
            throw new Error('Failed to fetch clinic slots');
        }
    } catch (error) {
        console.error('Error fetching clinic slots:', error);
        throw error; // Handle or rethrow the error as needed
    }
};


export async function updateClinicSlot(slotInfo: ClinicSlotUpdateModel): Promise<void> {

    const api_url = connection_path.base_url + connection_path.clinic.put_clinic_schedule;


    const configuration: AxiosRequestConfig = {
        method: "PUT",
        url: api_url,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
        data: {
            slotId: slotInfo.slotId,
            maxTreatement: slotInfo.MaxTreatement,
            maxCheckup: slotInfo.MaxCheckup,
            status: slotInfo.Status
        }
    };

    try {
        const response = await axios(configuration);
        if (response.status === 200) {
            console.log("Slots updated successfully");
        } else {
            console.error("Failed to update slots");
        }
    } catch (error) {
        console.error("Axios error:", error);
    }
}
