import styles from './history.module.css'

export default function History( {date, hour, text} ){

    return(
        <div className={styles.history}>
            <div className={styles.a}>
                <span className={styles.mini}>{date} | {hour}</span>
                <span className={styles.big}>{text}</span>
            </div>
        </div>
    );
}