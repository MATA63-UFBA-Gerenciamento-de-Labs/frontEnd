import { Header } from '../components/topbar/topbar.jsx'

import styles from './telaProfessor.module.css'

export default function index(){

    return(
        
        <div className="tela-professor">

            <Header/>
            
            <h1 className={styles.title} >Olá, professor</h1>
            <div className={styles.shadow}></div>

        </div>
    )
}