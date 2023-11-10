import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Clientes from './screens/Clientes'; 

const AppRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/clientes' element={<Clientes />} />
                </Routes>
            </Router>
        </>
    )
}

export default AppRoutes;