import styles from './history.module.css'


export function History( {date, hour, text} ){
    return(
        <div className={styles.history}>
            <span className={styles.mini}>{date} | {hour}</span>
            <span className={styles.big}>{text}</span>
        </div>
    );
}