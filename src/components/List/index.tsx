interface ListTaskProps {
  listTask: string[];
}

const ListTask: React.FC<ListTaskProps> = ({ listTask }) => {
  return (
    <div>
      Component List: To Do
      <ul>
        {listTask.map((task: string, index: number) => (
          <li key={`task-${task}-${index}`}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
