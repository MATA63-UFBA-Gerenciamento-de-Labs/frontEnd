import Image from 'next/image'
import Header from '../components/topbar/topbar.jsx'
import Table from '../components/table/table.jsx'
import Lab from '../components/lab/lab.jsx'
import Button from '../components/button/button.jsx'

import miniuser from '../assets/miniuser.svg'
import pen from '../assets/pen.svg'
import hammer from '../assets/hammer.svg'
import prancheta from '../assets/prancheta.svg'
import pc from '../assets/pc.svg';
import styles from './telaProfessor.module.css'

export default function index(){

    var params = [
        {display:"Alunos", atribute:"name"}, 
        {display:"Número de Matrícula", atribute:"num"},
        {display:"Disciplina", atribute:"disci"},
        {display:"Laboratório", atribute:"lab"},
    ];

    var data = [
        {name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"1"},
        {name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"2"},
        {name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"3"},
        {name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"4"},
        {name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"5"},
        {name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"6"},
        {name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"7"},
        {name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"8"},
        {name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"9"},
        {name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"10"},
        {name:"Lorem ipsum Delorium Spert", num:"999999999", disci:"Lorem ipsum", lab:"11"},
    ];

    var actions = [
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

    return(
        
        <div className="tela-professor">

            <Header/>
            
            <h1 className={styles.title} >Olá, professor</h1>
            <div className={styles.shadow}></div>

            <div className={styles.cardTitle}>
                <Image width={15} height={19} src={miniuser} alt='miniuser' />
                <h3>Alunos Matriculados</h3>
            </div>

            <div className={styles.center}>
                <div className={styles.Table}>
                    <Table 
                        params={params}

                        data={data}

                        actions={actions}
                    />
                </div>
                <div className={styles.right}>
                    <div className={styles.infoCard}>
                        <div className={styles.cardTitle}> 
                            <Image width={17} height={19} src={pen} alt='pen' />
                            <h3>Outras Ações</h3>
                        </div>
                        <div className={styles.otherActions}>
                            <a href="" className={styles.top}>
                                <Image width={23} height={25} src={hammer} alt='hammer' />
                                <div className={styles.divSpan}><span>Solicitar Reparo de Laboratório</span></div>
                            </a>
                            <div className={styles.line}></div>
                            <a href="" className={styles.bot}>
                                <Image width={20} height={22} src={prancheta} alt='prancheta' />
                                <div className={styles.divSpan}><span>Gerar Presença de Aula</span></div>
                            </a>  
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.cardTitle}> 
                            <Image width={15} height={19} src={pc} alt='pc' />
                            <h3>Meus Laboratórios</h3>
                        </div>
                        <div className={styles.labs}>
                            
                            <a href="" className={styles.labsA}>
                                <div className={styles.labsDivImage}>
                                    <Image width={20} height={22} src={prancheta} alt='prancheta' />
                                </div>
                                <Lab clas={"MATA01"} days={["Seg,","Qua"]} hour={"16:40"} number={"Lab 101"} color={"#1351B4"}/>
                            </a>
                            
                            <a href="" className={styles.labsA}>
                                <div className={styles.labsDivImage}>
                                    <Image width={20} height={22} src={prancheta} alt='prancheta' />
                                </div>
                                <Lab clas={"MATA01"} days={["Seg,","Qua"]} hour={"16:40"} number={"Lab 101"} color={"#1351B4"}/>
                            </a>

                            <a href="" className={styles.labsA}>
                                <div className={styles.labsDivImage}>
                                    <Image width={20} height={22} src={prancheta} alt='prancheta' />
                                </div>
                                <Lab clas={"MATA01"} days={["Seg,","Qua"]} hour={"16:40"} number={"Lab 101"} color={"#1351B4"}/>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}