'use client';

import { useForm } from '@/lib/hooks/auth';
import { RegisterData } from '@/lib/types/auth.types';
import React from 'react';
import { IFormProps } from '@/lib/interfaces';

export const Form = ({ requestTo, FormContent }: IFormProps) => {
    const { handleSubmit, ...props } = useForm<RegisterData>(requestTo);

    return (
        <form onSubmit={handleSubmit}>
            <div className="container px-3">
                <div className="wrapper d-flex mt-2 flex-col space-y-5 ">
                    <FormContent {...props} />
                </div>
            </div>
        </form>
    );
};
