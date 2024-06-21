export interface UserStatus{
    state_number: number,
    message?: string,
  }

export interface Payment {
    creditInfo: string | null,
    creditValue: string | null,
    creditValid: UserStatus | null,
}


export interface UserInfo {
    id: string,
    username: string,
    fullname?: string | null,
    phone?: string | null,
    gender?: string | null,
    birthdate?: string | null,
    email: string | null,
    insurance?: string | null,
    profilePicture?: string | null,
    joinedDate?: Date | null,
    status: UserStatus | null,
    payment_info?: Payment[] | null,
}

export const default_data: UserInfo = 
{
    "id": "0",
    "username": "--",
    "fullname": null,
    "phone": null,
    "gender": null,
    "birthdate": null,
    "email": null,
    "insurance": null,
    "profilePicture": null,
    "status": null,
    "payment_info": [{creditInfo: null, creditValue: null, creditValid: null}],
}

export interface UserRegistrationModel {
    username?: string;
    password?: string;
    email?: string;
    clinicOwner?: boolean;
    clinic?: number | null;
 }