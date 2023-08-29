import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";

interface Props {
  task: {
    id: string;
    task: string;
  };
  editTask: (e: string) => void;
  deleteTask: (e: string) => void;
}

const Todo = ({ task, editTask, deleteTask }: Props) => {
  return (
    <div className="mt-4 p-4 flex bg-white gap-4 rounded-lg shadow-2xl dark:bg-zinc-800">
      <p className=" w-52 break-words p-2">{task.task}</p>
      <div className="ml-auto gap-4 flex text-2xl">
        <button onClick={() => editTask(task.id)}>
          <AiOutlineEdit />
        </button>
        <button onClick={() => deleteTask(task.id)}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default Todo;
