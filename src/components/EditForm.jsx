import { useState } from 'react';

const EditForm = ({ editTask, task }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    editTask(task.id, value);
    setValue('');
  };

  return (
    <form className="flex gap-3 mb-10" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={task.task}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-3 rounded-lg sm:text-xl bg-slate-300 font-semibold"
      />
      <button
        type="submit"
        className="px-8 py-3 font-semibold border dark:border-gray-100 dark:text-gray-100 bg-blue-700 rounded-md"
      >
        Update
      </button>
    </form>
  );
};

export default EditForm;
