import { Assignment } from "../../assets/Types";
import { AssignmentLine } from "../Assignment";
import styles from "./assignments.module.css";

interface Props {
  assignmentsList: Assignment[];
  completeAssignment: (index: number, action: string) => void;
  deleteAssignment: (index: number) => void;
}

export function Assignments({
  assignmentsList,
  completeAssignment,
  deleteAssignment,
}: Props) {
  const totalAssignmentCount = assignmentsList.length;
  const completeAssignmentCount = assignmentsList.filter(
    (item) => item.completed === true
  ).length;
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{totalAssignmentCount}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
            {completeAssignmentCount} of {totalAssignmentCount}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {assignmentsList.map((item, index) => {
          return (
            <AssignmentLine
              data={item}
              index={index}
              handleDelete={deleteAssignment}
              handleUpdate={completeAssignment}
            />
          );
        })}
        {assignmentsList.length == 0 && <p>No assignments available.</p>}
      </div>
    </section>
  );
}
