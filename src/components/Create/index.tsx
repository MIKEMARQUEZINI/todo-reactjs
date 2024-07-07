type CreateTaskProps = {
  task: string;
  handleAddTask: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CreateTask: React.FC<CreateTaskProps> = ({
  task,
  handleAddTask,
  handleChangeInput,
}) => {
  return (
    <div>
      <span>Component Create: To Do</span>
      <form onSubmit={handleAddTask}>
        <input
          placeholder="Escreva sua Tarefa"
          type="text"
          required
          onChange={handleChangeInput}
          minLength={1}
          value={task}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default CreateTask;
