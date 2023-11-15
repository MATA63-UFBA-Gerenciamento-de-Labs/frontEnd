import { useState } from 'react'
import Image from 'next/image'
import Header from '../components/topbar/topbar.jsx'
import Table from '../components/table/table.jsx'
import Action from '../components/action/action.jsx'
import History from '../components/history/history.jsx'
import Button from '../components/button/button.jsx'
import SideCard from '../components/sideCard/sideCard.jsx'

import miniuser from '../assets/miniuser.svg'
import pen from '../assets/pen.svg'
import prancheta from '../assets/prancheta.svg'
import pc from '../assets/pc.svg';
import styles from './telaTecnico.module.css'

export default function index(){

    var params = [
        {display:"Alunos", atribute:"name"}, 
        {display:"Número de Matrícula", atribute:"num"},
        {display:"Disciplina", atribute:"disci"},
        {display:"Turma", atribute:"lab"},
        {display:"Tipo", atribute:"type"},
        {display:"Data", atribute:"date"},
    ];

    var params2 = [
        {display:"Nome", atribute:"name"}, 
        {display:"CPF", atribute:"num"},
        {display:"Perfil", atribute:"per"},
        {display:"Disciplina", atribute:"disc"},
        {display:"Laboratório", atribute:"lab"},
    ];

    var params3 = [
        {display:"Laboratório", atribute:"name"}, 
        {display:"Estado", atribute:"state"},
        {display:"Disciplina", atribute:"disc"},
        {display:"Professor", atribute:"teacher"},
        {display:"Ocupação", atribute:"ocupation"},
    ];

    var [data,setData]= useState([
        {id:1,  name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"1", type:"Estudo", date: "08/09 20:00"},
        {id:2,  name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"2", type:"Aula", date: "08/09 20:00"},
        {id:3,  name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"3", type:"Aula", date: "08/09 20:00"},
        {id:4,  name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"4", type:"Estudo", date: "08/09 20:00"},
    ]);

    var [data2,setData2] = useState([
        {id:1,  name:"Lorem ipsum Delorium Spert", num:"999999999", per:"Aluno",       disc:"Lorem ipsum",                           lab:"1"},
        {id:2,  name:"Lorem ipsum Delorium Spert", num:"999999999", per:"Professor",   disc:"Lorem ipsum, Lorem ipsum, Lorem ipsum", lab:"11"},
        {id:3,  name:"Lorem ipsum Delorium Spert", num:"999999999", per:"Aluno",       disc:"Lorem ipsum, Lorem ipsum",              lab:"111"},
        {id:4,  name:"Lorem ipsum Delorium Spert", num:"999999999", per:"Professor",   disc:"Lorem ipsum",                           lab:"1111"},
    ]);

    var [data3,setData3] = useState([
        {id:1,  name:"Lorem ipsum Delorium Spert", state:"Indisponivel",       disc:"Lorem ipsum",                           teacher:"Lorem Ipsum",ocupation:"30"},
        {id:2,  name:"Lorem ipsum Delorium Spert", state:"Em aula até 20:20",  disc:"Lorem ipsum, Lorem ipsum, Lorem ipsum", teacher:"Lorem Ipsum",ocupation:"30"},
        {id:3,  name:"Lorem ipsum Delorium Spert", state:"Livre ate 18:30",    disc:"Lorem ipsum, Lorem ipsum",              teacher:"",           ocupation:"30"},
        {id:4,  name:"Lorem ipsum Delorium Spert", state:"aaaaaaaaaaaaa",      disc:"Lorem ipsum",                           teacher:"Lorem Ipsum",ocupation:"30"},
    ]);

    var actions = [
        <Button
            text={"Fornecer Tag"}
            color={"blue"}
            onClick={()=>{}}
        />,
    ];

    var actions2 = [
        <Button
            text={"Editar Dados"}
            color={"blue"}
            onClick={()=>{}}
        />,
        <Button
            text={"Fornecer Acesso"}
            color={"blue"}
            onClick={()=>{}}
        />,
        <Button
            text={"Remover Acesso"}
            color={"blue"}
            onClick={()=>{}}
        />,
    ];

    var actions3 = [
        <Button
            text={"Editar Dados"}
            color={"blue"}
            onClick={()=>{}}
        />,
        <Button
            text={"Enviar Funcionário"}
            color={"blue"}
            onClick={()=>{}}
        />,
    ];

    var info1 =[
        <History date={"17/08/2021"} hour={"08h00"} text={"Usuario 01"}/>,
        <History date={"17/08/2021"} hour={"08h00"} text={"Usuario 02"}/>,
        <History date={"17/08/2021"} hour={"08h00"} text={"Usuario 03"}/>,
    ]

    var info2=[
        <Action 
            image={<Image width={20} height={22} src={prancheta} alt='prancheta' />} 
            info ={<span>Gerar Relatório </span>}
        />,
    ]
    return(
        
        <div className="tela-professor">

            <Header/>
            
            <h1 className={styles.title} >Olá, técnico</h1>
            <div className={styles.shadow}></div>

        
            <div className={styles.center}>
                <div className={styles.ar}>
                    <div className={`${styles.table} ${styles.small}`}>
                        <Table 
                            title = {"Solicitações de Tag"}

                            titleImage = {<Image width={15} height={19} src={miniuser} alt='miniuser' />}

                            params={params}

                            data={data}

                            actions={actions}
                        />
                    </div>
                    <div className={styles.right}>
                        <SideCard
                            titleText={"Usuários com Tempo Excedido"}
                            titleImage={<Image width={17} height={19} src={pen} alt='pen' />}
                            info={info1}
                        />

                        <SideCard
                            titleText={"Gestão e Controle"}
                            titleImage={<Image width={15} height={19} src={pc} alt='pc' />}
                            info={info2}
                        />
                    </div>
                </div>
                <div className={styles.table}>
                    <Table 
                        title = {"Usuários Cadastrados"}

                        titleImage = {<Image width={15} height={19} src={miniuser} alt='miniuser' />}

                        params={params2}

                        data={data2}

                        actions={actions2}
                    />
                </div>

                <div className={styles.table}>
                    <Table 
                        title = {"Laboratórios"}

                        titleImage = {<Image width={15} height={19} src={miniuser} alt='miniuser' />}
                        
                        params={params3}

                        data={data3}

                        actions={actions3}
                    />
                </div>

            </div>
        </div>
    )
}