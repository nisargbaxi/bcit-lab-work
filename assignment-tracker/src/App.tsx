import { Assignment } from "./assets/Types";
import { Assignments } from "./components/Assignments";
import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  // Retrieve assignments on init only once, not on every render:
  const initialHistory = (): Assignment[] => {
    const json = localStorage.getItem("assignmentDb") ?? "[]";
    return JSON.parse(json) as Assignment[];
  };

  const [assignments, setAssignments] = useState<Assignment[]>(initialHistory);

  const addAssignment = (name: string) => {
    const existingAssignment = assignments.filter(
      (item) => item.name.toLowerCase() == name.toLocaleLowerCase()
    ).length;
    if (existingAssignment > 0) {
      alert("Assignment already exist with name : " + name);
    }
    setAssignments([{ name: name, completed: false }, ...assignments]);
    localStorage.setItem(
      "assignmentDb",
      JSON.stringify([{ name: name, completed: false }, ...assignments])
    );
  };

  const updateAssignment = (index: number, action: string) => {
    const assignmentsToComplete = [...assignments];
    assignmentsToComplete[index].completed = action == "uncheck" ? false : true;

    setAssignments(assignmentsToComplete);
    localStorage.setItem("assignmentDb", JSON.stringify(assignments));
  };

  const deleteAssignment = (index: number) => {
    const assignmentToDelete = [...assignments];
    assignmentToDelete.splice(index, 1);
    setAssignments(assignmentToDelete);
    localStorage.setItem("assignmentDb", JSON.stringify(assignmentToDelete));
  };

  return (
    <>
      <Header handleSubmit={addAssignment} />
      <Assignments
        assignmentsList={assignments}
        completeAssignment={updateAssignment}
        deleteAssignment={deleteAssignment}
      />
    </>
  );
}

export default App;
