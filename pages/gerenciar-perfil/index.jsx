import React, { useState } from 'react';
import Image from 'next/image'
import Header from '../components/topbar/topbar.jsx'
import Table,{ deleteEntry, addEntry, editEntry, TODO } from '../components/table/table.jsx'
import Lab from '../components/lab/lab.jsx'
import Input from '../components/input/input.jsx'

import styles from './telaGerenciamento.module.css'

const ProfileManagement = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleConfirmEmailChange = (e) => {
        setConfirmEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic here to update the profile information
        alert("Integração com o backend");
    };

    return (
        <div>
            
            <Header/>
            
            <h1 className={styles.title} >Gerenciamento de Perfil</h1>
            <div className={styles.shadow}></div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <Input 
                    title="Name" 
                    type="0" 
                    placeholder={"Insira seu nome completo"} 
                    onChange={handleNameChange} 
                    width={"360"} 
                />
                <br />
                <Input 
                    title="Email" 
                    type="0" 
                    placeholder={"Insira seu email"} 
                    onChange={handleEmailChange} 
                    width={"360"} 
                />
                <br />
                <Input
                    title="Confirm Email"
                    type="0"
                    placeholder={"Confirme seu email"}
                    onChange={handleConfirmEmailChange}
                    width={"360"}
                />
                <br />
                <Input
                    title="Password"
                    type="0"
                    placeholder={"Insira nova senha"}
                    onChange={handlePasswordChange}
                    width={"360"}
                />
                <br />
                <Input
                    title="Confirm Password"
                    type="0"
                    placeholder={"Confirme nova senha"}
                    onChange={handleConfirmPasswordChange}
                    width={"360"}
                />
                <br />
                
                <div className={styles.buttons}>
                    <button className={styles.buttonWhite}>Cancelar</button>
                    <button type="submit" className={styles.buttonBlue}>Confirmar</button>
                </div>
            </form>
        </div>
    );
};

export default ProfileManagement;
