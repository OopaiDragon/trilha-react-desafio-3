import React from "react";
import { Header } from "../../components/Header";
import { Container, Column, TitleLogin, Subtitle, Title, Row, TypeText, SignText } from "./styles";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'; 
import { api } from "../../services/api"; 

const SignIn = () => {
    const navigate = useNavigate(); 
    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            const { data } = await api.post('/users', {
                name: formData.nome,
                email: formData.email,
                senha: formData.senha
            });

            if (data.id) {
                alert('Usuário cadastrado com sucesso!');
                navigate('/feed'); 
            } else {
                alert('Erro ao cadastrar o usuário');
            }
        } catch (error) {
            alert('Ocorreu um erro no cadastro');
        }
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                    A plataforma para você aprender com experts,
                     dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column isWhiteBackground={true}> 
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <Subtitle>Crie sua conta e make the change._</Subtitle>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="Nome completo" leftIcon={<MdPerson color="purple"/>} name="nome" control={control}/>
                        {errors.nome && <span>Nome é obrigatório</span>}   
                        <Input placeholder="E-mail" leftIcon={<MdEmail color="purple"/>} name="email" control={control}/>
                        {errors.email && <span>E-mail é obrigatório</span>}                       
                        <Input type="password" placeholder="Password" leftIcon={<MdLock color="purple"/>} name="senha" control={control}/>
                        {errors.senha && <span>Senha é obrigatório</span>}                       
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <TypeText>Ao clicar em "criar minha conta grátis",
                             declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TypeText>
                             <br/>
                        <SignText>Já tenho conta. <span onClick={() => navigate("/login")} >Fazer login</span></SignText>
                    </Row>
                </Column>
            </Container>
        </>
    );
};

export { SignIn };
