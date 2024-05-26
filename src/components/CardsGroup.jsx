import Card from "./Card";
import styles from "./css/CardsGroup.module.css"
import NewTodo from './NewTodo';
import TodoStatus from './TodoStatus'
import { useEffect, useState } from "react";

const CardsGroup = () => {
    const [getTodoList, setTodoList] = useState([]);
    const [getTitleValue, setTitleState] = useState("");
    const [getBodyValue, setBodyState] = useState("");
    const [getCompleteTask, setCompleteTask] = useState(0);
    const [getEditStatus, setEditStatus] = useState(false);
    const [getTaskIndex, setTaskIndex] = useState(null);
    const getNewTask = () => {
        if (!getTitleValue.trim() || !getBodyValue.trim()) {
            return;
        }
        const newTask = { "task": getTitleValue, status: false, "description": getBodyValue };
        setTodoList((prevTodoList) => [newTask, ...prevTodoList]);
        setTitleState("");
        setBodyState("");
    }
    const deleteTask = (deleteTaskIndex) => {
        setTodoList((prevTodoList) => prevTodoList.filter((task, index) => {
            return deleteTaskIndex !== index;
        }))
    }
    const doneTask = (taskIndex) => {
        setTodoList((prevTodoList) => {
            const updatedTodoList = prevTodoList.map((task, index) => {
                if (index === taskIndex) {
                    return { ...task, status: !task.status };
                }
                return task;
            });
            const completedTasksCount = updatedTodoList.filter(task => task.status).length;
            setCompleteTask(completedTasksCount);

            return updatedTodoList;
        });
    };

    const getEditTask = (taskIndex) => {
        const task = getTodoList[taskIndex];
        setTitleState(task.task);
        setBodyState(task.description);
        setEditStatus(true);
        setTaskIndex(taskIndex);
    }

    const editTask = () => {
        setTodoList((prevTodoList) => {
            return prevTodoList.map((task, index) => {
                if(index === getTaskIndex) {
                    return {...task, task:getTitleValue, description:getBodyValue}
                }
                return task;
            })
        });
        setTitleState("");
        setBodyState("");
    }
    
    useEffect(() => {
        const completedTasksCount = getTodoList.filter(task => task.status).length;
        setCompleteTask(completedTasksCount);
    }, [getTodoList]);

    return (
        <>
            <div className={styles.taskStatus} style={{ display: "flex", gap: "1em", margin: "1em 0" }}>
                <TodoStatus completeTask={getCompleteTask} totalTask={getTodoList.length} />
                <NewTodo getTask={getEditStatus ? editTask : getNewTask} title={getTitleValue} body={getBodyValue} setTitle={setTitleState} setBody={setBodyState} />
            </div>
            <div className={styles.cards}>
                {
                    getTodoList.map((todo, index) => (
                        <Card editTask={getEditTask} doneTask={doneTask} removeTask={deleteTask} key={index} index={index} status={todo.status} title={todo.task} body={todo.description} />
                    ))
                }
            </div>
        </>
    )
}

export default CardsGroup;