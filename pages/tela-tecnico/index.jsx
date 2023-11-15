import { useState } from 'react'
import Image from 'next/image'
import Header from '../components/topbar/topbar.jsx'
import Table from '../components/table/table.jsx'
import Lab from '../components/lab/lab.jsx'
import History from '../components/history/history.jsx'
import Button from '../components/button/button.jsx'

import miniuser from '../assets/miniuser.svg'
import pen from '../assets/pen.svg'
import hammer from '../assets/hammer.svg'
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
        {id:1,  name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"1", type:"Estudo"},
        {id:2,  name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"2", type:"Aula"},
        {id:3,  name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"3", type:"Aula"},
        {id:4,  name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"4", type:"Estudo"},
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

    return(
        
        <div className="tela-professor">

            <Header/>
            
            <h1 className={styles.title} >Olá, técnico</h1>
            <div className={styles.shadow}></div>

            <div className={styles.cardTitle}>
                <Image width={15} height={19} src={miniuser} alt='miniuser' />
                <h3>Solicitações de Tag</h3>
            </div>

            <div className={styles.center}>
                <div className={styles.ar}>
                    <div className={styles.Table}>
                        <Table 
                            title = {"Solicitações de Tag"}

                            titleImage = {<Image width={15} height={19} src={miniuser} alt='miniuser' />}

                            params={params}

                            data={data}

                            actions={actions}
                        />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.infoCard}>
                        <div className={styles.cardTitle}> 
                            <Image width={17} height={19} src={pen} alt='pen' />
                            <h3>Usuários com Tempo Excedido</h3>
                        </div>
                        <div className={styles.otherActions}>
                            <History date={"17/08/2021"} hour={"08h00"} text={"Usuario 01"}/>
                            <History date={"17/08/2021"} hour={"08h00"} text={"Usuario 02"}/>
                            <History date={"17/08/2021"} hour={"08h00"} text={"Usuario 03"}/>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.cardTitle}> 
                            <Image width={15} height={19} src={pc} alt='pc' />
                            <h3>Gestão e Controle</h3>
                        </div>
                        <div className={styles.labs}>
                            
                        <a href="" className={styles.bot}>
                            <Image width={20} height={22} src={prancheta} alt='prancheta' />
                            <div className={styles.divSpan}><span>Gerar Relatório </span></div>
                        </a>  
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.cardTitle}>
                <Image width={15} height={19} src={miniuser} alt='miniuser' />
                <h3>Usuários Cadastrados</h3>
            </div>

            <div className={styles.center}>
                <div className={styles.Table2}>
                    <Table 
                        title = {"Usuários Cadastrados"}

                        titleImage = {<Image width={15} height={19} src={miniuser} alt='miniuser' />}

                        params={params2}

                        data={data2}

                        actions={actions2}
                    />
                </div>
            </div>

            <div className={styles.cardTitle}>
                <Image width={15} height={19} src={miniuser} alt='miniuser' />
                <h3>Laboratórios</h3>
            </div>

            <div className={styles.center}>
                <div className={styles.Table2}>
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