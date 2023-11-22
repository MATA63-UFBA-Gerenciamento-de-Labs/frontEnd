import styles from './action.module.css'

export default function Action( { image , info}){
    return(
        <div className={styles.act}>
            {image}
            <div className={styles.divSpan}>
                {info}
            </div>
        </div>
    )
}