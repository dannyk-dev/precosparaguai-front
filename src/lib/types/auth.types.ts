export interface RegisterData {
    username?: string;
    email: string;
    password: string;
}

export type UserRegisterPayload = {
    token: string;
    username: string;
    email: string;
} | null;
