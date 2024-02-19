import CartSideBar from '@/components/organisms/CartSideBar'
import MainTemplate from '@/components/templates/MainTemplate'
import { useGlobalStateContext } from '@/context/GlobalStateContext'
import { ProductDefaultValue, ProductType } from '@/types/ProductType'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import styles from './index.module.scss'
import DetailCard from '@/components/atoms/DetailCard'
type Iprops = {
}

const Detail: React.FC<Iprops> = (props) => {

  const { setSelectedProduct, products, getProducts } = useGlobalStateContext()

  const router = useRouter()

  useEffect(() => {
    if (router && router.query && router.query.id && products && products.length) {
      setSelectedProduct(products.find((v: ProductType, i: number) => (v.id === router.query.id)) || ProductDefaultValue)
    }

  }, [router, products])

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <MainTemplate>

        <div className={styles.container}>

          <div className={styles.detailCard}>
            <DetailCard />
          </div>

          <div className={styles.cart}>
            <CartSideBar />
          </div>

        </div>

      </MainTemplate>
    </>
  )

}

export default Detail