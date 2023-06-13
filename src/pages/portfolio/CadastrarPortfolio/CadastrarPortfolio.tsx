import React from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './CadastrarPortfolio.module.css';
import Input from '../../../components/forms/input/input';
import { Portfolio, createOrUpdatePortfolio } from '../../../services/portfolioService';



const CadastrarPortfolio: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const portfolio = location.state as Portfolio;
 
    const initialValues: Portfolio = {
        id: 0,
        link: "",
        image: "",
        title: "",
    };
    
    const validationSchema = Yup.object().shape({
        link: Yup.string().required("Campo Obrigatório"),
        image: Yup.string().required("Campo Obrigatório"),
        title: Yup.string().required("Campo Obrigatório")
    
    });

    const onSubmit = async (values: Portfolio, { resetForm }: { resetForm: () => void }) => {
        try {
            await createOrUpdatePortfolio(values);
            console.log(values);
            resetForm();
            navigate('/portfolio/lista')
            alert(' enviado com sucesso!');
          } catch (error) {
            console.log(error);
            alert('Ocorreu um erro ao enviar o formulário');
          }
        };



    return (
        <div className={styles.formWrapper}>
            <Formik
                initialValues={portfolio || initialValues }
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <h2 className={styles.title}>Cadastrar Portfólio</h2>
                        <Input
                            label="Link"
                            name="link"
                            errors={errors.link}
                            touched={touched.link}
                        />

                        <Input
                            label="Imagem"
                            name="image"
                            errors={errors.image}
                            touched={touched.image}
                        />
                        <Input
                            label="Título"
                            name="title"
                            errors={errors.title}
                            touched={touched.title}
                        />

                        <button type="submit" className={styles.button}>Enviar</button>


                        </Form>
                )}

            </Formik>

        </div>
    );
};

export default CadastrarPortfolio;