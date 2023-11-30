import styles from './button.module.css';

export default function Button( {text, color, onClick, id} ){
    return(
        <div className={color == "blue" ? styles.blueButton : styles.whiteButton} onClick={onClick} id ={id}>
            {text}
        </div>
    );
}