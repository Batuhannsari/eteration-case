import { useGlobalStateContext } from '@/context/GlobalStateContext'
import { ProductType } from '@/types/ProductType'
import { Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import styles from './ProductCard.module.scss'
import { useRouter } from 'next/router'

type Iprops = {
    data: ProductType
}

const ProductCard: React.FC<Iprops> = (props) => {

    const { addToCart } = useGlobalStateContext()

    const router = useRouter()

    return (
        <>
            <div className={styles.container} >
                <div className={styles.containerTop} onClick={() => { router.push(`/products/${props.data.id}`) }}>
                    <Image width={160} height={150} alt='' src={props.data.image} className={styles.image} />

                    <Typography className={styles.price}>{props.data.price + " ₺"}</Typography>

                    <Typography className={styles.title}>{props.data.name}</Typography>
                </div>

                <Button
                    variant='contained'
                    className={styles.button}
                    onClick={() => {
                        addToCart(props.data)
                    }}
                >
                    Add to Cart
                </Button>
            </div>
        </>
    )

}

export default ProductCard