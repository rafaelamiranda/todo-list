import { PlusCircle } from '@phosphor-icons/react';
import todoLogo from '../../assets/todo-logo.svg';

import styles from './Header.module.css';

interface  Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask } : Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = e.currentTarget.querySelector('input');

    if (input) {
      onAddTask(input.value);
      input.value = '';
    }
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt='Logotipo do ToDo List' />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input placeholder='Adicione uma nova tarefa' />
        <button>
          Criar
          <PlusCircle size={18} />
        </button>
      </form>
    </header>
  );
}