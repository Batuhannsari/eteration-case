import { useGlobalStateContext } from '@/context/GlobalStateContext'
import { ProductType } from '@/types/ProductType'
import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CartItem from '../atoms/CartItem'
import styles from './CartSideBar.module.scss'

type Iprops = {
}

const CartSideBar: React.FC<Iprops> = (props) => {

    const { cartItems, calcTotal, totalPrice } = useGlobalStateContext()


    const filterAndCountItems = (cartItems: ProductType[]) => {

        if (cartItems && cartItems.length > 0) {
            const itemCounts: { [key: string]: number } = {};

            cartItems.forEach(item => {
                const key = JSON.stringify(item);
                itemCounts[key] = (itemCounts[key] || 0) + 1;
            });

            const uniqueItems = Object.keys(itemCounts).map(key => ({
                item: JSON.parse(key) as ProductType,
                count: itemCounts[key]
            }));

            return uniqueItems;
        }
    };

    const uniqueItems = filterAndCountItems(cartItems);

    useEffect(() => {
        calcTotal(cartItems)

    }, [])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.items}>

                    {
                        uniqueItems && uniqueItems.length > 0 ?
                            uniqueItems.map((v: any, i: number) => {
                                return (
                                    <CartItem data={v.item} key={i} count={v.count} />
                                )
                            }) :
                            <Typography>
                                Sepette ürün yok.
                            </Typography>
                    }

                </div>

                <div className={styles.payment}>

                    <div className={styles.text}>
                        <Typography className={styles.title}>Total Price: </Typography>
                        <Typography className={styles.value}> {totalPrice + " ₺"} </Typography>
                    </div>

                    <Button
                        variant='contained'
                        className={styles.button}
                        onClick={() => {
                        }}
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    )

}

export default CartSideBar