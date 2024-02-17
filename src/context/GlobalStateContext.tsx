import { GlobalStateContextTypes } from "@/types/GlobalStateContextTypes";
import { createContext, useContext, useState } from "react";


const Context = createContext<GlobalStateContextTypes | null>(null);

type Props = {
    children: React.ReactNode;
};

export default function GlobalStateContextProvider({ children }: Props) {

    const data: GlobalStateContextTypes = {
    };

    return <Context.Provider value={data}>{children}</Context.Provider>;
}

export const useGlobalStateContext = () => useContext(Context) as GlobalStateContextTypes;
