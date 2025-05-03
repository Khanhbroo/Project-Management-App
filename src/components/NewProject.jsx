import { useRef } from "react";
import Input from "./Input";

const NewProject = ({ onSaveData }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enterdDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // Validation...
    onSaveData({
      title: enteredTitle,
      description: enterdDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950 transition-colors">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 bg-stone-800 rounded-md text-stone-50 hover:bg-stone-950 transition-colors"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" id="title" />
        <Input
          ref={description}
          label="Description"
          id="description"
          textarea
        />
        <Input type="date" ref={dueDate} label="Due Date" id="due-date" />
      </div>
    </div>
  );
};

export default NewProject;
