import { useGlobalStateContext } from '@/context/GlobalStateContext'
import { ProductType } from '@/types/ProductType'
import { Button, Typography } from '@mui/material'
import React from 'react'
import styles from './CartItem.module.scss'

type Iprops = {
    data: ProductType,
    count: number
}

const CartItem: React.FC<Iprops> = (props) => {

    const { addToCart, deleteFromCart } = useGlobalStateContext()

    return (
        <>
            <div className={styles.container}>
                <div className={styles.description}>
                    <Typography className={styles.name}>{props.data.name} </Typography>
                    <Typography className={styles.price}>{(Number(props.data.price) * props.count) + " ₺"} </Typography>
                </div>

                <div className={styles.buttons}>
                    <Button
                        variant='contained'
                        className={styles.button}
                        onClick={() => {
                            deleteFromCart(props.data)
                        }}
                    >
                        -
                    </Button>

                    <div className={styles.value}>
                        {props.count}
                    </div>

                    <Button
                        variant='contained'
                        className={styles.button}
                        onClick={() => {
                            addToCart(props.data)
                        }}
                    >
                        +
                    </Button>
                </div>
            </div>
        </>
    )

}

export default CartItem