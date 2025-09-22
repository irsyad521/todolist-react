import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import FormInput from './FormInput';
import ListTodo from './ListTodo';
import EditForm from './EditForm';

const List = () => {
  const [todos, setTodos] = useState([]);

  // Tambah todo baru
  const addTodo = task => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: uuid(), task, isEditing: false, completed: false },
    ]);
  };

  // Hapus todo
  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // Toggle mode edit
  const toggleEdit = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Update task
  const editTask = (id, newTask) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, task: newTask, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="sm:w-1/2 mt-20">
      <FormInput addTodo={addTodo} />
      {todos.map(todo =>
        todo.isEditing ? (
          <EditForm key={todo.id} editTask={editTask} task={todo} />
        ) : (
          <ListTodo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={toggleEdit}
          />
        )
      )}
    </div>
  );
};

export default List;
