import styles from './input.module.css'

/**
 * 
 * type = 0 -> text,  type = 1 -> select
 */
export default function Input( {title, placeholder, type} ){

    if( type == 0)
        return(
            <div className={styles.input}>
                <p className={styles.title}>{title}</p>
                <input type="text" placeholder={placeholder} className={styles.inputA}/>
            </div>
        );    
    else if( type == 1 )
        return(
            <div className={styles.input}>
                <p className={styles.title}>{title}</p>
                <div className={styles.selectBox}>
                    <select defaultValue='default'>
                        <option className={styles.gray} value='default' disabled>{placeholder}</option>
                        <option>Test</option>
                    </select>
                </div>
            </div>
        )
}