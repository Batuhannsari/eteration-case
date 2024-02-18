import GlobalStateContextProvider from "@/context/GlobalStateContext";
import CustomThemeProvider from "@/styles/CustomThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <GlobalStateContextProvider>
        <ToastContainer position="bottom-left" autoClose={2000} />
        <Component {...pageProps} />
      </GlobalStateContextProvider>
    </CustomThemeProvider>
  )
}
