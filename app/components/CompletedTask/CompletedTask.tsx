'use client';

import styles from './CompletedTask.module.css';

import { FC } from 'react';

interface Props {
    taskName: string;
    deleteFunction: () => void;
}

const CompletedTask: FC<Props> = ({ taskName, deleteFunction }) => {


    return (
        <div className={styles.task}>

            <div className={styles.task__text}>
                <h3>{ taskName }</h3>
            </div>

            <div className={styles.task__timer}>


                <div className={styles.task__timer__buttons}>
                    <h3 className={styles.delete__button} onClick={ deleteFunction }>✗</h3>
                </div>
            </div>
            
        </div>
    )
}

export default CompletedTask;