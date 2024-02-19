import { getProductsRequest } from "@/api/controllers/product-controller";
import { GlobalStateContextTypes } from "@/types/GlobalStateContextTypes";
import { ProductDefaultValue, ProductType } from "@/types/ProductType";
import { createContext, useContext, useState } from "react";


const Context = createContext<GlobalStateContextTypes | null>(null);

type Props = {
    children: React.ReactNode;
};

export default function GlobalStateContextProvider({ children }: Props) {

    const [products, setProducts] = useState<ProductType[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

    const [selectedProduct, setSelectedProduct] = useState<ProductType>(ProductDefaultValue)

    const [cartItems, setCartItems] = useState<ProductType[]>(() => {
        if (typeof localStorage !== 'undefined') {
            const storedProducts = localStorage.getItem('cartItems');
            return storedProducts ? JSON.parse(storedProducts) : [];
        }
    });

    const [totalPrice, setTotalPrice] = useState(0)

    const [filterStates, setFilterStates] = useState({
        sort: "",
        brand: [""],
        model: [""],
    })

    const getProducts = async () => {
        try {
            let res = await getProductsRequest()
            if (res) {
                setProducts(res.data)
                setFilteredProducts(res.data)
                setFilterStates((prev) => ({ ...prev, sort: "Old to new" }))
            }
        } catch (error) { }
    }

    const addToCart = (product: ProductType) => {
        const updatedCartItems = [...cartItems, product];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
        calcTotal(updatedCartItems)
    }

    const deleteFromCart = (product: ProductType) => {
        const index = cartItems.findIndex(item => item.id === product.id);
        if (index !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            setCartItems(updatedCartItems);
            calcTotal(updatedCartItems)
        }
    }

    const calcTotal = (cartItems: ProductType[]) => {
        if (cartItems) {
            const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
            setTotalPrice(totalPrice)
        }
    }



    const data: GlobalStateContextTypes = {
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        getProducts,
        selectedProduct,
        setSelectedProduct,
        cartItems,
        setCartItems,
        addToCart,
        deleteFromCart,
        totalPrice,
        setTotalPrice,
        calcTotal,
        filterStates,
        setFilterStates,
    };

    return <Context.Provider value={data}>{children}</Context.Provider>;
}

export const useGlobalStateContext = () => useContext(Context) as GlobalStateContextTypes;
