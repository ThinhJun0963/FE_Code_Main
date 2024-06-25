import { jwtDecode } from "jwt-decode";

interface JwtPayload {
    sub: string;
    exp: number;
    iat: number;
}

const decodeToken = (token: string) => {
    try {
        const decoded = jwtDecode<JwtPayload>(token);
        return decoded;
    } catch (error) {
        console.error("Failed to decode token:", error);
    }
};

export default decodeToken;
