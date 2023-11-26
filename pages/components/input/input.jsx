import styles from './input.module.css'

/**
 * 
 * type = 0 -> text,  type = 1 -> select
 */
export default function Input( {title, placeholder, type, onChange, width, value} ){

    if( type == 0)
        return(
            <div className={styles.input}>
                <p className={styles.title}>{title}</p>
                <input type="text" value={value} placeholder={placeholder} className={styles.inputA} onChange={onChange} style={{width: (width ? width : "200") +"px;"}}/>
            </div>
        );    
    else if( type == 1 )
        return(
            <div className={styles.input}>
                <p className={styles.title}>{title}</p>
                <div className={styles.selectBox}>
                    <select defaultValue='default' onChange={onChange} value={value}>
                        <option className={styles.gray} value='default' disabled>{placeholder}</option>
                        <option>Test</option>
                    </select>
                </div>
            </div>
        )
}