import { useState, useCallback, useEffect, FormEvent } from "react";

// Tipagem da tarefa
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

// Componente para adicionar tarefas
function TodoInput({ onAdd }: { onAdd: (title: string) => void }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd(task.trim());
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Digite uma tarefa..."
        className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Adicionar
      </button>
    </form>
  );
}

// Componente de item individual
function TodoItem({
  todo,
  onToggle,
  onRemove,
}: {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}) {
  return (
    <li className="flex justify-between items-center bg-gray-50 p-2 rounded-lg shadow">
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-1 text-left cursor-pointer select-none ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.title}
      </button>
      <button
        onClick={() => onRemove(todo.id)}
        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
      >
        Remover
      </button>
    </li>
  );
}

// Componente principal
export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Carregar do localStorage
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  // Salvar no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback((title: string) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), title, completed: false },
    ]);
  }, []);

  const toggleTodo = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const removeTodo = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center mb-4">✅ Todo List</h1>

        {/* Input */}
        <TodoInput onAdd={addTodo} />

        {/* Lista de tarefas */}
        {todos.length === 0 ? (
          <p className="text-gray-500 text-center">Nenhuma tarefa ainda 🚀</p>
        ) : (
          <ul className="space-y-2">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onRemove={removeTodo}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}


