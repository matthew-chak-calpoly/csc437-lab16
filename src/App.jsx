import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TodoItem from "./components/TodoItem";
import { nanoid } from "nanoid";
import Modal from "./components/Modal";
import { ButtonPrimary } from "./components/Buttons";

const INITIAL_TASK_LIST = [
  { id: "todo-1", name: "Eat", isComplete: false },
  { id: "todo-2", name: "Sleep", isComplete: false },
  { id: "todo-3", name: "Repeat", isComplete: false },
]

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASK_LIST);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function onNewTask(name) {
    const newTask = {
      id: nanoid(),
      name,
      isComplete: false,
    };
    setTasks([...tasks, newTask]);
    setIsModalOpen(false);
  }

  function toggleTaskComplete(id) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function handleDeleteTask(id) {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  return (
      <main className="m-4"> {/* Reminder: React code uses className instead of class */}
          <ButtonPrimary onClick={() => setIsModalOpen(true)}>New Task</ButtonPrimary>
          <section>
              <h1 className="text-xl font-bold">To do</h1>
              <ul>
                  {tasks.map(task => <TodoItem key={task.id} id={task.id} name={task.name} isComplete={task.isComplete} onToggleComplete={toggleTaskComplete} onDelete={handleDeleteTask} />)}
              </ul>
          </section>

          {isModalOpen && <Modal title="New task" onClose={() => setIsModalOpen(false)}>
              <AddTaskForm onNewTask={onNewTask} />
          </Modal>}
      </main>
  );
}

export default App;