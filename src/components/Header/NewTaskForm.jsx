import React from "react";
import styles from "./Header.module.css";
import plusIcon from "../../assets/img/plus.svg";

export const NewTaskForm = () => {
  const [inputValue, setInputValue] = React.useState("");

  const [taskList, setTaskList] = React.useState([]);

  const handleInputChange = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleTaskSubmit = e => {
    e.preventDefault();

    setTaskList(prev => [...prev, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleTaskSubmit}
        className={styles.newTaskForm}
      >
        <input
          className={styles.taskInput}
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className={styles.addNewTaskBtn} type="submit">
          Criar
          <img src={plusIcon} alt="Add (Plus Icon)" />
        </button>
      </form>
    </>
  );
};
