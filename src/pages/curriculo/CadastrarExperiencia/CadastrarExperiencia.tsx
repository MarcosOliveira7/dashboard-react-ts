import { Formik, Form } from 'formik';

import React from 'react';

import * as Yup from 'yup';

import styles from './CadastrarExperiencia.module.css';
import Input from '../../../components/forms/input/input';
import Textarea from '../../../components/forms/textarea/textarea';

interface FormValues {

    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: string;
    anoFim: string;

}

const CadastrarExperiencia: React.FC = () => {

    const initialValues: FormValues = {

        titulo: "",
        descricao: "",
        tipo: "",
        anoInicio: "",
        anoFim: "",

    };

    const validationSchema = Yup.object().shape({

        titulo: Yup.string().required("Campo obrigatório"),
        descricao: Yup.string().required("Campo obrigatório"),
        tipo: Yup.string().required("Campo obrigatório"),
        anoInicio: Yup.number().required("Campo obrigatório").typeError("Um numero é obrigatorio!"),
        anoFim: Yup.number().required("Campo obrigatório").typeError("Um numero é obrigatorio!")
    });


    const onSubmit = (values: FormValues, { resetForm }: {resetForm: () => void}
    ) => {

        console.log(values);
        resetForm();
        alert("Formulário enviado com sucesso!");

    };

    return(
        <div className={styles.formWrapper}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <h2 className={styles.title}>Cadastrar Experiencia </h2>
                        <Input 
                            label="Título"
                            name="titulo"
                            errors={errors.titulo}
                            touched={touched.titulo}
                        />
                        <Input
                            label="AnoInicio"
                            name="anoInicio"
                            errors={errors.anoInicio}
                            touched={touched.anoInicio}
                        />

                        <Input
                            label="AnoFim"
                            name="anoFim"
                            errors={errors.anoFim}
                            touched={touched.anoFim}
                        />

                        <Textarea 
                            label="Descrição"
                            name="descrição"
                            errors={errors.descricao}
                            touched={touched.descricao}
                        />

                        <button type="submit" className={styles.button}> Cadastrar </button>

                    </Form>
                )}
            </Formik>

        </div>

    );

}

export default CadastrarExperiencia;