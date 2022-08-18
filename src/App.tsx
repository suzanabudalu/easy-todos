// import { Root } from './App.styles';
// import { Todos } from 'components/Todos';
import React, {useState, ChangeEvent} from 'react';
import './App.css';
import {ITask} from 'Interfaces';
import Todos from 'components/Todos/Todos';
// import { isContentEditable } from '@testing-library/user-event/dist/utils';


export const App = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task") {
      setTask(event.target.value)
    }
    else {
      setDeadline(Number(event.target.value))
    }
  };

  const addTask = () :void => {
    const newTask = {taskName: task, deadline: deadline};
    setTodoList ([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  }

  const completeTask = (taskNameToDelete: string) :void => {
    setTodoList(todoList.filter((task)=> {
      return task.taskName !== taskNameToDelete
    }))


  }
  

  return (
    // <Root>
    //  <Todos />
    // </Root>
    <div className='App'>
      <div className='header'>
        <div className='inputContainer'>
        <input 
        type='text' 
        placeholder="Task..." 
        name="task" 
        value= {task}
        onChange={handleChange}></input>
        <input 
        type='number' 
        placeholder="Deadline(in Days)..." 
        name="deadline"
        value={deadline} 
        onChange={handleChange}></input>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {todoList.map((task: ITask, key: number) =>{
          return <Todos key={key} task={task} completeTask={completeTask}/>;


        })}
      </div>
    
    </div>
  );
}
