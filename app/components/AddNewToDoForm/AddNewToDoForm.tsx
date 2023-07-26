'use client';

import styles from './AddNewToDoForm.module.css';

import { FC, ChangeEvent } from 'react';

interface handleTaskNameInputProps {
    handleTaskNameInput: (event: ChangeEvent<HTMLInputElement>) => void;
    taskNameValue: string;
    handleTaskDescriptionInput: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    taskDescriptionValue: string;
    handleTaskDeadlineInput: (event: ChangeEvent<HTMLInputElement>) => void;
    taskDeadlineValue: string;
    handleAddNewTask: () => void;
}

const AddNewToDoForm: FC<handleTaskNameInputProps> = ({ handleTaskNameInput, handleTaskDescriptionInput, handleTaskDeadlineInput, handleAddNewTask, taskNameValue, taskDescriptionValue, taskDeadlineValue }) => {
    return (
        <div className={ styles.form }>

            <div className={styles.task__text__field}>

                <div className={ styles.task__name}>
                    <label>Task name: <br /><input onChange={ handleTaskNameInput } type="text" value={ taskNameValue } className={ styles.task__name__input }/></label>
                </div>

                <div className={ styles.task__description }>
                    <label>Task description: <br /><textarea onChange={ handleTaskDescriptionInput } value={ taskDescriptionValue } className={ styles.task__description__input }/></label>
                </div>

            </div>

            <div className={styles.task__date__field}>

                <div className={styles.task__date}>
                    <label>Deadline: <br /><input onChange={ handleTaskDeadlineInput } type="date" value={ taskDeadlineValue } className={ styles.task__name__input }/></label>
                </div>

            </div>

            <div className={styles.task__button__field}>
                <button onClick={handleAddNewTask}>Add new task</button>
            </div>

        </div>
    )
}

export default AddNewToDoForm;