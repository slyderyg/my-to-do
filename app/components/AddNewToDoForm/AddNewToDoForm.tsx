'use client';

import Link from 'next/link';
import styles from './AddNewToDoForm.module.css';

import { FC, ChangeEvent } from 'react';

interface handleTaskNameInputProps {
    handleTaskNameInput: (event: ChangeEvent<HTMLInputElement>) => void;
    taskNameValue: string;
    handleTaskDeadlineInput: (event: ChangeEvent<HTMLInputElement>) => void;
    taskDeadlineValue: string;
    handleAddNewTask: () => void;
}

const AddNewToDoForm: FC<handleTaskNameInputProps> = ({ handleTaskNameInput, handleTaskDeadlineInput, handleAddNewTask, taskNameValue, taskDeadlineValue }) => {

    const today = new Date();
    const minDay = today.toISOString().split("T")[0];

    return (
        <div className={ styles.form }>

            <div className={styles.task__text__field}>

                <div className={ styles.task__name }>
                    <label>Task name: <br /><input onChange={ handleTaskNameInput } type="text" value={ taskNameValue } maxLength={ 160 } className={ styles.task__name__input }/></label>
                </div>

            </div>

            <div className={styles.task__date__field}>

                <div className={styles.task__date}>
                    <label>Deadline: <br /><input onChange={ handleTaskDeadlineInput } type="date" min={ minDay } value={ taskDeadlineValue } className={ styles.task__name__input }/></label>
                </div>

            </div>
            { taskNameValue&&taskDeadlineValue?
                    <div className={styles.task__button__field}>
                        <button onClick={handleAddNewTask} className={styles.task__button__field__button}>Add new task</button>
                    </div>
                :
                    <div className={styles.task__button__field}>
                        <button disabled>Add new task</button>
                    </div>
            }


            <div className={styles.task__button__field__home}>
                <Link href='/completed'>Completed Tasks</Link>
            </div>

        </div>
    )
}

export default AddNewToDoForm;