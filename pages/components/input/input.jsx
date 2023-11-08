import styles from './input.module.css'


function returnType(title, placeholder, type){
    if( type == 0){
        return(
            <>
                <p className={styles.title}>{title}</p>
                <input type="text" placeholder={placeholder| ""} className={styles.inputA}/>
            </>
        );    
    }
    else{
        return(
            <>
                <p className={styles.title}>{title| ""}</p>
                <div className={styles.selectBox}>
                    <select defaultValue='default'>
                        <option className={styles.gray} value='default' disabled>{placeholder| ""}</option>
                        <option>Test</option>
                    </select>
                </div>
            </>
        )
    }
}


// type = 0 -> text,  type = 1 -> select
export default function Input( {title, placeholder, type} ){
    return(
        <div className={styles.input}>
            {returnType( title, placeholder, type )}
        </div>
    );
}