import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { connection_path } from '../../../constants/developments';

interface Service {
    serviceId: string;
    serviceName: string;
}

interface FormData {
    name: string;
    address: string;
    phone: string;
    email: string;
    openHour: string;
    closeHour: string;
    clinicServices: Service[];
    certifications: string[];
}

export const getServiceList = async (): Promise<Service[]> => {
    const api_url: string = connection_path.base_url + connection_path.service.getAllServices;

    const configuration: AxiosRequestConfig = { method: "GET", url: api_url };

    try {
        const response = await axios(configuration);
        if (response.status === 200) {
            const services = response.data.map((service: Service) => ({
                serviceId: service.serviceId,
                serviceName: service.serviceName
            }));
            return services;
        } else {
            console.log('Failed to get services');
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const registerClinic = async (formData: FormData) => {
    const api_url: string = connection_path.base_url + connection_path.user.clinicRegister;

    console.log('Registering clinic:', formData);
    const accessToken = localStorage.getItem('accessToken');

    const configuration: AxiosRequestConfig =
    {
        method: "POST",
        url: api_url, data: formData,
        headers: {
            Authorization: `${accessToken}`
        }
    };

    try {
        const response: AxiosResponse = await axios(configuration);
        if (response.status === 200) {
            return response.data;
        } else {
            const errorMessage = `Failed to register clinic: ${response.statusText}`;
            throw new Error(errorMessage);
        }
    } catch (error: any) {
        let errorMessage = '';
        if (error.response) {
            if (error.response.status === 401) {
                errorMessage = 'Unauthorized: User is not authenticated.';
            } else {
                errorMessage = `HTTP Error ${error.response.status}: ${error.response.statusText}`;
            }
        } else if (error.request) {
            errorMessage = 'Network Error: No response received from the server.';
        } else {
            errorMessage = `Error: ${error.message}`;
        }
        throw new Error(errorMessage);
    }
};

