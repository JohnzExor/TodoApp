import { BsMoonStarsFill } from "react-icons/bs";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

interface Todo {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

const TodoWrapper = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [darkMode, useDarkMode] = useState(false);

  const addTodo = (todo: string) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const editTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (id: string, task: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const deleteTask = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="h-screen w-full flex justify-center dark:bg-zinc-950 dark:text-white">
        <div className="mt-20">
          <div className="mb-14">
            <h1 className="text-center text-6xl mb-4">Todo App</h1>
            <BsMoonStarsFill
              className=" cursor-pointer text-2xl m-auto"
              onClick={() => useDarkMode(!darkMode)}
            />
          </div>

          <TodoForm addTodo={addTodo} />
          {todos.map((todo, index) =>
            todo.isEditing ? (
              <EditTodoForm key={index} task={todo} editTask={editTask} />
            ) : (
              <Todo
                key={index}
                task={todo}
                editTask={editTodo}
                deleteTask={deleteTask}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoWrapper;
