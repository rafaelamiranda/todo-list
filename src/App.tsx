import styles from './App.module.css';
import { Header } from './components/Header';
import { PlusCircle } from '@phosphor-icons/react';
import './global.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </div>
    </>
  )
}

export default App