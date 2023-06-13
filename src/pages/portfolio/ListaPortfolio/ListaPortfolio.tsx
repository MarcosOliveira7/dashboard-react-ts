import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Portfolio, deletePortfolio, getPortfolio} from '../../../services/portfolioService';

import styles from './ListaPortfolio.module.css';

const ListaPortfolio: React.FC = () => {
    const navigate = useNavigate();
    
    const [portfolio, setPortfolio] = React.useState<Portfolio[]>([]);
  

    const fetchPortfolio = async () => {
        try {
          const portfolio = await getPortfolio();
          setPortfolio(portfolio);
    
        } catch (error) {
          console.log('Erro ao buscar portfolios', error)
    
        }
    };
        
    useEffect(() => {
        fetchPortfolio();
    }, []);
    
    const handleEdit = (portfolio: Portfolio) => {
        navigate('/portfolio/cadastro', { state: portfolio });
    };
  
    const handleDelete = async (id: number) => {
      try {
  
        await deletePortfolio(id);
        fetchPortfolio();
        alert('Portfolio concluido com sucesso')
  
      } catch (error) {
          console.log('Erro ao buscar os portfolios', error);
          alert('Ocorreu um erro ao excluir o portfolio')
      }
      
    };


    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Imagem</th>
                    <th>Link</th>
                   {/* <th>Ações</th> */}
                </tr>

            </thead>
            <tbody>
                {portfolio.map((portfolio, index) => (
                    <tr key={index}>
                        <td>{portfolio.title}</td>
                        <td><img src={portfolio.image} alt={portfolio.title} className={styles.image}/></td> 
                        <td><a href={portfolio.link} target="_blank" rel="noreferrer">{portfolio.link}</a></td>
                        <td>
                            <button onClick={() => handleEdit(portfolio)}>Editar</button>    
                            <button onClick={() => handleDelete(portfolio.id)}>Excluir</button> 
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    );

};

export default ListaPortfolio;