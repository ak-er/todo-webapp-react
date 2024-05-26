import styles from "./css/Card.module.css"

const Card = (props) => {
    return (
        <>
            <div className={`${styles.card} ${props.status ? styles.active : ""}`}>
                <div className={styles.cardTitle}>{props.title}</div>
                <div className={styles.cardBody}>{props.body}</div>
                <div className={styles.actionBtn}>
                    <div className={`${styles.deleteBtn} ${styles.btn}`} onClick={() => props.removeTask(props.index)}>
                        <img src="https://img.icons8.com/?size=100&id=67884&format=png&color=830909" alt="delete=image" />
                    </div>
                    <div className={`${styles.editBtn} ${styles.btn}`} onClick={() => props.editTask(props.index)}>
                        <img src="https://img.icons8.com/?size=100&id=114093&format=png&color=57a7ff" alt="edit-image" />
                    </div>
                </div>
                <input type="checkbox" id="doneTask" checked={props.status} onChange={() => props.doneTask(props.index)} className={styles.doneTask} />
            </div>
        </>
    )
}

export default Card;