import styles from "./Time.module.css";
import React, { useState, useEffect } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <label className={styles.Date}>
      Dzisiejsza data :
      <p className={styles.DateinDate}>Czas : {date.toLocaleTimeString()}</p>
      <p className={styles.DateinDate}> Data : {date.toLocaleDateString()}</p>
    </label>
  );
};

export default Time;
