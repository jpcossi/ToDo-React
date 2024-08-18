import { useState } from 'react'
import styles from './Task.module.css'
import { Trash } from '@phosphor-icons/react'
export function Task({content, onDeleteTask, onCount}){
  const [ finishedTask, setFinishedTask ] = useState(false)
  function handleDeleteTask(){
    if(finishedTask == true){
      onDeleteTask(content)
      onCount(finishedTask)
    }else{
      onDeleteTask(content)
    }
  }

  function handleFinishedTaskCount(){    
    if(finishedTask == false){      
      onCount(finishedTask)
      setFinishedTask(true)
    }else{
      if(finishedTask == true){
        onCount(finishedTask)
        setFinishedTask(false)
      }
    }
  }

  return (      
    <div className={styles.task}>
      <input type='checkbox' onClick={handleFinishedTaskCount}/>
      <p>{content}</p>
      <button onClick={handleDeleteTask} title='Deletar Task'>
        <Trash size={18}/>
      </button>
    </div>   
  )
}