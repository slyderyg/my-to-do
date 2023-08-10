'use client';

import styles from './Task.module.css';

import { FC } from 'react';

interface Props {
    taskName: string;
    taskDeadline: string;
    deleteFunction: () => void;
    completeFunction: () => void;
}

const Task: FC<Props> = ({ taskName, taskDeadline, deleteFunction, completeFunction }) => {
    const deadline = new Date(taskDeadline);
    const nowDate = new Date();
    const oneDay = 1000 * 60 * 60 * 24; 
    const diff = deadline.getTime() - nowDate.getTime();
    const days = Math.round(diff/oneDay);

    return (
        <div className={styles.task}>

            <div className={styles.task__text}>
                <h3>{ taskName }</h3>
            </div>

            <div className={styles.task__timer}>
                <h4>To deadline: {days} days </h4>

                <div className={styles.task__timer__buttons}>
                <h3 className={styles.done__button} onClick={ completeFunction }>✓</h3>
                <h3 className={styles.delete__button} onClick={ deleteFunction }>✗</h3>
                <h3 className={styles.edit__button}>✎</h3>
                </div>
            </div>

        </div>
    )
}

export default Task;