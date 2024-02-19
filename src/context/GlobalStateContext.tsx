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
        search: ""
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

    const sortProducts = (filteredProducts: ProductType[]) => {
        const sortedProducts = [...filteredProducts];
        switch (filterStates.sort) {
            case "Old to new":
                sortedProducts.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
                break;
            case "New to old":
                sortedProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                break;
            case "Price high to low":
                sortedProducts.sort((a, b) => Number(b.price) - Number(a.price));
                break;
            case "Price low to high":
                sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));
                break;
            default:
                break;
        }
        setFilteredProducts(sortedProducts);
    };
    const filterProducts = () => {
        const { brand, model, search } = filterStates;
        let filtered = [...products];

        if (search) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (brand.length > 1) {
            filtered = filtered.filter(product => brand.includes(product.brand));
        }

        if (model.length > 1) {
            filtered = filtered.filter(product => model.includes(product.model));
        }
        setFilteredProducts(filtered);
        sortProducts(filtered);
    };

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
        sortProducts,
        filterProducts,
    };

    return <Context.Provider value={data}>{children}</Context.Provider>;
}

export const useGlobalStateContext = () => useContext(Context) as GlobalStateContextTypes;
