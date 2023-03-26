import { AuthProvider } from "@/context/AuthContext";
import { ContactProvider } from "@/context/ContactContext";
import { ModalProvider } from "@/context/ModalContext";
import "@/styles/globals.css";
import "@/styles/reset.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ContactProvider>
        <ModalProvider>
          <ToastContainer autoClose={2000} theme="dark" />
          <Component {...pageProps} />
        </ModalProvider>
      </ContactProvider>
    </AuthProvider>
  );
}
