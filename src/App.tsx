import { useState } from "react";
import "./App.css";
import ListTask from "./components/List";
import CreateTask from "./components/Create";

function App() {
  const [task, setTask] = useState<string>("");
  const [listTask, setListTask] = useState<string[]>([]);

  const isValidTask = (inputTask: string) => inputTask.trim() !== "";

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidTask(task)) {
      alert("O campo não pode ser vazio ou conter apenas espaços.");
      return;
    }

    setListTask((prevListTask) => [...prevListTask, task]);
    setTask("");
    alert("Tarefa Adicionada com sucesso!");
  };

  return (
    <>
      <ListTask listTask={listTask} />
      <CreateTask
        task={task}
        handleAddTask={handleAddTask}
        handleChangeInput={handleChangeInput}
      />
    </>
  );
}

export default App;
