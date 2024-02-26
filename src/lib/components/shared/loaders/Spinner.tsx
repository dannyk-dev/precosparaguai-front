'use client';

type SpinnerProps = {
    scale?: number;
};

export const Spinner = ({ scale }: SpinnerProps) => {
    return (
        <div className="dot-spinner" style={{ scale }}>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
        </div>
    );
};
