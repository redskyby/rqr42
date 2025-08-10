import React from 'react';
import { useNavigate } from 'react-router';

import { FORM_PAGE } from '../../const/const';

const Main = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(FORM_PAGE);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center items-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Главная страница</h1>
                <button
                    type="button"
                    onClick={handleRedirect}
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75"
                >
                    FORM
                </button>
            </div>
        </div>
    );
};

export default Main;
