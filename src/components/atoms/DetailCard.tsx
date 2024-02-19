import { useGlobalStateContext } from '@/context/GlobalStateContext'
import React from 'react'
import styles from './DetailCard.module.scss'
import Image from 'next/image'
import { Button, Typography } from '@mui/material'

type Iprops = {
}

const DetailCard: React.FC<Iprops> = (props) => {

    const { selectedProduct, addToCart } = useGlobalStateContext()

    return (
        <>
            <div className={styles.test}>
                <Image width={160} height={500} alt='' src={selectedProduct.image} className={styles.image} />

                <div className={styles.content}>
                    <div className={styles.title}>
                        <Typography className={styles.top}>{selectedProduct.name}</Typography>
                        <Typography className={styles.bottom}>{selectedProduct.price + " ₺"}</Typography>
                    </div>
                    <div className={styles.detail}>
                        <Button
                            variant='contained'
                            className={styles.button}
                            onClick={() => {
                                addToCart(selectedProduct)
                            }}
                        >
                            Add to Cart
                        </Button>

                        <Typography className={styles.text}>{selectedProduct.description}</Typography>
                    </div>
                </div>
            </div>
        </>
    )

}

export default DetailCard