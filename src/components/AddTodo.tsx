import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo({ text: input }));
    setInput("");
  };

  return (
    <form className="mb-4 flex w-full gap-2" onSubmit={addTodoHandler}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a Todo..."
        className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white transition-all duration-300 hover:bg-blue-700"
      >
        <span>Add</span>
      </button>
    </form>
  );
};

export default AddTodo;
