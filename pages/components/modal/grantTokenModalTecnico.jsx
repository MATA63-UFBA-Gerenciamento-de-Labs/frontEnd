// Modal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './grantAccessModalTecnico.module.css';

const GrantTokenModalTecnico = ({ isOpen, onRequestClose }) => {
    const [nomeAluno, setNomeAluno] = useState('');
    const [numeroMatricula, setNumeroMatricula] = useState('');
    const [disciplina, setDisciplina] = useState('');
    const [turma, setTurma] = useState('');
    const [tipo, setTipo] = useState('');
    const [data, setData] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = () => {
        // Lógica para lidar com os dados, por exemplo, enviar para um servidor
        console.log({
            nomeAluno,
            numeroMatricula,
            disciplina,
            turma,
            tipo,
            data,
            file
        });

        // Limpar os campos após o envio
        setNomeAluno('');
        setNumeroMatricula('');
        setDisciplina('');
        setTurma('');
        setTipo('');
        setData('');
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
                    <h2 >Fornecer Tag</h2>
                </div>
                <div className={styles.form}>
                    <form>
                        <div className={styles.field}>
                            <label>
                                Nome do Aluno:
                            </label>
                            <input
                                type="text"
                                value={nomeAluno}
                                onChange={(e) => setNomeAluno(e.target.value)}                
                            />
                        </div>
                        <div className={styles.field}>
                            <label>
                                Número de Matrícula
                            </label>
                            <input
                                type="text"
                                value={numeroMatricula}
                                onChange={(e) => setNumeroMatricula(e.target.value)}
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
                                Turma:
                            </label>
                            <input
                                type="text"
                                value={turma}
                                onChange={(e) => setTurma(e.target.value)}
                            />
                        </div>
                        <div className={styles.field}>
                            <label>
                                Tipo:
                            </label>
                            <input
                                type="text"
                                value={tipo}
                                onChange={(e) => setTipo(e.target.value)}
                            />
                        </div>
                        <div className={styles.field}>
                            <label>
                                Data:
                            </label>
                            <input
                                type="text"
                                value={data}
                                onChange={(e) => setData(e.target.value)}
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

export default GrantTokenModalTecnico;
