// Modal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './grantAccessModal.module.css'

const GrantAccessModal = ({ isOpen, onRequestClose }) => {
  const [nomeAluno, setNomeAluno] = useState('');
  const [numeroMatricula, setNumeroMatricula] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [laboratorio, setLaboratorio] = useState('');

  const handleSubmit = () => {
    // Lógica para lidar com os dados, por exemplo, enviar para um servidor
    console.log({
      nomeAluno,
      numeroMatricula,
      disciplina,
      laboratorio,
    });

    // Limpar os campos após o envio
    setNomeAluno('');
    setNumeroMatricula('');
    setDisciplina('');
    setLaboratorio('');

    // Fechar o modal
    onRequestClose();
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // cor escura com transparência
    zIndex: 9999,
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Grant Access Modal"
      //style={{ overlay: overlayStyle }}
      className={styles.customModal} // Adicione uma classe personalizada para estilização
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
                Número de Matrícula:
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
                Laboratório:
              </label>
              <input
                type="text"
                value={laboratorio}
                onChange={(e) => setLaboratorio(e.target.value)}
              />
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

export default GrantAccessModal;
