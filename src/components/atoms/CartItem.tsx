import { useGlobalStateContext } from '@/context/GlobalStateContext'
import React from 'react'
import styles from './CartItem.module.scss'
import { Button, Typography } from '@mui/material'

type Iprops = {
}

const CartItem: React.FC<Iprops> = (props) => {

    const { } = useGlobalStateContext()

    return (
        <>
            <div className={styles.container}>
                <div className={styles.description}>
                    <Typography className={styles.name}>Total Price: </Typography>
                    <Typography className={styles.price}>Total Price: </Typography>
                </div>

                <div className={styles.buttons}>
                    <Button
                        variant='contained'
                        className={styles.button}
                        onClick={() => {
                        }}
                    >
                        -
                    </Button>

                    <div className={styles.value}>
                        2
                    </div>

                    <Button
                        variant='contained'
                        className={styles.button}
                        onClick={() => {
                        }}
                    >
                        -
                    </Button>
                </div>
            </div>
        </>
    )

}

export default CartItem