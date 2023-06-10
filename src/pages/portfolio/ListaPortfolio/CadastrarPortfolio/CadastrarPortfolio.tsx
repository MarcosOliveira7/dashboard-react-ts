import React from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import styles from './CadastrarPortfolio.module.css';

interface FormValues {
    link: string;
    image: string;
    title: string;
};

const initialValues: FormValues = {
    link: "",
    image: "",
    title: "",
};

const validationSchema = Yup.object().shape({
    link: Yup.string().required("Campo Obrigatório"),
    image: Yup.string().required("Campo Obrigatório"),
    title: Yup.string().required("Campo Obrigatório")

});

const CadastrarPortfolio = () => {

    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        //lógica de envio para backend
        console.log(values);
        resetForm;
        alert("Formulário enviado com sucesso");
    };


    return (
        <div className={styles.formWrapper}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <h2 className={styles.title}>Cadastro de Portfólio</h2>
                    </Form>
                )}

            </Formik>

        </div>
    );
};

export default CadastrarPortfolio;