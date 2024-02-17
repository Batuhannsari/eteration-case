import { Dispatch, SetStateAction } from "react";
import { ProductType } from "./ProductType";

export type GlobalStateContextTypes = {
    products: ProductType[],
    setProducts: Dispatch<SetStateAction<ProductType[]>>,
    getProducts: () => void,
};