import styles from './table.module.css'

function createHeader(params){

    var ar = [];

    params.forEach(op => {
        ar.push(
            <div className={styles.param} style={{width:100/params.length + "%;"}}>
                {op.display}
            </div>
        )
    });

    return ar;
}

function createEntrys(params, data){

    var ar = [];

    data.forEach(e => {

        var entry = [
            <div className={styles.squareDiv}>
                <input type="checkbox" />
            </div>
        ];

        params.forEach(p => {
            entry.push(
            <div className={styles.entryDataParam} style={{width:100/params.length + "%;"}}>
                {e[p.atribute]}
            </div>
            )
        });

        ar.push(entry);
    });

    return ar.map(e => <div className={styles.entryData}> {e} </div>);
}

export function Table( {params, data} ){
    return(
        <div className={styles.table}>
            <div className={styles.header}>
                {createHeader( params )}
            </div>
            <div className={styles.data}>
                {createEntrys( params, data )}
            </div>
        </div>
    );
}