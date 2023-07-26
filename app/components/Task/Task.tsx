'use client';

import styles from './Task.module.css';

import Image from 'next/image';

import { FC } from 'react';

interface Props {
    taskName: string;
    taskDescription: string;
    taskDeadline: string;
}

const Task: FC<Props> = ({ taskName, taskDescription, taskDeadline }) => {
    return (
        <div className={styles.task}>

            <div className={styles.task__text}>
                <h3>{ taskName }</h3>
                <p>{ taskDescription }</p>
            </div>

            <div className={styles.task__timer}>
                <h4>Deadline: {taskDeadline}</h4>

                <div className={styles.task__timer__buttons}>

                    <div>
                        <Image 
                            src='/done.svg'
                            width={20}
                            height={20}
                            alt='Done'
                        />
                    </div>

                    <div>
                        <Image 
                            src='/delete.svg'
                            width={16}
                            height={16}
                            alt='Delete'
                        />
                    </div>

                    <div>
                        <Image 
                            src='/edit.svg'
                            width={16}
                            height={16}
                            alt='Delete'
                        />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Task;