import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import WarningModal from "./views/WarningModal/WarningModal";
import "./index.css";

function App() {
  if (!localStorage.getItem("taskList"))
    localStorage.setItem("taskList", JSON.stringify([]));

  const [error, setError] = React.useState("");

  return (
    <>
      <WarningModal error={error} setError={setError} />
      <Header />
      <Tasks error={error} setError={setError} />
    </>
  );
}

export default App;
