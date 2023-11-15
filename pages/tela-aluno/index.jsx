import Header from '../components/topbar/topbar.jsx'
import Input from '../components/input/input.jsx'
import Lab  from '../components/lab/lab.jsx'
import History from '../components/history/history.jsx'
import styles from './telaAluno.module.css'
import Button from '../components/button/button.jsx'

import Image from 'next/image'
import building from '../assets/building.svg';
import book from '../assets/book.svg';
import cartao from '../assets/cartao.svg';
import pc from '../assets/pc.svg';
import back from '../assets/back.svg';
import MainCard from '../components/mainCard/mainCard.jsx'
import SideCard from '../components/sideCard/sideCard.jsx'

export default function index(){

    var firstRow1 = [
        <Input type={0} title={"Número de Matrícula"} placeholder={"Ex: 219116052"}/>,
        <Input type={0} title={"Código da Matéria"} placeholder={"Ex: MATA00"}/>,
        <Input type={1} title={"Laboratório"} placeholder={"Selecione a laboratório"}/>
    ]
    var secondRow1 = [<Input type={1} title={"Turma"} placeholder={"Selecione a turma"}/>]
    var buttons1 = [
        <Button
            text={"Limpar"}
            color={"white"}
            onClick={()=>{}}
        />,
        <Button
            text={"Confirmar"}
            color={"blue"}
            onClick={()=>{}}
        />
    ]

    var firstRow2 = [
        <Input type={0} title={"Número de Matrícula"} placeholder={"Ex: 219116052"}/>,
        <Input type={1} title={"Laboratório"} placeholder={"Selecione a laboratório"}/>,
        <Input type={1} title={"Período"} placeholder={"Selecione o período"}/>,
    ]

    var firstRow3 =[
        <Input type={0} title={"Número de Matrícula"} placeholder={"Ex: 219116052"}/>,
        <Input type={0} title={"Código da Matéria"} placeholder={"Ex: MATA00"}/>,
        <Button
            text={"Confirmar"}
            color={"blue"}
            onClick={()=>{}}
        />,
    ]

    var info1 =[
        <Lab clas={"MATA01"} days={["Seg,","Qua"]} hour={"16:40"} number={"Lab 101"}/>,
        <Lab clas={"MATA01"} days={["Seg,","Qua"]} hour={"16:40"} number={"Lab 101"}/>,
        <Lab clas={"MATA01"} days={["Seg,","Qua"]} hour={"16:40"} number={"Lab 101"}/>,
        <div style={{ height: "29px;"}}></div>,
    ]

    var info2 =[
        <History date={"17/08/2021"} hour={"08h00"} text={"Acesso Realizado 01"}/>,
        <History date={"17/08/2021"} hour={"08h00"} text={"Acesso Realizado 02"}/>,
        <History date={"17/08/2021"} hour={"08h00"} text={"Acesso Realizado 03"}/>,
        <div style={{ height: "64px;"}}></div>,
    ]
    
    return(
        
        <div className="tela-aluno">

            <Header/>
            
            <h1 className={styles.title} >Olá, aluno</h1>
            <div className={styles.shadow}></div>

            <div className={styles.center}>
                <div className={styles.mainCards}>
                    <MainCard
                        titleText={"Solicitar acesso a um laboratório de aula"}
                        titleImage={<Image width={15} height={19} src={building} alt='building'/>}
                        firstRow={firstRow1}
                        secondRow={secondRow1}
                        buttons={buttons1}
                    />
                     <MainCard
                        titleText={"Solicitar acesso a um laboratório de estudo"}
                        titleImage={<Image width={15} height={19} src={book} alt='book'/>}
                        firstRow={firstRow2}
                        buttons={buttons1}
                    />
                    <MainCard
                        titleText={"Solicitar nova tag"}
                        titleImage={<Image width={15} height={19} src={cartao} alt='cartao'/>}
                        firstRow={firstRow3}
                    />
                </div>
                
                <div className={styles.sideCards}>
                    <SideCard
                        titleText={"Solicitar nova tag"}
                        titleImage={<Image width={15} height={19} src={pc} alt='pc' />}
                        info={info1}
                    />
                    <SideCard
                        titleText={"Histórico de acessos"}
                        titleImage={<Image width={15} height={19} src={back} alt='back' />}
                        info={info2}
                    />
                </div>
            </div>
        </div>
    )
}