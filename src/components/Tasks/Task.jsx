import React from "react";
import styles from "./Task.module.css";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const Task = ({
  value,
  handleTrashClick,
  handleCheckboxChange,
  taskList,
  setTaskList,
}) => {
  const task = React.useRef();

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

  const moveTaskUp = value => {
    const taskIndex = taskList.indexOf(value);
    if (taskIndex === 0) return;
    const newArray = taskList.filter((value, index) => index !== taskIndex);
    newArray.splice(taskIndex - 1, 0, value);
    task.current.style.filter = "brightness(1.2)";
    setTimeout(() => (task.current.style.filter = "brightness(1)"), 250);
    setTaskList(newArray);
  };

  const moveTaskDown = value => {
    const taskIndex = taskList.indexOf(value);
    if (taskIndex === taskList.length - 1) return;
    const newArray = taskList.filter((value, index) => index !== taskIndex);
    newArray.splice(taskIndex + 1, 0, value);
    task.current.style.filter = "brightness(1.2)";
    setTimeout(() => (task.current.style.filter = "brightness(1)"), 250);
    setTaskList(newArray);
  };

  return (
    <div className={styles.task} ref={task}>
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

      <div className={styles.orderButtons}>
        <FaAngleUp
          className={styles.upButton}
          onClick={() => moveTaskUp(value)}
        />
        <FaAngleDown
          className={styles.downButton}
          onClick={() => moveTaskDown(value)}
        />
      </div>
    </div>
  );
};

export default Task;
