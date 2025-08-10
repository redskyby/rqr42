import React from 'react';

import { FormFieldInterface } from '../../interfaces/formFieldInterface';

const FormField = ({ label, value, setValue }: FormFieldInterface) => {
    return (
        <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">{label}</label>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value) || 0)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                min="0"
            />
        </div>
    );
};

export default FormField;
