import { useGlobalStateContext } from '@/context/GlobalStateContext'
import React, { useEffect, useState } from 'react'
import styles from './CartItem.module.scss'
import { Button, Typography } from '@mui/material'
import { ProductType } from '@/types/ProductType'

type Iprops = {
    data: ProductType,
    count: number
}

const CartItem: React.FC<Iprops> = (props) => {

    const { addToCart, deleteFromCart } = useGlobalStateContext()

    const [first, setFirst] = useState(false)

    useEffect(() => {
        setFirst(true)

    }, [])


    return (
        <>
            {
                first &&
                <div className={styles.container}>
                    <div className={styles.description}>
                        <Typography className={styles.name}>Total Price: </Typography>
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
                </div>}
        </>
    )

}

export default CartItem