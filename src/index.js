import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import Homepage from './views/Homepage';
import Flow from './views/Flow';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/flow',
        element: <Flow />,
    },
]);

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />
);
