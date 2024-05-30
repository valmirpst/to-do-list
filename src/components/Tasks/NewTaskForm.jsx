import React from "react";
import styles from "./NewTaskForm.module.css";
import plusIcon from "../../assets/img/plus.svg";
import { v4 as uuidv4 } from "uuid";

const NewTaskForm = ({ taskList, setTaskList, error, setError }) => {
  const [inputValue, setInputValue] = React.useState("");
  const taskInput = React.useRef();

  const handleInputChange = e => {
    const { value } = e.target;
    setInputValue(value);
    setError("");
  };

  React.useEffect(() => {
    saveTaskList(taskList);
  }, [taskList]);

  const handleTaskSubmit = e => {
    e.preventDefault();
    const date = new Date();

    if (inputValue.trim()) {
      const newTask = {
        id: uuidv4(),
        value: inputValue,
        isChecked: false,
        createDate: {
          day: date.getDate(),
          month: date.getMonth() + 1,
          year: date.getFullYear(),
        },
      };
      setTaskList(prev => [...prev, newTask]);
    } else {
      error ? setError("") : setError("A tarefa não pode estar vazia");
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
        onClick={() => setError("")}
        ref={taskInput}
      />
      <button className={styles.addNewTaskBtn} type="submit">
        Criar
        <img src={plusIcon} alt="Add (Plus Icon)" />
      </button>
    </form>
  );
};

export default NewTaskForm;
