import { useState } from "react";
import NoProject from "./components/NoProject";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <Project />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProject onAddProject={handleAddProject} />
  }

    return (
      <main className="h-screen my-8 flex gap-8">
        <Sidebar onAddProject={handleAddProject} />
        {content}
      </main>
    );
}

export default App;
