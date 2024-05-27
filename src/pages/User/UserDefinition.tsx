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
    user_id: string | null,
    username: string | null,
    name?: string | null,
    phone?: string | null,
    gender?: string | null,
    birthdate?: string | null,
    ethnic?: string | null,
    email: string | null,
    ssc?: string | null, 
    insurance?: string | null,
    profile_image?: string | null,
    joined?: string | null,
    status: UserStatus | null,
    payment_info?: Payment[] | null,
}

export const default_data: UserInfo = 
{
    "user_id": null,
    "username": null,
    "name": null,
    "phone": null,
    "gender": null,
    "birthdate": null,
    "ethnic": null,
    "email": null,
    "ssc": null,
    "insurance": null,
    "profile_image": null,
    "status": null,
    "payment_info": [{creditInfo: null, creditValue: null, creditValid: null}],
}