import { ITask } from '../../App';
import { Task } from '../Task'
import styles from './Tasks.module.css'

interface Props {
  tasks: ITask[];
}

export function Tasks({ tasks  }: Props) {
  const taskLength = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;
  
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{taskLength}</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>{completedTasks} de {taskLength}</span>
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