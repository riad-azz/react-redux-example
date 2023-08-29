import AddTodo from "@/components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="h-min-screen h-min-screen p-8">
      <main className="mx-auto flex w-full max-w-xl flex-col items-center justify-center rounded-lg bg-gray-950 p-4">
        <AddTodo />
        <Todos />
      </main>
    </div>
  );
}

export default App;
