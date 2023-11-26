import styles from './table.module.css'
import Title from '../title/title.jsx'

export function deleteEntry( data, setData, id = "1" ){
    var ar = [... data];
    setData( ar.filter( e => !e.selected ) );
    document.querySelectorAll(`#table${id} .${styles.data} .${styles.squareDiv} input`).forEach( e => e.checked = false );
}

export function addEntry( data, setData, params, id = "1" ){
    //Criar um novo objeto com os valores em params
    var newEntry = {selected: false, id: id};
    params.forEach(p => {
        if(p.display != "check")
            newEntry[p.atribute] = prompt(`Digite o valor para ${p.display}`);
    });
    var ar = [... data];
    ar.push( newEntry );
    setData( ar );
}
export function editEntry( data, setData, params, id = "1" ){
    var ar = [... data];
    var filteredArray = ar.filter( e => !e.selected ) ;

    if (filteredArray.length == 0)
        return;

    ar.forEach(e => {
        if(e.selected){
            params.forEach(p => {
                if(p.display != "check")
                    e[p.atribute] = prompt(`Digite o novo valor para ${p.display} de ${e[p.atribute]}`);
            });
        }
    });
    
    setData( ar );
    
    document.querySelectorAll(`#table${id} .${styles.data} .${styles.squareDiv} input`).forEach( e => e.checked = false );
    alert("TODO - abrir modal edit")
}

export function TODO( data, setData, id = "1" ){
    alert("TODO - abrir modal")
}

function createHeader(params, data, setData, id){

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
                            document.querySelectorAll(`#table${id} .${styles.data} .${styles.squareDiv} input`).forEach( e => e.checked = event.target.checked);
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

export default function Table( {title, titleImage, params, data, setData, actions, id = "1"} ){
    return(
            <div id={"table"+ id}>
                <div className={styles.tableTitle}>
                    <Title
                        text={title}
                        Image={titleImage}
                    />
                </div>
                <div className={styles.header}>
                    {createHeader( params || [], data || [], setData, id )}
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