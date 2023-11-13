'use client'
import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import classes from './page.module.css'
import TaskDisplay from './components/TaskDisplay';
// import { createTask, completeTask } from './util/taskUtil';

type Task = {
  task: string;
  isCompleted: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  function createTask(item: Task) {
    const newTaskArr: Task[] = [...tasks]
    newTaskArr.push(item)
    setTasks(newTaskArr)
    localStorage.setItem("tasks", JSON.stringify(newTaskArr));
  }

  function completeTask(i: number) {
    const newTaskArr: Task[] = [...tasks]
    if (newTaskArr[i].isCompleted) {
      newTaskArr[i].isCompleted = false
    } else {
      newTaskArr[i].isCompleted = true;
    }
    setTasks(newTaskArr);
    localStorage.setItem("tasks", JSON.stringify(newTaskArr));
  }

  useEffect(() => {
    if (localStorage['tasks']) {
      const taskList = JSON.parse(localStorage.getItem("tasks") || "");
      setTasks(taskList);
    }
  },[])

  return (
    <main>
      <h1>To Do List</h1>
      <div className={classes.main_container}>
        <div>
          <TodoForm createTask={createTask} />
        </div>
        <TaskDisplay taskList={tasks} completeTask={completeTask} />
      </div>
    </main>
  );
}
