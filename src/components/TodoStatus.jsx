import styles from "./css/TodoStatus.module.css";
const TodoStatus = (props) => {
    return (
        <>
            <div className={styles.todoStatus}>
                <div className={styles.todoStatusText}>
                    <p><b>Todo Done</b></p>
                    <p style={{fontSize: "0.5em", letterSpacing: "0.2em"}}>Keep it up..</p>
                </div>
                <div className={styles.todoStatusCount}>
                    <p><b>{props.completeTask}/{props.totalTask}</b></p>
                </div>
            </div>
        </>
    )
}

export default TodoStatus;
