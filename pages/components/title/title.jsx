import styles from './title.module.css'

export default function Title( {text, Image}){
    return(
        <div className={styles.cardTitle}> 
            {Image}
            <h3>{text}</h3>
        </div>
    )
}