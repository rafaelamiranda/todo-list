import { ITask } from '../../App';
import { Task } from '../Task'
import { ClipboardText } from '@phosphor-icons/react'
import styles from './Tasks.module.css'

interface Props {
  tasks: ITask[];
  onDeleteTask:  (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}

export function Tasks({ tasks, onDeleteTask, onCompleteTask  }: Props) {
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
          <Task 
            task={task} 
            key={task.id} 
            onDeleteTask={onDeleteTask}
            onCompleteTask={onCompleteTask}
          />
        ))}

        {taskLength === 0 && (
          <div className={styles.empty}>
            <ClipboardText size={56} />
            <p>Nenhuma tarefa cadastrada</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}

      </div>
    
    </section>
  )
}