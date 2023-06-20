import React from "react";

import { Outlet } from "react-router-dom";

import Layout from '../components/layout/';

import Home from '../pages/home';
import CadastrarInformacoes from '../pages/curriculo/CadastrarInformacoes';
import CadastrarExperiencia from '../pages/curriculo/CadastrarExperiencia/CadastrarExperiencia';
import ListaPortfolio from '../pages/portfolio/ListaPortfolio';
import ListaExperiencia from '../pages/curriculo/ListaExperiencia'
import CadastrarPortfolio from '../pages/portfolio/CadastrarPortfolio';



const AppRoutes: React.FC = () => {
    return (

        <Layout>
            <Outlet />
        </Layout>

    );

};

export default AppRoutes;