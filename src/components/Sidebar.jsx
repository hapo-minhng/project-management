import Button from "./Button";

export default function Sidebar({ onAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        your projects
      </h2>
      <div>
        <Button onClick={onAddProject}>+ Add Project</Button>
      </div>
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        <li className="flex justify-between my-4"></li>
      </ul>
    </aside>
  );
}
