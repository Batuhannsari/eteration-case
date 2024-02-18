import { useGlobalStateContext } from '@/context/GlobalStateContext'
import React from 'react'
import styles from './CartSideBar.module.scss'
import { Button, Typography } from '@mui/material'
import CartItem from '../atoms/CartItem'

type Iprops = {
}

const CartSideBar: React.FC<Iprops> = (props) => {

    const { } = useGlobalStateContext()

    return (
        <>
            <div className={styles.container}>
                <div className={styles.items}>

                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />

                </div>

                <div className={styles.payment}>

                    <div className={styles.text}>
                        <Typography className={styles.title}>Total Price: </Typography>
                        <Typography className={styles.value}> 117 ₺ </Typography>
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