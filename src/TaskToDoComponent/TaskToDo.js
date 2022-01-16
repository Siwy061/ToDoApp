import React, { useState } from "react";
import styles from "./TaskToDo.module.css";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskToDo = (props) => {
  const [isEditing, setisEditing] = useState(false);
  const handleEditing = () => {
    setisEditing(true);
  };
  const handleUpdatedDone = (e) => {
    if (e.key === "Enter") {
      setisEditing(false);
    }
  };
  let viewMode = {};
  let editMode = {};

  if (isEditing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  return (
    <li className={styles.Task}>
      <p className={styles.Index}> {props.index + 1}</p>
      <p className={styles.Date}>
        Ukonczyc do : {props.date.replace("T", "   ")}
      </p>
      <p className={styles.Name}> {props.name}</p>
      <div className={styles.Icons}>
        {isEditing ? null : (
          <button
            className={styles.Done}
            onClick={() => props.handleFinishTask(props.index)}
          >
            <DoneIcon />
          </button>
        )}
        <button
          className={styles.Edit}
          style={viewMode}
          onClick={handleEditing.bind(this)}
        >
          <EditIcon />
        </button>
        <input
          maxLength={15}
          type={"text"}
          style={editMode}
          className={styles.textInput}
          value={props.name}
          onChange={(e) => {
            props.setUpdate(e.target.value, props.index);
          }}
          onKeyDown={handleUpdatedDone}
        ></input>
        {isEditing ? null : (
          <button
            className={styles.Button}
            type="button"
            onClick={() => props.handleRemove(props.index)}
          >
            <DeleteIcon />
          </button>
        )}
      </div>
    </li>
  );
};

export default TaskToDo;
