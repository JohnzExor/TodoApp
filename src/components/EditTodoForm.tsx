import { FiSave } from "react-icons/fi";

import { useState } from "react";

interface Props {
  task: {
    id: string;
    task: string;
  };
  editTask: (id: string, task: string) => void;
}

const EditTodoForm = ({ task, editTask }: Props) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editTask(task.id, value);
  };

  return (
    <form
      className="bg-white p-4 mt-4 flex rounded-lg shadow-2xl dark:bg-zinc-800"
      onSubmit={handleSubmit}
    >
      <input
        className="p-2 dark:bg-zinc-800"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="text-2xl ml-auto" type="submit">
        <FiSave />
      </button>
    </form>
  );
};

export default EditTodoForm;
