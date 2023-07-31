'use client';

import styles from './Task.module.css';

import { FC } from 'react';

interface Props {
    taskName: string;
    taskDescription: string;
    taskDeadline: string;
    deleteFunction: () => void;
}

const Task: FC<Props> = ({ taskName, taskDescription, taskDeadline, deleteFunction }) => {
    const deadline = new Date(taskDeadline);
    const nowDate = new Date();
    const oneDay = 1000 * 60 * 60 * 24; 
    const diff = deadline.getTime() - nowDate.getTime();
    const days = Math.round(diff/oneDay);

    return (
        <div className={styles.task}>

            <div className={styles.task__text}>
                <h3>{ taskName }</h3>
                <p>{ taskDescription }</p>
            </div>

            <div className={styles.task__timer}>
                <h4>To deadline: {days} days </h4>

                <div className={styles.task__timer__buttons}>
                <h3 className={styles.done__button}>✓</h3>
                <h3 className={styles.delete__button} onClick={deleteFunction}>✗</h3>
                <h3 className={styles.edit__button}>✎</h3>
                </div>
            </div>

        </div>
    )
}

export default Task;