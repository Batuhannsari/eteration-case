import { Dispatch, SetStateAction } from "react";
import { ProductType } from "./ProductType";
import { FilterStatesType } from "./FilterStatesType";
import { PaginationType } from "./PaginationType";

export type GlobalStateContextTypes = {
    products: ProductType[],
    setProducts: Dispatch<SetStateAction<ProductType[]>>,
    filteredProducts: ProductType[],
    setFilteredProducts: Dispatch<SetStateAction<ProductType[]>>,
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
    filterStates: FilterStatesType,
    setFilterStates: Dispatch<SetStateAction<FilterStatesType>>,
    sortProducts: (filteredProducts: ProductType[]) => void,
    filterProducts: () => void,
    pagination: PaginationType,
    setPagination: Dispatch<SetStateAction<PaginationType>>,

};