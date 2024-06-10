import axios, { AxiosRequestConfig } from 'axios';
import { connection_path } from '../../../constants/developments';

interface Service {
    serviceId: string;
    serviceName: string;
}

export const getServiceList = async (): Promise<Service[]> => {
    const api_url: string = connection_path.base_url + connection_path.api + connection_path.endpoints.getAllServices;

    console.log(api_url);
    const configuration: AxiosRequestConfig = { method: "GET", url: api_url };

    try {
        const response = await axios(configuration);
        if (response.status === 200) {
            // Assuming the response.data is an array of services with 'id' and 'name' properties
            const services = response.data.map((service: Service) => ({
                serviceId: service.serviceId,
                serviceName: service.serviceName
            }));
            console.log(services)
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
