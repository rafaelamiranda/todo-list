import { ITask } from '../../App';
import { Task } from '../Task'
import styles from './Tasks.module.css'

interface Props {
  tasks: ITask[];
}

export function Tasks({ tasks  }: Props) {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>10</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>2 de 10</span>
        </div>
      </header>  
      <div className={styles.list}>
        {tasks.map(task => (
          <Task task={task} key={task.id} />
        ))}
      </div>
    
    </section>
  )
}