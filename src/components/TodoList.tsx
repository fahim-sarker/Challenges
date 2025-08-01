import { useEffect, useState } from "react";

type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

const TodoList = () => {
  const [todolist, setTodoList] = useState<TodoType[]>([]);
  const [inputvalue, setInputValue] = useState<string>("");
  const [edittask, setEditTask] = useState<TodoType | null>(null);
  const [editInputValue, setEditInputValue] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false); 

  const addtask = () => {
    if (inputvalue.trim() === "") return;
    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: inputvalue,
        completed: false,
      },
    ]);
    setInputValue("");
  };

  const deletetask = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const edit = (todo: TodoType) => {
    setEditTask(todo);
  };

  useEffect(() => {
    if (edittask) {
      setEditInputValue(edittask.title);
    }
  }, [edittask]);

  const saveEdit = () => {
    if (!edittask) return;
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === edittask.id ? { ...todo, title: editInputValue } : todo
      )
    );
    setEditTask(null);
    setEditInputValue("");
  };

  const cancelEdit = () => {
    setEditTask(null);
    setEditInputValue("");
  };

  const toggleComplete = (id: number) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div
      className={`min-h-screen px-4 py-10 flex justify-center items-start transition-all duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-r from-purple-100 to-blue-100 text-gray-800"
      }`}
    >
      <div className="w-[600px]">
        {/* Toggle Theme Button */}
        <div className="flex justify-end mb-5">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition duration-300 shadow cursor-pointer ${
              darkMode
                ? "bg-white text-gray-800 hover:bg-gray-100"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div
          className={`rounded-xl shadow-xl p-8 transition duration-500 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2
            className={`text-4xl font-bold text-center mb-8 ${
              darkMode ? "text-white" : "text-purple-800"
            }`}
          >
            My To-Do List
          </h2>

          {/* Input + Add Button */}
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              value={inputvalue}
              onChange={(e) => setInputValue(e.target.value)}
              className={`flex-1 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "border-gray-300"
              }`}
              placeholder="Add a new task..."
            />
            <button
              onClick={addtask}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition duration-200 shadow cursor-pointer"
            >
              Add
            </button>
          </div>

          {/* Todo List */}
          <ul className="space-y-4">
            {todolist.map((todo) => (
              <li
                key={todo.id}
                className={`border rounded-lg px-4 py-3 flex items-center justify-between shadow-sm hover:shadow-md transition ${
                  darkMode
                    ? "bg-gray-700 border-gray-600"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                {edittask?.id === todo.id ? (
                  <div className="flex w-full gap-3 items-center">
                    <input
                      type="text"
                      className={`flex-1 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                        darkMode
                          ? "bg-gray-600 border-gray-500 text-white"
                          : "border-gray-300"
                      }`}
                      value={editInputValue}
                      onChange={(e) => setEditInputValue(e.target.value)}
                    />
                    <button
                      onClick={saveEdit}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition cursor-pointer"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded transition cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                        className="h-5 w-5 accent-purple-600"
                      />
                      <span
                        className={`text-lg ${
                          todo.completed
                            ? "line-through text-gray-400"
                            : darkMode
                            ? "text-white"
                            : "text-gray-800"
                        }`}
                      >
                        {todo.title}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => edit(todo)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deletetask(todo.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
