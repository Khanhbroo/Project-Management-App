import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onSaveData }) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enterdDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim().length === 0 ||
      enterdDescription.trim().length === 0 ||
      enteredDueDate.trim().length === 0
    ) {
      // Show error modal
      modal.current.open();
      return;
    }

    // Validation...
    onSaveData({
      title: enteredTitle,
      description: enterdDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2>Invalid Input</h2>
        <p>Oops... looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid value for every input field.</p>
      </Modal>
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
    </>
  );
};

export default NewProject;
