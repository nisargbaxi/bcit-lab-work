import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";

interface Props {
  handleSubmit: (name: string) => void;
}

export function Header({ handleSubmit }: Props) {
  const [assignmentName, setAssignmentName] = useState("");

  const submitForm = (e: React.FormEvent) => {
    if (!assignmentName) {
      alert("Please enter assignment name");
      return;
    }
    e.preventDefault();
    handleSubmit(assignmentName);
    setAssignmentName("");
  };

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={submitForm}>
        <input
          placeholder="Add a new assignment"
          id="name"
          type="text"
          value={assignmentName}
          onChange={(e) => setAssignmentName(e.target.value)}
        />
        <button type="submit" disabled={assignmentName === "" ? true : false}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
