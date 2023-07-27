'use client';
import { ChangeEvent, useState } from "react";
import AddNewToDoForm from "./components/AddNewToDoForm/AddNewToDoForm";
import Task from "./components/Task/Task";

type NewTask = {
  id: number;
  taskName: string;
  taskDescription: string;
  taskDeadline: string;
}

let postId: number = 1;
let taskBase = {};

export default function Home() {
  const [taskNameInput, setTaskNameInput] = useState('');
  const [taskDescriptionInput, setTaskDescriptionInput] = useState('');
  const [taskDeadlineInput, setTaskDeadlineInput] = useState('');
  const[newTask, setNewTask] = useState<NewTask[]>([]);

  function handleTaskNameInput(event: ChangeEvent<HTMLInputElement>): void {
    setTaskNameInput(event.target.value)
  }

  function handleTaskDescriptionInput(event: ChangeEvent<HTMLTextAreaElement>) {
    setTaskDescriptionInput(event.target.value)
  }

  function handleTaskDeadlineInput(event: ChangeEvent<HTMLInputElement>) {
    setTaskDeadlineInput(event.target.value)
  }

  function handleAddNewTask() {
    setNewTask([...newTask, {id: postId, taskName: taskNameInput, taskDescription: taskDescriptionInput, taskDeadline: taskDeadlineInput}]);
    postId++;
    setTaskNameInput('');
    setTaskDescriptionInput('');
    setTaskDeadlineInput('');
  }

  return (
    <>

    <AddNewToDoForm handleTaskNameInput={handleTaskNameInput} taskNameValue={taskNameInput} handleTaskDescriptionInput={handleTaskDescriptionInput} taskDescriptionValue={taskDescriptionInput} handleTaskDeadlineInput={handleTaskDeadlineInput} taskDeadlineValue={taskDeadlineInput} handleAddNewTask={handleAddNewTask}/>
    
    {newTask.map(t=> <Task key={t.id} taskName={t.taskName} taskDescription={t.taskDescription} taskDeadline={t.taskDeadline} deleteFunction={() => {setNewTask(newTask.filter(el => el.id !== t.id))}}/>)}
    
    </>
  )
}
