import React from 'react';
import { useLocation } from 'react-router';
const Result = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const input = parseInt(params.get('input') || '0');
    const textarea = parseInt(params.get('textarea') || '0');
    const checkbox = parseInt(params.get('checkbox') || '0');

    const renderInputs = Array.from({ length: input }, (_, i) => (
        <div key={`input-${i}`} className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Input {i + 1}</label>
            <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
        </div>
    ));

    const renderTextareas = Array.from({ length: textarea }, (_, i) => (
        <div key={`textarea-${i}`} className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Textarea {i + 1}</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[100px]" />
        </div>
    ));

    const renderCheckboxes = Array.from({ length: checkbox }, (_, i) => (
        <div key={`checkbox-${i}`} className="mb-4 flex items-center">
            <input type="checkbox" className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
            <label className="ml-3 text-gray-700 font-medium">Checkbox {i + 1}</label>
        </div>
    ));

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center p-4">
            <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">Сгенерированная форма</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <p className="text-lg font-semibold text-blue-700">Input</p>
                        <p className="text-3xl font-bold text-gray-800">{input}</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg text-center">
                        <p className="text-lg font-semibold text-indigo-700">Textarea</p>
                        <p className="text-3xl font-bold text-gray-800">{textarea}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <p className="text-lg font-semibold text-purple-700">Checkbox</p>
                        <p className="text-3xl font-bold text-gray-800">{checkbox}</p>
                    </div>
                </div>

                <form className="space-y-6">
                    {input > 0 && (
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                                Текстовые поля
                            </h2>
                            {renderInputs}
                        </div>
                    )}

                    {textarea > 0 && (
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                                Текстовые области
                            </h2>
                            {renderTextareas}
                        </div>
                    )}

                    {checkbox > 0 && (
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                                Чекбоксы
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{renderCheckboxes}</div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Result;
