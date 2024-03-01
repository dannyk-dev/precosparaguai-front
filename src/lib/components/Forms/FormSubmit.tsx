import React from 'react';
import { Button, Spinner } from '@/lib/components/shared';
import { LogInIcon } from 'lucide-react';

interface IProps {
    submitBtnText: string;
    redirectText?: string;
    redirectLink?: string;
    isLoading?: boolean;
}

export const FormSubmit = ({
    submitBtnText,
    redirectText,
    redirectLink,
    isLoading,
}: IProps) => {
    return (
        <div className="form-control flex items-end">
            <Button
                Icon={LogInIcon}
                variant="primary"
                type="submit"
                className="mt-6 w-fit px-8 shadow-lg "
            >
                <span className="ml-2 font-extrabold">{submitBtnText}</span>
            </Button>
            {redirectText && (
                <Button
                    variant="link"
                    variantSize="xsmall"
                    to={redirectLink || '#'}
                    preventDefault={true}
                    className="mt-4"
                >
                    {redirectText}
                </Button>
            )}
            {isLoading && <Spinner variantSize="base" />}
        </div>
    );
};
