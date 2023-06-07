import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Page from '../app/page'
import Registro from '../app/pages/page'


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
            <Routes>
                    <Route  path='/' element={<Page />}/>
                    <Route  path='/registro' element={<Registro />}/>
            </Routes>
            </Layout>
        </BrowserRouter>
        
    );
}

export default App;