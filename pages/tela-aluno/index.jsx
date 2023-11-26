import React, { useState } from 'react';
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

var i = 1;

function keys(){
    return i++;
}

export default function index(){
    const [matricula1, setMatricula1] = useState("");
    const [codigoMateria1, setCodigoMateria1] = useState("");
    const [lab1, setLab1] = useState("default");
    const [turma1, setTurma1] = useState("default");
    
    const [matricula2, setMatricula2] = useState("");
    const [lab2, setLab2] = useState("");
    const [periodo2, setPeriodo2] = useState("default");

    const [matricula3, setMatricula3] = useState("");
    const [codigoMateria3, setCodigoMateria3] = useState("");

    
    var firstRow1 = [
        <Input type={"text"} title={"Número de Matrícula"} placeholder={"Ex: 219116052"} value={matricula1} onChange={(e) => setMatricula1(e.target.value)} key={keys()}/>,
        <Input type={"text"} title={"Código da Matéria"} placeholder={"Ex: MATA00"} value={codigoMateria1} onChange={(e) => setCodigoMateria1(e.target.value)}key={keys()}/>,
        <Input type={"dropdown"} title={"Laboratório"} placeholder={"Selecione a laboratório"} value={lab1} onChange={(e) => setLab1(e.target.value)}key={keys()}/>
    ]
    var secondRow1 = [<Input type={"dropdown"} title={"Turma"} placeholder={"Selecione a turma"} value={turma1} onChange={(e) => setTurma1(e.target.value)}key={keys()}/>]
    var buttons1 = [
        <Button
            text={"Limpar"}
            color={"white"}
            onClick={( )=>{ setMatricula1(""); setCodigoMateria1(""); setLab1("default"); setTurma1("default");}}
            key={keys()}
        />,
        <Button
            text={"Confirmar"}
            color={"blue"}
            onClick={()=>{ 
                        if (matricula1 && codigoMateria1 && lab1 && turma1)
                            alert( `Pedido para aula feito com sucesso para ${matricula1} ${codigoMateria1} ${lab1} ${turma1}`)
                        else
                            alert("Preencha todos os campos")
                    }}
            key={keys()}
        />
    ]

    var firstRow2 = [
        <Input type={"text"} title={"Número de Matrícula"} placeholder={"Ex: 219116052"} value={matricula2} onChange={(e) => setMatricula2(e.target.value)}key={keys()}/>,
        <Input type={"dropdown"} title={"Laboratório"} placeholder={"Selecione a laboratório"} value={lab2} onChange={(e) => setLab2(e.target.value)}key={keys()}/>,
        <Input type={"dropdown"} title={"Período"} placeholder={"Selecione o período"} value={periodo2} onChange={(e) => setPeriodo2(e.target.value)}key={keys()}/>,
    ]

    var buttons2 = [
        <Button
            text={"Limpar"}
            color={"white"}
            onClick={( )=>{ setMatricula2(""); setLab2(""); setPeriodo2("default");}}
            key={keys()}
        />,
        <Button
            text={"Confirmar"}
            color={"blue"}
            onClick={()=>{ 
                        if( matricula2 && lab2 && periodo2 )
                            alert( `Pedido para aula feito com sucesso para ${matricula2} ${lab2} ${periodo2}`)
                        else
                            alert("Preencha todos os campos")
                    }}
            key={keys()}
        />
    ]

    var firstRow3 =[
        <Input type={"text"} title={"Número de Matrícula"} placeholder={"Ex: 219116052"} value={matricula3} onChange={(e) => setMatricula3(e.target.value)} key={keys()}/>,
        <Input type={"text"} title={"Código da Matéria"} placeholder={"Ex: MATA00"} value={codigoMateria3} onChange={(e) => setCodigoMateria3(e.target.value)}key={keys()}/>,
        <Button
            text={"Confirmar"}
            color={"blue"}
            onClick={()=>{ 
                            if (matricula3 && codigoMateria3 )
                                alert( `Pedido para nova tag feito com sucesso para ${matricula3} ${codigoMateria3}`)
                            else
                                alert("Preencha todos os campos")
                        }}
            key={keys()}
        />,
    ]

    var info1 =[
        <Lab clas={"MATA01"} days={["Seg,","Qua"]} hour={"16:40"} number={"Lab 101"} key={keys()}/>,
        <Lab clas={"MATA01"} days={["Seg,","Qua"]} hour={"16:40"} number={"Lab 101"} key={keys()}/>,
        <Lab clas={"MATA01"} days={["Seg,","Qua"]} hour={"16:40"} number={"Lab 101"} key={keys()}/>,
        <div style={{ height: "29px"}} key={keys()}></div>,
    ]

    var info2 =[
        <History date={"17/08/2021"} hour={"08h00"} text={"Acesso Realizado 01"} key={keys()}/>,
        <History date={"17/08/2021"} hour={"08h00"} text={"Acesso Realizado 02"} key={keys()}/>,
        <History date={"17/08/2021"} hour={"08h00"} text={"Acesso Realizado 03"} key={keys()}/>,
        <div style={{ height: "64px"}} key={keys()}></div>,
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
                        buttons={buttons2}
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