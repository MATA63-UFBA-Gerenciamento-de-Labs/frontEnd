// Modal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './grantAccessModalTecnico.module.css';

const GrantAccessModalTecnico = ({ isOpen, onRequestClose }) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [perfil, setPerfil] = useState('');
    const [disciplina, setDisciplina] = useState('');
    const [laboratorio, setLaboratorio] = useState('');
    const [file, setFile] = useState(null);


    const handleSubmit = () => {
        // Lógica para lidar com os dados, por exemplo, enviar para um servidor
        console.log({
            nome,
            cpf,
            perfil,
            disciplina,
            laboratorio,
            file
        });

        // Limpar os campos após o envio
        setNome('');
        setCpf('');
        setPerfil('');
        setDisciplina('');
        setLaboratorio('');
        setFile(null);

        // Fechar o modal
        onRequestClose();
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Grant Access Modal"
            className={styles.customModal}
            overlayClassName={styles.customOverlay}

        >
            <div className={styles.background}>
                <div className={styles.title}>
                    <h2 >Fornecer Acesso</h2>
                </div>
                <div className={styles.form}>
                    <form>
                        <div className={styles.field}>
                            <label>
                                Nome do Usuário:
                            </label>
                            <input
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                        
                            />
                        </div>
                        <div className={styles.field}>
                            <label>
                                CPF
                            </label>
                            <input
                                type="text"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </div>
                        <div className={styles.field}>
                            <label>
                                Perfil
                            </label>
                            <input
                                type="text"
                                value={perfil}
                                onChange={(e) => setPerfil(e.target.value)}
                            />
                        </div>
                        <div className={styles.field}>
                            <label>
                                Disciplina:
                            </label>
                            <input
                                type="text"
                                value={disciplina}
                                onChange={(e) => setDisciplina(e.target.value)}
                            />
                        </div>
                        <div className={styles.field}>
                            <label>
                                Laboratório:
                            </label>
                            <input
                                type="text"
                                value={laboratorio}
                                onChange={(e) => setLaboratorio(e.target.value)}
                            />
                        </div>
                        <div className={styles.field}>
                            <label>
                                Usuarios em Lotes:
                            </label>
                            <input type="file" name="arquivo" onChange={handleFileChange} />
                        </div>
                    </form>
                </div>
                <div className={styles.buttons}>
                    <button type="button" onClick={onRequestClose} className={styles.buttonWhite}>
                        Cancelar
                    </button>
                    <button type="button" onClick={handleSubmit} className={styles.buttonBlue}>
                        Enviar
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default GrantAccessModalTecnico;
