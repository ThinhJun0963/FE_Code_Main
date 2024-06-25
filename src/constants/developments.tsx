export const connection_path = {
    base_url: "https://localhost:7163/api",
    endpoints: {

    },

    auth: {
        login: "/auth/login",
        logout: "/auth/logout",
        checkAuth: "/auth/validate",
        googleAuth: "/auth/google",
    },

    
    user: {
        customer: "/customer",
        customer_update: "/user/update",
        customer_register: "/customer/register",
        activate_user: "/user/activate/:id",
        inactivate_user: "/user/inactivate/:id",
        clinic_register: "/clinic/register",
    },

    clinic: {
        register_clinic_owner: "/clinic/register/clinic-owner",
        get_clinic_general_info: "/clinic/",
        get_all_clinic: "/clinic/search",
        get_clinic_dentist: "/clinic/dentist/:id",
        get_clinic_service: "/clinic/service/:id",
        get_clinic_schedule: "/clinic/schedule/:id",
        get_clinic_booking: "/clinic/booking/:id",
        get_clinic_patient: "/clinic/patient/:id",
        get_clinic_chat: "/clinic/chat/:id",
    }, 

    booking: {
        available_date: '/booking/availabe-date',
        available_slot: '/booking/availabe-slot',
        check_available: '/booking/available',
        place_book: '/booking/customer/book',
        get_booking: '/booking/schedule/staff',
        get_cus_booking: '/booking/schedule/customer'
    },
    service: {
        get_all_service: "/service/get-all",
    },

    admin_clinic_owner: {
        homepage: "/admin/clinic-owner",
        clinic: "/admin/clinic-owner/clinic",
        dentist: "/admin/clinic-owner/dentist",
        appointment: "/admin/clinic-owner/appointment",
      },
    
      dentist: {
        schedule: "/dentist/dentist-schedule",
        patient_list: "/dentist/patient-list",
        chat: "/dentist/chat",
      },
}

export const google_auth = {
    client_id: "843209512674-7rck108lbhqbplg9hnc8f6u4s1fbmudu.apps.googleusercontent.com"
}
