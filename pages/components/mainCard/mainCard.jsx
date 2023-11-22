import styles from './mainCard.module.css'
import Title from '../title/title.jsx'

export default function MainCard( { titleText, titleImage, firstRow, secondRow, buttons }){


    secondRow = !secondRow && buttons ? <div></div> : secondRow

    return(
        <div className={styles.card}>
            <Title
                text={titleText}
                Image={titleImage}
            />
            
            <div className={styles.cardInputs}>
                <div className={styles.firstRowCard}>
                    {firstRow}
                </div>
                <div className={ secondRow ? styles.secondRowCard : ""}>
                    {secondRow }
                    <div className={buttons ? styles.buttons : ""}>
                        {buttons}
                    </div>
                </div>
            </div>
        </div>
    );
}