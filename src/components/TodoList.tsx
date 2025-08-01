import { useState } from "react";

type todotype = {
  id: number;
  text: string;
};

const TodoList = () => {
  const [todolist, setTodoList] = useState<todotype[]>([]);
  const [inputvalue, setInputValue] = useState("");

  const addtask = () => {
    if (inputvalue.trim() === "") return;

    // setTodoList([...todolist, { id: Math.random(), text: inputvalue }]);

    setTodoList(prev => {
      return [...prev, { id: Math.random(), text: inputvalue }];
    });
  };

  return (
    <div className="w-[600px] mx-auto mt-10 border p-5">
      <h2 className="text-5xl text-center font-bold">To do List</h2>
      <div className="flex gap-x-5 items-center mt-5">
        <input
          type="text"
          name=""
          id=""
          value={inputvalue}
          onChange={e => setInputValue(e.target.value)}
          className="p-5 rounded-lg w-full border"
        />
        <button
          onClick={addtask}
          className="border p-5 bg-black text-white cursor-pointer"
        >
          Add
        </button>
      </div>
      {todolist.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </div>
  );
};

export default TodoList;
