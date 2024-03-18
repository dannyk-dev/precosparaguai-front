'use client';

import { RequireAuth } from '@/lib/hooks/auth';
import { useAuthStore } from '@/lib/store';
import React, { useEffect } from 'react';

const Dashboard = () => {
    const user = useAuthStore((state) => state.user);

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <RequireAuth redirectPage={true}>
            <div className="container">
                <h1 className="text-center">Dashboard</h1>
                <h4>Welcome {user?.username}</h4>
            </div>
        </RequireAuth>
    );
};

export default Dashboard;
