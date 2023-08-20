'use client';

import styles from './Task.module.css';

import { FC, useState, ChangeEvent } from 'react';

interface Props {
    taskName: string;
    taskDeadline: string;
    postId: number;
    deleteFunction: () => void;
    completeFunction: () => void;
    editFunction: (editedTaskName: string, editedTaskDeadline: string) => void;
}

const Task: FC<Props> = ({ postId, taskName, taskDeadline, deleteFunction, completeFunction, editFunction }) => {
    const deadline = new Date(taskDeadline);
    const nowDate = new Date();
    const oneDay = 1000 * 60 * 60 * 24; 
    const diff = deadline.getTime() - nowDate.getTime();
    const days = Math.round(diff/oneDay);
    const [isEdit, setIsEdit] = useState(false);
    const [editedTaskName, setEditedTaskName] = useState(taskName);
    const [editedDeadline, setEditedDeadline] = useState(taskDeadline);
    
    function handleEditedTaskName(event: ChangeEvent<HTMLInputElement>): void {
        setEditedTaskName(event.target.value)
    }
    
    function handleEditedDeadline(event: ChangeEvent<HTMLInputElement>): void {
        setEditedDeadline(event.target.value)
    }

    if (!isEdit) {
    return (
        <div className={styles.task}>

            <div className={styles.task__text}>
                <h3>{ taskName }</h3>
            </div>

            <div className={ styles.task__timer }>
                <p className={ styles.task__timer__deadline }>To deadline: { days } days </p>

                <div className={styles.task__timer__buttons}>
                <h3 className={styles.done__button} onClick={ completeFunction }>✓</h3>
                <h3 className={styles.delete__button} onClick={ deleteFunction }>✗</h3>
                <h3 className={styles.edit__button} onClick={ () => setIsEdit(true) }>✎</h3>
                </div>
            </div>

        </div>
    )
    } else {
        return (
            <div className={styles.task}>

                <div className={styles.task__text__edit }>
                    <input type="text" value={editedTaskName} onChange={ handleEditedTaskName } className={ styles.edit__input }/>
                </div>

                <div className={styles.task__timer}>
                <div className={styles.task__text}>
                    <input type="date" value={editedDeadline} onChange={ handleEditedDeadline } className={ styles.edit__input__date }/>
                </div>

                    <div className={styles.task__timer__buttons}>
                    <h3 className={styles.done__button} onClick={()=> {editFunction(editedTaskName, editedDeadline); setIsEdit(false)}}>✓</h3>
                    <h3 className={styles.delete__button} onClick={() => setIsEdit(false)}>✗</h3>
                    </div>
                </div>

            </div>
            )
    }
}

export default Task;