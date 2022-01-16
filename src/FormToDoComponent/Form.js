import { style } from "@mui/system";
import React, { useState } from "react";
import styles from "./Form.module.css";
const Form = (props) => {
  const [toDoName, setName] = useState("");
  const [toDoDate, settoDoDate] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleDate = (e) => {
    settoDoDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (toDoName.trim().length === 0 || toDoDate.trim().length === 0) {
      alert("Wypelnij poprawnie formularz");
    } else {
      props.Add({
        id: props.counter,
        name: toDoName,
        date: toDoDate,
      });

      props.setcounter(props.counter + 1);
      setName("");
      settoDoDate("");
    }
  };
  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <div className={styles.Name}>
        <label className={styles.labelInName} htmlFor="name">
          Nazwa
        </label>
        <input
          placeholder="wpisz tekst..."
          onChange={handleChange}
          value={toDoName}
          id="name"
        ></input>
      </div>
      <div className={styles.Date}>
        <label className={styles.labelInDate} htmlFor="date">
          Do kiedy wykonac?{" "}
        </label>
        <input
          min={new Date().toISOString().slice(0, -8)}
          onChange={handleDate}
          value={toDoDate}
          type={"datetime-local"}
          id="date"
        ></input>
        <button className={styles.button}>Dodaj</button>
      </div>
    </form>
  );
};

export default Form;
