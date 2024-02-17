import GlobalStateContextProvider from "@/context/GlobalStateContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateContextProvider>
      <ToastContainer position="bottom-left" autoClose={2000} />
      <Component {...pageProps} />
    </GlobalStateContextProvider>
  )
}
