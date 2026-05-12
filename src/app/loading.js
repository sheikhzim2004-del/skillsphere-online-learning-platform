import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div>
            <h1 className="text-center h-screen items-center flex justify-center gap-4 text-white text-2xl font-semibold mt-10">
                Loading... <Spinner />

            </h1>
        </div>
    );
};

export default loading;