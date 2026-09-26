import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "../styles/Profile.module.css";
import { toast } from "react-toastify";

function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/icon/user.png" alt="user" />
        <h2>{user.username}</h2>
        <p>نقش: {user.isAdmin ? "مدیر" : "کاربر"}</p>
        <button
          onClick={() => {
            logout();
            toast.success("با موفقیت خارج شدید.");
          }}
        >
          خروج
        </button>
      </div>
    </div>
  );
}

export default Profile;
