import { Assignment } from "../../assets/Types";
import styles from "./assignment.module.css";
import { TbTrash, TbCircleCheckFilled } from "react-icons/tb";
interface Props {
  data: Assignment;
  index: number;
  handleUpdate: (index: number, action: string) => void;
  handleDelete: (index: number) => void;
}
interface DueDateProps {
  day: number;
}

export function AssignmentLine({
  data,
  index,
  handleUpdate,
  handleDelete,
}: Props) {
  const formatDate = (date: Date): string => {
    const d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };
  const getAssignmentDueDays = (assignmentDate: Date | undefined): number => {
    const today = new Date();
    if (assignmentDate == null) {
      return 0;
    }
    const diffrence =
      (new Date(formatDate(assignmentDate)).getTime() -
        new Date(formatDate(today)).getTime()) /
      (1000 * 60 * 60 * 24);

    return parseInt(diffrence.toFixed(0) || "0");
  };
  return (
    <div className={styles.assignment}>
      <button
        className={styles.checkContainer}
        onClick={() =>
          handleUpdate(index, data.completed ? "uncheck" : "check")
        }
      >
        {data.completed ? <TbCircleCheckFilled size={20} /> : <div></div>}
      </button>

      <p className={data.completed ? styles.textCompleted : ""}>
        {data.name}
        <AssignmentDue day={getAssignmentDueDays(data.dueDate)} />
      </p>

      <button
        className={styles.deleteButton}
        onClick={() => handleDelete(index)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}

function AssignmentDue({ day }: DueDateProps) {
  return (
    <label
      style={{
        backgroundColor: day <= 1 ? "red" : "#4B4B4B",
        padding: "10px",
        marginLeft: "10px",
        borderRadius: "10px",
      }}
    >
      Due :
      {day < 1 ? " Today" : day === 1 ? " Tomorrow" : " In " + day + " days"}
    </label>
  );
}
