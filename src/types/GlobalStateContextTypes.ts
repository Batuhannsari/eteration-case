import { Dispatch, SetStateAction } from "react";
import { ProductType } from "./ProductType";

export type GlobalStateContextTypes = {
    products: ProductType[],
    setProducts: Dispatch<SetStateAction<ProductType[]>>,
    getProducts: () => void,
    selectedProduct: ProductType,
    setSelectedProduct: Dispatch<SetStateAction<ProductType>>,
    cartItems: ProductType[],
    setCartItems: Dispatch<SetStateAction<ProductType[]>>,
    addToCart: (product: ProductType) => void,
    deleteFromCart: (product: ProductType) => void,
    totalPrice: number,
    setTotalPrice: Dispatch<SetStateAction<number>>,
    calcTotal: (cartItems: ProductType[]) => void,
};