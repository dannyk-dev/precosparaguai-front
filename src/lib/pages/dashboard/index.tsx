import { RequireAuth } from '@/lib/hooks/auth';
import React from 'react';

const Dashboard = () => {
    return (
        <RequireAuth redirectPage={true}>
            <div className="container">
                <h1 className="text-center">Dashboard</h1>
            </div>
        </RequireAuth>
    );
};

export default Dashboard;
