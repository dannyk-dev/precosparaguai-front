import RegisterForm from '@/lib/components/Forms/Register/RegisterForm';
import React from 'react';

interface IProps {}

export const Register = ({}: IProps) => {
    return (
        <div className="container h-screen bg-gradient-to-br from-orange-400 to-amber-700">
            <RegisterForm />
        </div>
    );
};
