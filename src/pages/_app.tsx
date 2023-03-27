import { AuthProvider } from "@/context/AuthContext";
import { ContactProvider } from "@/context/ContactContext";
import { ModalProvider } from "@/context/ModalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ModalProvider>
        <AuthProvider>
          <ContactProvider>
            <ToastContainer autoClose={2000} theme="dark" />
            <Component {...pageProps} />
          </ContactProvider>
        </AuthProvider>
      </ModalProvider>
    </SessionProvider>
  );
}
