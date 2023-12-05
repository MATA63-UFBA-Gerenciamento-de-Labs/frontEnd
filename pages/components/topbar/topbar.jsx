import Image from 'next/image'
import userIcon from '../../assets/avatar.svg';
import { useRouter } from 'next/router';

import styles from './topbar.module.css'




export default function Header(){
  const router = useRouter();

  const navigateToMyProfile = () => {
    router.push("/gerenciar-perfil")
  }

    return(
        <header className={styles.Header}>
            <div className={styles.titleHeader}>
                <h2>Sistema de Salas</h2>
            </div>
            <button onClick = {navigateToMyProfile}>
                <div className={styles.userOptions}>
                    <div className={styles.icon}>
                        <Image width={40} height={40} src={userIcon} alt='userIcon' />
                    </div>
                    <div className={styles.dropdownUser}></div>
                </div>
            </button>
            

            
        </header>   
    )
}