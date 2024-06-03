export const connection_path = {
    base_url: "http://localhost:5268",
    api: "/api",
    endpoints: {
        login: "/auth/login",
        user: "/user/info",
        clinic: "/clinic/",
        checkAuth: "/auth/validate",
        googeAuth: "/auth/google",
        register: "/user/register"

    }
}

export const google_auth = {
    client_id:"[Your Google Auth ID here]"
}