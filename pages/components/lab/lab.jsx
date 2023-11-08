import styles from './lab.module.css'

function Days( days ){
    var s = "";

    days.forEach(e => {
        s += e
    });

    return s;
}

export function Lab( {days, hour, number, clas} ){
    return(
        <div className={styles.lab}>
            <span className={styles.mini}>{Days(days)} | {hour}</span>
            <span className={styles.big}>{number}, {clas}</span>
        </div>
    );
}