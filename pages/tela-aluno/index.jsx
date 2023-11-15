import Header from '../components/topbar/topbar.jsx'
import Input from '../components/input/input.jsx'
import  Lab  from '../components/lab/lab.jsx'
import History from '../components/history/history.jsx'
import styles from './telaAluno.module.css'
import Button from '../components/button/button.jsx'

import Image from 'next/image'
import building from '../assets/building.svg';
import book from '../assets/book.svg';
import cartao from '../assets/cartao.svg';
import pc from '../assets/pc.svg';
import back from '../assets/back.svg';

export default function index(){

    return(
        
        <div className="tela-aluno">

            <Header/>
            
            <h1 className={styles.title} >Olá, aluno</h1>
            <div className={styles.shadow}></div>

            

            <div className={styles.center}>
                <div className={styles.inputsDiv}>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}> 
                            <Image width={15} height={19} src={building} alt='building' />
                            <h3>Solicitar acesso a um laboratório de aula</h3>
                        </div>
                        <div className={styles.cardInputs}>
                            <div className={styles.firstRowCard}>
                                <Input type={0} title={"Número de Matrícula"} placeholder={"Ex: 219116052"}/>
                                <Input type={0} title={"Código da Matéria"} placeholder={"Ex: MATA00"}/>
                                <Input type={1} title={"Laboratório"} placeholder={"Selecione a laboratório"}/>
                            </div>
                            <div className={styles.secondRowCard}>
                                <Input type={1} title={"Turma"} placeholder={"Selecione a turma"}/>
                                <div className={styles.buttons}>
                                    <Button
                                        text={"Limpar"}
                                        color={"white"}
                                        onClick={()=>{}}
                                    />
                                    <Button
                                        text={"Confirmar"}
                                        color={"blue"}
                                        onClick={()=>{}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}> 
                            <Image width={15} height={19} src={book} alt='book' />
                            <h3>Solicitar acesso a um laboratório de estudo</h3>
                        </div>
                        <div className={styles.cardInputs}>
                            <div className={styles.firstRowCard}>
                                <Input type={0} title={"Número de Matrícula"} placeholder={"Ex: 219116052"}/>
                                <Input type={1} title={"Laboratório"} placeholder={"Selecione a laboratório"}/>
                                <Input type={1} title={"Período"} placeholder={"Selecione o período"}/>
                            </div>
                            <div className={`${styles.secondRowCard} ${styles.dois}`}>
                                <div className={styles.buttons}>
                                    <Button
                                        text={"Limpar"}
                                        color={"white"}
                                        onClick={()=>{}}
                                    />
                                    <Button
                                        text={"Confirmar"}
                                        color={"blue"}
                                        onClick={()=>{}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.cardTres}`}>
                        <div className={styles.cardTitle}> 
                            <Image width={15} height={19} src={cartao} alt='cartao' />
                            <h3>Solicitar nova tag</h3>
                        </div>
                        <div className={`${styles.cardInputs} ${styles.cardInputsTres}`}>
                            <div className={styles.firstRowCard}>
                                <Input type={0} title={"Número de Matrícula"} placeholder={"Ex: 219116052"}/>
                                <Input type={0} title={"Código da Matéria"} placeholder={"Ex: MATA00"}/>
                                <div className={styles.buttonImproviso}>
                                    <Button
                                        text={"Confirmar"}
                                        color={"blue"}
                                        onClick={()=>{}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={styles.infoDiv}>
                    <div className={styles.infoCard}>
                        <div className={styles.cardTitle}> 
                            <Image width={15} height={19} src={pc} alt='pc' />
                            <h3>Solicitar nova tag</h3>
                        </div>
                        <div className={styles.labs}>
                            <Lab clas={"MATA01"} days={["Seg,","Qua"]} hour={"16:40"} number={"Lab 101"}/>
                            <Lab clas={"MATA01"} days={["Seg,","Qua"]} hour={"16:40"} number={"Lab 101"}/>
                            <Lab clas={"MATA01"} days={["Seg,","Qua"]} hour={"16:40"} number={"Lab 101"}/>

                        </div>
                    </div>
                    <div className={`${styles.infoCard} ${styles.infoCardDois}`}>
                        <div className={styles.cardTitle}> 
                            <Image width={15} height={19} src={back} alt='back' />
                            <h3>Histórico de acessos</h3>
                        </div>
                        <div className={styles.labs}>
                            <History date={"17/08/2021"} hour={"08h00"} text={"Acesso Realizado 01"}/>
                            <History date={"17/08/2021"} hour={"08h00"} text={"Acesso Realizado 02"}/>
                            <History date={"17/08/2021"} hour={"08h00"} text={"Acesso Realizado 03"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}