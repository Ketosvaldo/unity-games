import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home/Home';

const AppRoutes = () => (
    <div>
        <App />
        <Home />
    </div>
)

export default AppRoutes;