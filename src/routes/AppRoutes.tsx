import React from "react";

import { Route } from "react-router-dom";

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
              <Route path="/" element={<Home />} />
              <Route path="/curriculo/informacoes/cadastro" element={<CadastrarInformacoes />} />
              <Route path="/curriculo/experiencia/cadastro" element={<CadastrarExperiencia />} />
              <Route path="curriculo/experiencia/lista" element={<ListaExperiencia />} />
             {<Route path="/portfolio/cadastro" element={<CadastrarPortfolio/>}  /> }
              <Route path="/portfolio/lista" element={<ListaPortfolio/>}  />
        </Layout>

    );

};

export default AppRoutes;