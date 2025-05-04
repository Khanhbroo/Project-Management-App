import { useRef, useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");
  const inputRef = useRef();

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim().length === 0) {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
    inputRef.current.focus();
  };

  return (
    <div className="flex items-center gap-4">
      <input
        ref={inputRef}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enteredTask}
        onChange={handleChange}
      />
      <button
        className="text-stone-700 hover:text-stone-950 transition-colors"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
