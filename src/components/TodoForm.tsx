import { BsFillSendFill } from "react-icons/bs";

import { useState } from "react";

interface Props {
  addTodo: (task: string) => void;
}

const TodoForm = ({ addTodo }: Props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value != "") {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form
      className="bg-white p-4 gap-4 flex shadow-2xl dark:bg-zinc-800"
      onSubmit={handleSubmit}
    >
      <input
        className="p-4 w-full dark:bg-zinc-800"
        type="text"
        placeholder="Whats on your mind?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="p-4 text-2xl" type="submit">
        <BsFillSendFill />
      </button>
    </form>
  );
};

export default TodoForm;
