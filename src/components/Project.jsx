import { useRef } from "react";
import Input from "./Input";

export default function Project(onAdd) {
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  function handleSave() {
    const title = titleRef.current.value;
    const desc = descRef.current.value;
    const date = dateRef.current.value;

    onAdd({
      title: title,
      desc: desc,
      date: date
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li className="flex justify-between my-4">
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li className="flex justify-between my-4">
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={handleSave}>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input
          ref={titleRef}
          label="title"
          labelFor="title"
          type="text"
          name="title"
          id="title"
        />
        <Input
          ref={descRef}
          label="description"
          labelFor="description"
          textarea={true}
          name="description"
          id="description"
        />
        <Input
          ref={dateRef}
          label="due date"
          labelFor="date"
          type="date"
          name="date"
          id="date"
        />
      </div>
    </div>
  );
}
