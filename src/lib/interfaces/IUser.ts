export interface IUserModelDemo {
    _id: string;
    username: string;
    email: string;
    hashedPassword: string;
    timestamps: {
        createdAt: Date;
        updatedAt: Date;
    };
}
