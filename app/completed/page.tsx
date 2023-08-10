'use client'

import CompletedTask from "../components/CompletedTask/CompletedTask";
import { useEffect, useState } from "react";
import { NewTask } from "../page";
import Link from "next/link";
import styles from './page.module.css';


export default function Completed() {
    const [completedTask, setCompletedTask] = useState<NewTask[]>([]);

    useEffect(()=>{
        if (localStorage.completedTask) {setCompletedTask(JSON.parse(localStorage.completedTask))};
    }, [])

    return (
        <>
        <h3 className={styles.home__link}><Link href='/'>Home</Link></h3>
    {completedTask.map(t=> <CompletedTask 
      key={t.id} 
      taskName={t.taskName} 
      deleteFunction={
        ()=> { setCompletedTask(completedTask.filter(el => el.id !== t.id)); 
            localStorage.setItem('completedTask', JSON.stringify(completedTask.filter(el => el.id !== t.id))) }}
    />)}
        </>
    )
}