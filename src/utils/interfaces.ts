export interface Review {
    id: number;
    user_email: string;
    stars: number;
    comment: string;
    book_id: number;
}

export interface Book {
    id: number;
    title: string;
    author: string;
    reviews: Review[];
}

export interface SpringError {
    detail: string;
    description: string | null;
    violations: string[] | null;
}

export interface User {
    id: number;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    role: string;
}

export interface DecodedToken {
    email: string;
    exp: number;
    iat: number;
    role: string;
}

export interface LoginRequestResponse {
    access_token: string;
    expires_in: number;
}
