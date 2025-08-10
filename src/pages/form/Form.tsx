import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import FormField from '../../components/formField/formField';
import { RESULT_PAGE } from '../../const/const';

const Form = () => {
    const [countOfInput, SetCountOfInput] = useState<number>(0);
    const [countOfTextAria, SetCountOfTextAria] = useState<number>(0);
    const [countOfCheckbox, SetCountOfCheckbox] = useState<number>(0);

    const navigate = useNavigate();

    const handleRedirect = (e: React.FormEvent) => {
        e.preventDefault();

        navigate(`${RESULT_PAGE}?input=${countOfInput}&textarea=${countOfTextAria}&checkbox=${countOfCheckbox}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center items-center p-4">
            <form onSubmit={handleRedirect} className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">Создание элементов</h1>
                <FormField label={'Количество input'} value={countOfInput} setValue={SetCountOfInput} />
                <FormField label={'Количество textarea'} value={countOfTextAria} setValue={SetCountOfTextAria} />
                <FormField label={'Количество checkbox'} value={countOfCheckbox} setValue={SetCountOfCheckbox} />

                <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75"
                >
                    Build
                </button>
            </form>
        </div>
    );
};

export default Form;
