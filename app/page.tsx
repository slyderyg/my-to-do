'use client';
import { ChangeEvent, useEffect, useState } from "react";
import AddNewToDoForm from "./components/AddNewToDoForm/AddNewToDoForm";
import Task from "./components/Task/Task";


export type NewTask = {
  id: number;
  taskName: string;
  taskDeadline: string;
}

let postId: number = Number(new Date);


export default function Home() {
  const [taskNameInput, setTaskNameInput] = useState('');
  const [taskDeadlineInput, setTaskDeadlineInput] = useState('');
  const [newTask, setNewTask] = useState<NewTask[]>([]);
  const [completedTask, setCompletedTask] = useState<NewTask[]>([]);
  
  useEffect(()=>{
    if (localStorage.task) {setNewTask(JSON.parse(localStorage.task))};
    if (localStorage.completedTask) {setCompletedTask(JSON.parse(localStorage.completedTask))};
  }, [])

  function handleTaskNameInput(event: ChangeEvent<HTMLInputElement>): void {
    setTaskNameInput(event.target.value)
  }


  function handleTaskDeadlineInput(event: ChangeEvent<HTMLInputElement>) {
    setTaskDeadlineInput(event.target.value)
  }

  function handleAddNewTask() {
    setNewTask([...newTask, {id: postId, taskName: taskNameInput, taskDeadline: taskDeadlineInput}]);
    localStorage.setItem('task', JSON.stringify([...newTask, {id: postId, taskName: taskNameInput, taskDeadline: taskDeadlineInput}]));
    postId = Number(new Date);;
    setTaskNameInput('');
    setTaskDeadlineInput('');
  }


  return (
    <>

    <AddNewToDoForm 
      handleTaskNameInput={handleTaskNameInput} 
      taskNameValue={taskNameInput} 
      handleTaskDeadlineInput={handleTaskDeadlineInput} 
      taskDeadlineValue={taskDeadlineInput} 
      handleAddNewTask={handleAddNewTask}
    />
    
    {newTask.map(t=> <Task 
      key={t.id} 
      postId = {t.id} 
      taskName={t.taskName} 
      taskDeadline={t.taskDeadline} 
      deleteFunction={
        () => {
          setNewTask(newTask.filter(el => el.id !== t.id)); 
          localStorage.setItem('task', JSON.stringify(newTask.filter(el => el.id !== t.id)));
        }
      } 
      completeFunction={
        () => {
          setNewTask(newTask.filter(el => el.id !== t.id)); 
          localStorage.setItem('task', JSON.stringify(newTask.filter(el => el.id !== t.id))); 
          setCompletedTask([...completedTask, newTask.filter(el => el.id === t.id)[0]]); 
          localStorage.setItem('completedTask', JSON.stringify([...completedTask, newTask.filter(el => el.id === t.id)[0]]))
        }
      }
      editFunction={
        (editedTaskName: string, editedTaskDeadline: string) => {
          let editedNewTask = newTask.filter(el => el.id !== t.id);
          editedNewTask.push({id: t.id, taskName: editedTaskName, taskDeadline: editedTaskDeadline});
          setNewTask(editedNewTask);
          localStorage.setItem('task', JSON.stringify(editedNewTask));
        }
      }
    />)}

    </>
  )
}
