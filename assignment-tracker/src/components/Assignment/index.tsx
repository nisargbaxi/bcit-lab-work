import { Assignment } from "../../assets/Types";
import styles from "./assignment.module.css";
import { TbTrash, TbCircleCheckFilled } from "react-icons/tb";
interface Props {
  data: Assignment;
  index: number;
  handleUpdate: (index: number, action: string) => void;
  handleDelete: (index: number) => void;
}

export function AssignmentLine({
  data,
  index,
  handleUpdate,
  handleDelete,
}: Props) {
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

      <p
        className={data.completed ? styles.textCompleted : ""}
        onClick={() =>
          handleUpdate(index, data.completed ? "uncheck" : "check")
        }
      >
        {data.name}
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
