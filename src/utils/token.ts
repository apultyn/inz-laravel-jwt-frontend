import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import type { DecodedToken } from "./interfaces";

export function decodeToken(): DecodedToken {
    const token = Cookies.get("token");
    if (!token) {
        return {
            email: "",
            iat: 0,
            exp: 0,
            roles: [],
        };
    }
    const decoded = jwtDecode<DecodedToken>(token);
    return decoded;
}

export function getIsAdmin(): boolean {
    return (decodeToken().roles ?? []).includes("BOOK_ADMIN");
}

export function getIsUser(): boolean {
    return (decodeToken().roles ?? []).includes("BOOK_USER");
}
