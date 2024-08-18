import styles from './Empty.module.css'

import Clip from '../assets/Clipboard.svg'

export function Empty(){
  return (
    <div className={styles.emptyList}>
      <img src={Clip} alt="Clipboard icon" />
      <div className={styles.emptyText}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}