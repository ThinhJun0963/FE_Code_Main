import { BookingRegistrationModel } from "../interfaces/interfaces";
import { connection_path } from "../../constants/developments";
import axios from "axios";



export const handleBookingRegister = async (payload: BookingRegistrationModel, navigate: (path: string, state?: any) => void) => {
    const api_url: string = connection_path.base_url + connection_path.api + connection_path.booking.place_book;

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
                console.log("Booking successful");
                navigate('/success', { state: { bookingInfo: payload } });
            } else {
                console.log(response);
                alert("Booking failed");
            }
        })
        .catch(error => {
            alert('Booking failed, please try again later.')
            console.log(error);
        })
};

export const handleBookingSuccess = async () => { 
    const api_url: string = connection_path.base_url + connection_path.api + connection_path.booking.get_cus_booking;
    const accessToken = localStorage.getItem('accessToken');

    const configuration = {
        method: "GET",
        url: api_url,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    };

    await axios(configuration)
        .then(response => { 
            if (response.status == 200 && response.data.statusCode == 200) {
                const userInfo = response.data.content;
                console.log(userInfo);
            } else {
                console.log("error", response.data);                
            }
        })
        .catch(error => {
            console.log(error);
        })

}