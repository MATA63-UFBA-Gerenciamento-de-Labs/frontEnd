import styles from './sideCard.module.css'
import Title from '../title/title.jsx'

export default function SideCard( {titleText, titleImage, info, clas}){
    
    return(

        <div className={styles.infoCard}>
            <Title
                text={titleText}
                Image={titleImage}
            />
            <div className={`${styles.info} ${clas ? styles[clas] : ""}`}>
                {info}
            </div>
        </div>
    )
}