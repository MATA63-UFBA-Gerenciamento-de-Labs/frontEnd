import styles from './table.module.css'
import Title from '../title/title.jsx'

export function deleteUser( data, setData ){
    var ar = [... data];

    setData( ar.filter( e => !e.selected ) );
}

export function TODO( data, setData ){
    alert("TODO - abrir modal")
}

function createHeader(params, data, setData){

    var ar = [];

    params.forEach(op => {
        if(op.display == "check")
                ar.push(
                    <div className={styles.squareDiv} >
                        <input type="checkbox"
                            onClick={ ( event ) => {
                                var ar = [... data];
                                ar.forEach( e => e.selected = event.target.checked);
                                setData(ar);
                                var checkbox = document.querySelectorAll(`.${styles.squareDiv} input`);
                                checkbox.forEach( e => e.checked = event.target.checked);
                            } }
                        />
                    </div>
                )
            
            else
            ar.push(
                <div className={styles.param} style={{width:100/params.length + "%;"}}>
                    {op.display}
                </div>
        
        )
    });

    return ar;
}

function createEntrys(params, data, setData){
    var ar = [];

    data.forEach(e => {
        var entry = [
            
        ];

        params.forEach(p => {
            if(p.display == "check")
                entry.push(
                    <div className={styles.squareDiv}>
                        <input type="checkbox" id={e.id + "input"}
                            onClick={ ( event ) => {
                                var ar = [... data];
                                ar[ar.indexOf( e )].selected = event.target.checked;
                                setData(ar);                             
                            } }
                        />
                    </div>
                )
            
            else
                entry.push(
                <div className={styles.entryDataParam} style={{width:100/params.length + "%;"}}>
                    {e[p.atribute]}
                </div>
            )
        });

        ar.push( <div id={e.id} className={styles.entryData}> {entry} </div> )
    });

    return ar;
}

function createActions(){

}

export default function Table( {title, titleImage, params, data, setData, actions} ){
    return(
            <div className={styles.table}>
                <div className={styles.tableTitle}>
                    <Title
                        text={title}
                        Image={titleImage}
                    />
                </div>
                <div className={styles.header}>
                    {createHeader( params || [], data || [], setData )}
                </div>
                <div className={styles.data}>
                    {createEntrys( params || [], data || [], setData )}
                </div>
                <div className={styles.actions}>
                    {actions}
                </div>
            </div>
    );
}