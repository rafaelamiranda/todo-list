import { PlusCircle } from '@phosphor-icons/react';
import todoLogo from '../../assets/todo-logo.svg';

import styles from './Header.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

interface  Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask } : Props) {
  const [title, setTitle] = useState('');

  function onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }
  
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onAddTask(title);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt='Logotipo do ToDo List' />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input placeholder='Adicione uma nova tarefa' onChange={onChangeTitle} value={title} />
        <button>
          Criar
          <PlusCircle size={18} />
        </button>
      </form>
    </header>
  );
}