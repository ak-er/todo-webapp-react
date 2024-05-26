import styles from "./css/NewTodo.module.css";

const NewTodo = (props) => {
    return (
        <>
            <div className={styles.taskForm}>
                <div>
                    <textarea placeholder="Write task description..." id="description" onChange={(e) => props.setBody(e.target.value)} value={props.body}></textarea>
                </div>
                <div className={styles.inputBtnWrapper}>
                    <input type="text" name="task" id="task" placeholder="Write task title..." onChange={(e) => props.setTitle(e.target.value)} value={props.title} />
                    <button id="btn" onClick={props.getTask}>+</button>
                </div>
            </div>
        </>
    )
}

export default NewTodo;