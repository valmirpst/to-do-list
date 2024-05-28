import React from "react";
import styles from "./NewTaskForm.module.css";
import plusIcon from "../../assets/img/plus.svg";

const NewTaskForm = props => {
  const [inputValue, setInputValue] = React.useState("");

  const { taskList, setTaskList } = props;

  const handleInputChange = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleTaskSubmit = e => {
    e.preventDefault();
    if (taskList.includes(inputValue)) {
      window.alert("tarefa ja adicionada");
      return;
    }
    if (inputValue.trim()) {
      setTaskList(prev => [...prev, inputValue]);
    } else {
      window.alert("nao pode ser vazio");
    }
    setInputValue("");
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
