import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { connection_path } from '../../constants/developments';
import { ClinicToDisplay } from '../interfaces/ClinicRegister/Clinic';

export const getClinicById = async (clinicId: string): Promise<ClinicToDisplay> => {
    const api_url = connection_path.base_url + connection_path.clinic.get_clinic_general_info + clinicId;

    try {
        const response: AxiosResponse = await axios.get(api_url);

        if (response.status === 200) {
            const clinicData: ClinicToDisplay = response.data.Content;

            return clinicData;

        } else {
            throw new Error('Failed to get clinic information');
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        throw error;
    }
}

export const getAllClinics = async (searchTerm: string, pageSize: number, page: number): Promise<{ content: ClinicToDisplay[], totalCount: number }> => {
    const api_url = `${connection_path.base_url}${connection_path.clinic.get_all_clinic}`;

    try {
        const response: AxiosResponse = await axios.get(api_url, {
            params: {
                search: searchTerm || '',
                page_size: pageSize || 0,
                page: page || 1,
            }
        });

        if (response.status === 200) {
            const clinicsData: ClinicToDisplay[] = response.data.content;
            console.log(clinicsData);
            return {
                content: response.data.content,
                totalCount: response.data.totalCount
            };
        } else {
            throw new Error('Failed to get clinic information');
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching clinics:', error.message);
        }
        throw error;
    }
};