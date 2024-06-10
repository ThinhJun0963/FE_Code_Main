export const connection_path = {
    // base_url: "https://localhost:5268",
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
    }
}

export const google_auth = {
    client_id:"[Your Google Auth ID here]"
}