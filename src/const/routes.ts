import { PublicRoutesInterface } from '../interfaces/publicRoutesInterface';
import Form from '../pages/form/Form';
import Main from '../pages/main/Main';
import Result from '../pages/result/Result';
import { FORM_PAGE, MAIN_PAGE, RESULT_PAGE } from './const';

export const publicRoutes: PublicRoutesInterface[] = [
    {
        path: MAIN_PAGE,
        Component: Main,
    },
    {
        path: FORM_PAGE,
        Component: Form,
    },
    {
        path: RESULT_PAGE,
        Component: Result,
    },
];
