
export const connection_path = {
    base_url: "https://localhost:7163/api",
    endpoints: {

    },

    booking: {
        available_date: '/booking/available-date',
        available_slot: '/booking/available-slot',
        check_available: '/booking/available',
        place_book: '/booking'
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
    },

    clinic: {
        clinic: "/clinic/",
        clinicRegister: "/clinic/register",
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