import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface Props {
  handleSubmit: (name: string, date?: Date) => void;
}

export function Header({ handleSubmit }: Props) {
  const [assignmentName, setAssignmentName] = useState<string | undefined>(
    undefined
  );
  const [dueDate, setDueDate] = useState<Date | undefined>(undefined);
  const [isDatePickerOpen, setDatePickerState] = useState(false);

  const makeButtonDisable = (): boolean => {
    return assignmentName && dueDate ? false : true;
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!assignmentName) {
      alert("Please enter assignment name");
      return false;
    }
    handleSubmit(assignmentName, dueDate);
    setAssignmentName("");
    setDueDate(undefined);
  };

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={submitForm}>
        <input
          placeholder="Add a new assignment"
          id="name"
          className={styles.formInput}
          type="text"
          value={assignmentName}
          onChange={(e) => setAssignmentName(e.target.value)}
        />
        <button
          type="submit"
          className={styles.primaryButton}
          disabled={makeButtonDisable()}
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
        <button
          className={styles.primaryButton}
          type="button"
          onClick={() => setDatePickerState(!isDatePickerOpen)}
        >
          <BsFillCalendarDateFill size={20} />
        </button>
        <div
          className={styles.dayPickerBox}
          onBlur={(e) => {
            setDatePickerState(!isDatePickerOpen);
          }}
        >
          {isDatePickerOpen && (
            <DayPicker
              mode="single"
              selected={dueDate}
              onSelect={setDueDate}
              fromDate={new Date()}
            />
          )}
        </div>
      </form>
    </header>
  );
}
