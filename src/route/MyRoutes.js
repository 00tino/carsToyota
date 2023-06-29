import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Main } from '../components/main/Main';
import { Navbar } from '../components/layout/navbar/Navbar';
// import { Footer } from '../components/layout/footer/Footer';

export const MyRutes = () => {
    return (
        <BrowserRouter>

            {/* Header y navegacion */}
            <Navbar />

            {/* contenido central */}
            <section className="content">

                <Routes>

                    <Route path="/" element={<Navigate to="/Main" />} />;
                    <Route path="/Main" element={<Main />} />;
                    {/* <Route path="/Modelos" element={<Modelos />} />;
                    <Route path="/FichaDeModelos" element={<FichaDeModelo />} />; */}
                    <Route path="*" element={
                        <div className="page">
                            <h1 className="heading">Error 404</h1>
                        </div>
                    } />;
                </Routes>

            </section>
            
            {/* <Footer /> */}
                    
        </BrowserRouter>
    )
}
