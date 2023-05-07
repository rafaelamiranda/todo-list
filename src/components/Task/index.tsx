import { ITask } from '../../App'
import styles from './Task.module.css'
import { Trash } from '@phosphor-icons/react'

interface Props {
  task: ITask;
  onDeleteTask: (taskId: string) => void;
}

export function Task({ task,  onDeleteTask  }: Props) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>{task.title}</p>
      <button onClick={() => onDeleteTask(task.id)}>
        <Trash size={18} />
      </button>
    </div>
  )
}