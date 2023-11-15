import styles from './lab.module.css'

function Days( days ){
    var s = "";

    days.forEach(e => {
        s += e
    });

    return s;
}

export default function Lab( {days, hour, number, clas, color, cla} ){
    return(
        <div className={`${styles.lab} ${cla ? styles[cla] : ""}`}>
            <span className={styles.mini} style={{color: color? color : "#333"}}>{Days(days || [])} | {hour}</span>
            <span className={styles.big}  style={{color: color? color : "#000"}}>{number}, {clas}</span>

        </div>
    );
}