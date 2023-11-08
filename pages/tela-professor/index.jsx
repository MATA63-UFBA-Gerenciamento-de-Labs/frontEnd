import Image from 'next/image'
import { Header } from '../components/topbar/topbar.jsx'
import { Table } from '../components/table/table.jsx'
import miniuser from '../assets/miniuser.svg'
import styles from './telaProfessor.module.css'

export default function index(){

    return(
        
        <div className="tela-professor">

            <Header/>
            
            <h1 className={styles.title} >Olá, professor</h1>
            <div className={styles.shadow}></div>

            <div className={styles.cardTitle}>
                <Image width={15} height={19} src={miniuser} alt='miniuser' />
                <h3>Alunos Matriculados</h3>
            </div>

            <div className={styles.Table}>
                <Table 
                    params={[
                                {display:"Alunos", atribute:"name"}, 
                                {display:"Número de Matrícula", atribute:"num"},
                                {display:"Disciplina", atribute:"disci"},
                                {display:"Laboratório", atribute:"lab"},
                            ]}
                    data={[
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
                    ]}
                />
            </div>
        </div>
    )
}