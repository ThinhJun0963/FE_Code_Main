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
        user: "/user/info",
        register: "/user/register",
        get_all_service: "/service/get-all",
        clinicRegister: "/clinic/register",
    },

    booking: {
        available_date: '/booking/availabe-date',
        available_slot: '/booking/availabe-slot',
        check_available: '/booking/available',
        place_book: '/booking/general-book',
        get_booking: '/booking/schedule/staff',
        get_cus_booking: '/booking/schedule/customer'
    },
    service: {
        getAllServices: "/service/get-all",
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
