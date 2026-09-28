import { useState } from "react";
import styles from "./ConfirmModal.module.css";

function ConfirmModal({
  confirmFunction,
  message,
  closeModal,
  confirmMessage,
  cancelMessage,
}) {
  const [isClosing, setisClosing] = useState(false);
  return (
    <div
      onAnimationEnd={() => {
        isClosing && closeModal();
      }}
      className={`${styles.confirmModal} ${isClosing && styles.hide}`}
    >
      <div className={styles.form}>
        <div className={styles.formMain}>
          <img src="/icon/Delete.svg" alt="DeleteIcon" />
          <p>{message}</p>
          <div className={styles.modalButtons}>
            <button
              onClick={() => {
                confirmFunction();
                setisClosing(true);
              }}
              className={styles.confirmButton}
            >
              {confirmMessage}
            </button>
            <button
              onClick={() => setisClosing(true)}
              className={styles.cancelButton}
            >
              {cancelMessage}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
