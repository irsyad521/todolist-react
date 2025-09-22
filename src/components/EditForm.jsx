import { useState } from "react";

const EditForm = ({ editTask, task }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    editTask(task.id, inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-10">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={task.task}
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
