import React from "react";
import styles from "./WarningModal.module.css";
import { HiXMark } from "react-icons/hi2";

const WarningModal = ({ error, setError }) => {
  return (
    error && (
      <div className={styles.warningModal}>
        {error}
        <button onClick={() => setError("")} className={styles.closeModal}>
          <HiXMark color="var(--gray-100)" />
        </button>
      </div>
    )
  );
};

export default WarningModal;
