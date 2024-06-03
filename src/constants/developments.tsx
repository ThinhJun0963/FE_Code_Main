export const connection_path = {
    base_url: "http://localhost:5268",
    api: "/api",
    endpoints: {
        login: "/auth/login",
        user: "/user/",
        clinic: "/clinic/",
        checkAuth: "/auth/validate",
        googeAuth: "/auth/google",
        register: "/user/register"
    }
}

export const google_auth = {
    client_id:"843209512674-7rck108lbhqbplg9hnc8f6u4s1fbmudu.apps.googleusercontent.com"
}