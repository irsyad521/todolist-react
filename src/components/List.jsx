import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import FormInput from './FormInput';
import ListTodo from './ListTodo';
import EditForm from './EditForm';

const List = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = task => {
    setTodos(prev => [
      ...prev,
      { id: uuid(), task, isEditing: false, completed: false },
    ]);
  };

  const deleteTodo = id => setTodos(prev => prev.filter(todo => todo.id !== id));

  const toggleEdit = id =>
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );

  const editTask = (id, task) =>
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );

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
