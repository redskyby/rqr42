import React from 'react';

export interface FormFieldInterface {
    label: string;
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}
