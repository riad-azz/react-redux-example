import { useSelector } from "react-redux";
import Todo from "@/components/Todo";
import { TodoState } from "@/features/todo/todoSlice";
import LoadingSpinner from "./LoadingSpinner";

const Todos = () => {
  const todos = useSelector((state: TodoState) => state.todos);
  const orderedTodos = todos.slice();

  orderedTodos.sort((a, b) => {
    if (a.completed && !b.completed) {
      return 1;
    }
    if (!a.completed && b.completed) {
      return -1;
    }
    return 0;
  });

  if (!todos) {
    return <LoadingSpinner />;
  }

  return (
    <ul className="w-full">
      <li>
        {orderedTodos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </li>
    </ul>
  );
};

export default Todos;
