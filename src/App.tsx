import {v4 as uuidv4 } from 'uuid'

import { useState } from 'react';
import { Header } from './components/Header/index';
import { Tasks } from './components/Tasks';

import './global.css';

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: uuidv4(),
      title: 'Estudar React',
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: 'Estudar Typescript',
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: 'Estudar Javascript',
      isCompleted: true,
    }
  ]);

  return (
    <>
      <Header />
      <Tasks tasks={tasks} />
    </>
  )
}

export default App