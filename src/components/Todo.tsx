import { useState } from "react";
import { useDispatch } from "react-redux";
import { Trash2, Square, CheckSquare } from "lucide-react";

import { TodoProps } from "@/features/todo/todoSlice";
import { updateTodo, removeTodo } from "@/features/todo/todoSlice";
import { cn } from "@/app/utils";

const Todo = ({ id, text, completed }: TodoProps) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const dispatch = useDispatch();

  const updateTodoHandler = () => {
    const newValue = !isCompleted;
    dispatch(updateTodo({ id, completed: newValue }));
    setIsCompleted(newValue);
  };

  const removeTodoHandler = () => {
    dispatch(removeTodo({ id }));
  };

  return (
    <div className="mb-2 flex items-center justify-between rounded-lg bg-gray-800 px-4 py-1">
      <p
        className={cn(
          "py-2",
          isCompleted ? "line-through" : " overflow-x-auto"
        )}
      >
        {text}
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={updateTodoHandler}
          title={isCompleted ? "Uncheck" : "Check"}
        >
          {isCompleted ? (
            <CheckSquare className="text-green-600 hover:text-green-400" />
          ) : (
            <Square className="text-green-600 hover:text-green-400" />
          )}
        </button>
        <button onClick={removeTodoHandler} title="Remove">
          <Trash2 className="text-red-600 hover:text-red-400" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
