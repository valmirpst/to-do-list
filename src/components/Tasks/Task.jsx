import React from "react";
import styles from "./Task.module.css";

const Task = ({ value, handleTrashClick, handleCheckboxChange }) => {
  const getDay = () => {
    return value.createDate.day < 10
      ? `0${value.createDate.day}`
      : value.createDate.day;
  };

  const getMonth = () => {
    return value.createDate.month < 10
      ? `0${value.createDate.month}`
      : value.createDate.month;
  };

  const getYear = () => {
    const year = value.createDate.year;
    return year.toString().slice(-2);
  };

  return (
    <div className={styles.task}>
      <div className={styles.checkboxDiv}>
        <input
          onChange={e => handleCheckboxChange(e, `label_${value.id}`, value)}
          id={`check_${value.id}`}
          type="checkbox"
          checked={value.isChecked}
        />
        <label
          className={styles.check}
          id={`check_${value.id}`}
          htmlFor={`check_${value.id}`}
        ></label>
      </div>
      <label
        htmlFor={`check_${value.id}`}
        className={styles.taskText}
        id={`label_${value.id}`}
        style={
          value.isChecked
            ? {
                textDecoration: "line-through",
                color: "var(--gray-300)",
              }
            : {}
        }
      >
        {value.value}
      </label>
      <button
        className={styles.trash}
        onClick={e => handleTrashClick(e, value)}
      ></button>
      <div className={styles.dateDisplay}>
        {getDay()}
        <span className={styles.dateBar}>/</span>
        {getMonth()}
        <span className={styles.dateBar}>/</span>
        {getYear()}
      </div>
    </div>
  );
};

export default Task;
