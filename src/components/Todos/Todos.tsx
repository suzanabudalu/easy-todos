// import { Root, Title } from "./Todos.styles";

// export const Todos = () => (
//     <Root>
//         <Title>Todos</Title>
//     </Root>
// );
import { ITask } from 'Interfaces'
import React from 'react'
interface props {
    task: ITask;
    completeTask(taskNameToDelete: string) :void;
}
export const Todos = ({task,completeTask}: props) => {
  return (
    <div className='task'>
        <div className='content'>
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
        </div>
        <button onClick={() => {
            completeTask(task.taskName);
        }}>x</button>
    </div>
  )
} 

export default Todos
