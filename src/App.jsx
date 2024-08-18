import './global.css'
import { useState } from 'react'
import styles from './App.module.css'

import { PlusCircle } from '@phosphor-icons/react'

import { Task } from './components/Task.jsx' 
import { Empty } from './components/Empty.jsx'

import logoRocket from './assets/Logo.svg'

export function App() {
  const [ taskList, setTaskList ] = useState([])
  const [ newTask, setNewTask ] = useState('')
  const [ countTask, setCountTask ] = useState(0)

  function handleCreateNewTask(e){
    e.preventDefault()

    setTaskList([...taskList, newTask])
    setNewTask('')
  }

  function handleNewTask(e){
    e.target.setCustomValidity('')
    setNewTask(e.target.value)
  }

  function deleteTask(taskToDelete){
    const tasksWithoutDeleteOne = taskList.filter(task =>{
      return task !== taskToDelete
    })
    setTaskList(tasksWithoutDeleteOne)
  }

  function countFinishedTasks(check){
    if(check == false){
      setCountTask(countTask + 1)
    }else{
      setCountTask(countTask - 1)
    }
  }
  
  return (
    <div>
      <header className={styles.header}>
        <img src={logoRocket} alt="Logo icon" />
      </header>
      <main className={styles.main}>
        <form onSubmit={handleCreateNewTask} className={styles.newTask}>
          <input 
            name='task'
            value={newTask} 
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewTask}
            maxLength={64}
            required
          />
          <button type='submit'> Criar 
              <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </button>
        </form>
        <div className={styles.infoCount}>
          <p>Tarefas criadas <span>{taskList.length}</span></p>
          <p>Concluídas <span>{countTask} de {taskList.length}</span></p>
        </div>  
        {
          taskList.length > 0 ? (
            <div>
              {taskList.map(task => {
                return(
                  <Task 
                    key={task}
                    content={task}
                    onDeleteTask={deleteTask}
                    onCount={countFinishedTasks}
                  />
                )
              })}
            </div> 
          )
          :(
            <Empty/>
          )          
        }    
      </main>
    </div>
  )
}

//{hasBorder ? styles.avatarWithBorder : styles.avatar