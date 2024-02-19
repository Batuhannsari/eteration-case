import ProductCard from '@/components/atoms/ProductCard'
import CartSideBar from '@/components/organisms/CartSideBar'
import FilterSideBar from '@/components/organisms/FilterSideBar'
import MainTemplate from '@/components/templates/MainTemplate'
import { useGlobalStateContext } from '@/context/GlobalStateContext'
import { ProductType } from '@/types/ProductType'
import React, { useEffect } from 'react'
import styles from './index.module.scss'

type Iprops = {
}

const Products: React.FC<Iprops> = (props) => {

  const { filterProducts, filterStates, filteredProducts, getProducts } = useGlobalStateContext()

  useEffect(() => {
    getProducts()

  }, [])

  useEffect(() => {
    filterProducts()

  }, [filterStates])

  return (
    <>
      <MainTemplate>

        <div className={styles.container}>

          <div className={styles.filterSidebar}>
            <FilterSideBar />
          </div>

          <div className={styles.mainContent}>

            {
              filteredProducts && filteredProducts.length > 0 &&
              filteredProducts.map((v: ProductType, i: number) => {
                return (
                  <ProductCard data={v} key={i} />
                )
              })
            }

          </div>

          <div className={styles.cartSidebar}>
            <CartSideBar />
          </div>
        </div>

      </MainTemplate>
    </>
  )

}

export default Products