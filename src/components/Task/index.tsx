import { ITask } from '../../App'
import styles from './Task.module.css'
import { Trash, CheckCircle } from '@phosphor-icons/react'

interface Props {
  task: ITask;
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}

export function Task({ task,  onDeleteTask, onCompleteTask  }: Props) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onCompleteTask(task.id)}>
        {task.isCompleted ? <CheckCircle size={18} /> : <div /> }
      </button>
      <p className={task.isCompleted ? styles.completed : ''}>{task.title}</p>
      <button onClick={() => onDeleteTask(task.id)}>
        <Trash size={18} />
      </button>
    </div>
  )
}