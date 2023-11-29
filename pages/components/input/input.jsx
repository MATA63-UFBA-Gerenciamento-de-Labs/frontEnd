import styles from './input.module.css'

/**
 * 
 * type = text,  type = dropdown
 */
export default function Input( {title, placeholder, type, onChange, width, value, id} ){

    if( type == "text")
        return(
            <div className={styles.input}>
                <p className={styles.title}>{title}</p>
                <input type="text" id ={id} value={value} placeholder={placeholder} className={styles.inputA} onChange={onChange} style={{width: (width ? width : "200") +"px"}}/>
            </div>
        );    
    else if( type == "dropdown" )
        return(
            <div className={styles.input}>
                <p className={styles.title}>{title}</p>
                <div className={styles.selectBox}>
                    <select onChange={onChange} value={value} id ={id}>
                        <option className={styles.gray} value='default' disabled>{placeholder}</option>
                        <option>Test</option>
                    </select>
                </div>
            </div>
        )
}