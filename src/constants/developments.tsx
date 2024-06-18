import ClinicRegister from "../pages/ClinicRegister/ClinicRegister"

export const connection_path = {
    base_url: "https://localhost:7163",
    api: "/api",
    endpoints: {
        login: "/auth/login",
        logout: "/auth/logout",
        user: "/user/info",
        clinic: "/clinic/",
        checkAuth: "/auth/validate",
        googeAuth: "/auth/google",
        register: "/user/register",
        getAllServices: "/service/get-all",
        clinicRegister: "/clinic/register",
    },

    booking: {
        available_date: '/booking/availabe-date',
        available_slot: '/booking/availabe-slot',
        check_available: '/booking/available',
        place_book: '/booking/general-book',
        get_booking: '/booking/schedule/staff',
        get_cus_booking: '/booking/schedule/customer'
    }
}

export const google_auth = {
    client_id:"843209512674-7rck108lbhqbplg9hnc8f6u4s1fbmudu.apps.googleusercontent.com"
}