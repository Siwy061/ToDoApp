import React from "react";
import styles from "./FinishedTasks.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

const FinishedTasks = (props) => {
  return (
    <div className={styles.Wrapper}>
      <div>
        <p className={styles.pFinishedTasks}>Ukonczone Zadania</p>

        {props.finishedTasks.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </div>
    </div>
  );
};

export default FinishedTasks;
