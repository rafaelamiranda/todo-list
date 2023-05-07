import styles from './Task.module.css'
import { Trash } from '@phosphor-icons/react'

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button>
        <Trash size={18} />
      </button>
    </div>
  )
}