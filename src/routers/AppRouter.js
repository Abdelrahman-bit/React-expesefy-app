import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import HomePage from '../components/HomePage';
import Help from '../components/Help';
import EditPage from '../components/EditPage';
import CreatePage from '../components/CreatePage';



const AppRouter = () => (
    <BrowserRouter>

        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} exact="true" />
                <Route path="/creat" element={<CreatePage />} />
                <Route path="/help" element={<Help />} />
                <Route path="/edit/:id" element={<EditPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
        
    </BrowserRouter>
)

export default AppRouter;