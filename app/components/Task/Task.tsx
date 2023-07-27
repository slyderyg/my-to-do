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
    return (
        <div className={styles.task}>

            <div className={styles.task__text}>
                <h3>{ taskName }</h3>
                <p>{ taskDescription }</p>
            </div>

            <div className={styles.task__timer}>
                <h4>Deadline: {taskDeadline}</h4>

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