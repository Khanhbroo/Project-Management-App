import Input from "./Input";

const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950 transition-colors">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 bg-stone-800 rounded-md text-stone-50 hover:bg-stone-950 transition-colors">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" id="title" />
        <Input label="Description" id="description" textarea />
        <Input label="Due Date" id="due-date" />
      </div>
    </div>
  );
};

export default NewProject;
