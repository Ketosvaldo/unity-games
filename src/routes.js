import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home/Home';
import GameScreen from './components/Games/GameScreen';
import Runnerverse from './components/Games/Runnerverse';
import About from './components/About/About';
const AppRoutes = () => (
    <App>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/gameScreen" element={<GameScreen/>}/>
            <Route path="/runnerverse" element={<Runnerverse/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </App>
)

export default AppRoutes;