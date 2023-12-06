import React, { useState } from 'react';
import Image from 'next/image'
import Header from '../components/topbar/topbar.jsx'
import Table,{ deleteEntry, addEntry, editEntry, TODO } from '../components/table/table.jsx'
import Lab from '../components/lab/lab.jsx'
import Input from '../components/input/input.jsx'
import UserModel from "../../utils/user_model"
import { useRouter } from 'next/router';
import {  CircularProgress } from "@mui/material";


import styles from './telaGerenciamento.module.css'
import axios from 'axios';
import ProtectedRoute from '../../utils/protected_route.js';

const baseURL = "https://back-end-orcin-theta.vercel.app";
const path = "/usuario/atualizar";

const ProfileManagement = () => {


  const user = new UserModel();
  const router = useRouter();


    const [loading, setLoading] = useState(false);
    const [name, setName] = useState(user?.name ?? "");
    const [email, setEmail] = useState(user?.email ?? "");
    const [confirmEmail, setConfirmEmail] = useState(user?.email ?? "");
    const [password, setPassword] = useState(user?.senha ?? "");
    const [confirmPassword, setConfirmPassword] = useState(user?.senha ?? "");

    const handleGoBack = () => {
     router.back();
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        user.name = e.target.value;
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        user.email = e.target.value;
    };

    const handleConfirmEmailChange = (e) => {
        setConfirmEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        user.senha = e.target.value;
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email !== confirmEmail){
            alert("Emails não coincidem");
            return;
        }
        if(password !== confirmPassword){
            alert("Senhas não coincidem");
            return;
        }

        if( user === null){
            alert("Erro ao atualizar dados");
            return;
        }

        setLoading(true);

        const userJson = user.toJson();

        axios.put(baseURL + path, userJson).then((response) => {
          setLoading(false);
            if(response.status === 200){
                alert("Dados atualizados com sucesso");
                router.back();
            }
        }).catch((error) => {
          setLoading(false);
            alert("Erro ao atualizar dados");
        });
       
    };

    return (
      <ProtectedRoute>
       <div>
            
            <Header/>
            
            <h1 className={styles.title} >Gerenciamento de Perfil</h1>
            <div className={styles.shadow}></div>

            <form  className={styles.form}>
                <Input 
                value={name}
                    title="Name" 
                    type="text" 
                    placeholder={"Insira seu nome completo"} 
                    onChange={handleNameChange} 
                    width={"360"} 
                />
                <br />
                <Input 
                value={ email}
                    title="Email" 
                    type="text" 
                    placeholder={"Insira seu email"} 
                    onChange={handleEmailChange} 
                    width={"360"} 
                />
                <br />
                <Input
                value={confirmEmail}
                    title="Confirm Email"
                    type="text"
                    placeholder={"Confirme seu email"}
                    onChange={handleConfirmEmailChange}
                    width={"360"}
                />
                <br />
                <Input
                value={password}
                    title="Password"
                    type="text"
                    placeholder={"Insira nova senha"}
                    onChange={handlePasswordChange}
                    width={"360"}
                />
                <br />
                <Input
                value={confirmPassword}
                    title="Confirm Password"
                    type="text"
                    placeholder={"Confirme nova senha"}
                    onChange={handleConfirmPasswordChange}
                    width={"360"}
                />
                <br />          

            </form>
            {loading &&   <div className={styles.loadingContainer}> <CircularProgress></CircularProgress> </div>}
            {!loading && (<div className={styles.buttons}>
                    <button onClick={handleGoBack} className={styles.buttonWhite}>Cancelar</button>
                    <button onClick={handleSubmit} type="submit" className={styles.buttonBlue}>Confirmar</button>
                </div>)
            }
        </div>
      </ProtectedRoute>
      
    );
};

export default ProfileManagement;
