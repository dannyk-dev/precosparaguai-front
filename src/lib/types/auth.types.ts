export type RegisterData = {
    username: string;
    email: string;
    password: string;
};

export type UserRegisterPayload = {
    _id: string;
    username: string;
    email: string;
} | null;
