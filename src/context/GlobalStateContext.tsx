import { getProductsRequest } from "@/api/controllers/product-controller";
import { GlobalStateContextTypes } from "@/types/GlobalStateContextTypes";
import { ProductDefaultValue, ProductType } from "@/types/ProductType";
import { createContext, useContext, useState } from "react";


const Context = createContext<GlobalStateContextTypes | null>(null);

type Props = {
    children: React.ReactNode;
};

export default function GlobalStateContextProvider({ children }: Props) {

    const [products, setProducts] = useState<ProductType[]>([])

    const [selectedProduct, setSelectedProduct] = useState<ProductType>(ProductDefaultValue)

    const [cartItems, setCartItems] = useState<ProductType[]>([])

    const getProducts = async () => {
        try {
            let res = await getProductsRequest()
            if (res) {
                setProducts(res.data)
            }
        } catch (error) { }
    }

    const data: GlobalStateContextTypes = {
        products,
        setProducts,
        getProducts,
        selectedProduct,
        setSelectedProduct,
        cartItems,
        setCartItems,
    };

    return <Context.Provider value={data}>{children}</Context.Provider>;
}

export const useGlobalStateContext = () => useContext(Context) as GlobalStateContextTypes;
