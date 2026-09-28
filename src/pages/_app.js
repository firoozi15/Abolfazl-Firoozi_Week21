import { Bounce, ToastContainer } from "react-toastify";
import AuthProvider from "../context/AuthContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ToastContainer
        toastClassName="custom-toast"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
