'use client';

import RegisterForm from '@/lib/components/Forms/Register/RegisterForm';
import AuthLayout from '@/lib/layout/AuthLayout';

export const Register = () => {
    return (
        <AuthLayout>
            <div className="drawer drawer-end drawer-open relative w-full ">
                <input
                    id="my-drawer-2 "
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-side w-96">
                    <ul className="menu min-h-full w-96 bg-zinc-100/30 p-4 text-base-content shadow-sm-light backdrop-blur-lg">
                        <div className="wrapper flex h-full flex-col justify-around">
                            <h4 className="mb-10 text-center font-normal">
                                Register your account
                            </h4>
                            <RegisterForm />
                        </div>
                    </ul>
                </div>
            </div>
        </AuthLayout>
    );
};
