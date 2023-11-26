import Image from 'next/image'
import Header from '../components/topbar/topbar.jsx'
import Table,{ deleteEntry, addEntry, editEntry, TODO } from '../components/table/table.jsx'
import Lab from '../components/lab/lab.jsx'
import Button from '../components/button/button.jsx'

import miniuser from '../assets/miniuser.svg'
import pen from '../assets/pen.svg'
import hammer from '../assets/hammer.svg'
import prancheta from '../assets/prancheta.svg'
import pc from '../assets/pc.svg';
import styles from './telaProfessor.module.css'
import SideCard from '../components/sideCard/sideCard.jsx'
import Action from '../components/action/action.jsx'
import { useState } from 'react'

var i = 1;

function keys(){
    return i++;
}

export default function index(){

    var params = [
        {display:"check"},
        {display:"Alunos", atribute:"name"}, 
        {display:"Número de Matrícula", atribute:"num"},
        {display:"Disciplina", atribute:"disci"},
        {display:"Laboratório", atribute:"lab"},
    ];

    var [data, setData] = useState([
        {id:1,  selected:false, name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"1"},
        {id:2,  selected:false, name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"2"},
        {id:3,  selected:false, name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"3"},
        {id:4,  selected:false, name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"4"},
        {id:5,  selected:false, name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"5"},
        {id:6,  selected:false, name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"6"},
        {id:7,  selected:false, name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"7"},
        {id:8,  selected:false, name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"8"},
        {id:9,  selected:false, name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"9"},
        {id:10, selected:false, name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"10"},
        {id:11, selected:false, name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"11"},
    ]);
    
    var actions = [
        <Button
            key={keys()}
            text={"Fornecer Acesso"}
            color={"blue"}
            onClick={()=>{ addEntry( data, setData) }}
        />,
        <Button
            key={keys()}
            text={"Remover Acesso"}
            color={"blue"}
            onClick={()=>{ deleteEntry( data, setData ) }}
        />,
    ];

    var info1 =[
        <Action 
            key={keys()}
            image={<Image width={23} height={25} src={hammer} alt='hammer' />}
            info={<span>Solicitar Reparo de Laboratório</span>} 
        />,
        <div className={styles.line} key={keys()}></div>,
        <Action
            key={keys()}
            image={<Image width={20} height={22} src={prancheta} alt='prancheta' />}
            info={<span>Gerar Presença de Aula</span>}
        />
    ]

    var info2 = [
        <Action 
            key={keys()}
            image={<Image width={20} height={22} src={prancheta} alt='prancheta' />} 
            info ={<Lab clas={"MATA01"} days={["Seg,","Qua"]} hour={"16:40"} number={"Lab 101"} color={"#1351B4"} cla={"action"}/>}
        />,
        <Action 
            key={keys()}
            image={<Image width={20} height={22} src={prancheta} alt='prancheta' />} 
            info ={<Lab clas={"MATA01"} days={["Seg,","Qua"]} hour={"16:40"} number={"Lab 101"} color={"#1351B4"} cla={"action"}/>}
        />,
        <Action 
            key={keys()}
            image={<Image width={20} height={22} src={prancheta} alt='prancheta' />} 
            info ={<Lab clas={"MATA01"} days={["Seg,","Qua"]} hour={"16:40"} number={"Lab 101"} color={"#1351B4"} cla={"action"}/>}
        />,
    ]

    return(
        
        <div className="tela-professor">

            <Header/>
            
            <h1 className={styles.title} >Olá, professor</h1>
            <div className={styles.shadow}></div>

            <div className={styles.center}>
                <div className={styles.Table}>
                    <Table 
                        title={"Alunos Matriculados"}
                    
                        titleImage={<Image width={15} height={19} src={miniuser} alt='miniuser' />}

                        params={params}

                        data={data}

                        setData={setData}

                        actions={actions}
                    />
                </div>
                <div className={styles.sideCards}>
                    <SideCard
                        titleText={"Outras Ações"}
                        titleImage={<Image width={17} height={19} src={pen} alt='pen' />}
                        info={info1}
                        clas={"action"}
                    />

                    <SideCard
                        titleText={"Meus Laboratórios"}
                        titleImage={<Image width={15} height={19} src={pc} alt='pc' />}
                        info={info2}
                        clas={"action"}
                    />
                </div>
            </div>
        </div>
    )
}