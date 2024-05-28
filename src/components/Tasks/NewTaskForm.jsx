import React from "react";
import styles from "./NewTaskForm.module.css";
import plusIcon from "../../assets/img/plus.svg";
import { v4 as uuidv4 } from "uuid";

const NewTaskForm = props => {
  const { taskList, setTaskList } = props;
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  React.useEffect(() => {
    saveTaskList(taskList);
  }, [taskList]);

  const handleTaskSubmit = e => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTask = {
        id: uuidv4(),
        value: inputValue,
        isChecked: false,
      };
      setTaskList(prev => [...prev, newTask]);
    } else {
      window.alert("nao pode ser vazio");
    }
    setInputValue("");
  };

  const saveTaskList = taskList => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  };

  return (
    <form action="" onSubmit={handleTaskSubmit} className={styles.newTaskForm}>
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
  );
};

export default NewTaskForm;
