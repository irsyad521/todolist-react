import { useState } from 'react';

const FormInput = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (value) addTodo(value);
    setValue('');
  };

  return (
    <form className="flex gap-3 mb-10" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Task"
        value={value}
        onChange={e => setValue(e.target.value)}
        className="w-full p-3 rounded-lg sm:text-xl bg-slate-300 dark:bg-gray-300 dark:text-gray-100 font-semibold"
      />
      <button
        type="submit"
        className="px-8 py-3 font-semibold border rounded-md bg-blue-700 dark:border-gray-100 dark:text-gray-100"
      >
        Add Task
      </button>
    </form>
  );
};

export default FormInput;
