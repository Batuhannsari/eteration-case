import BrandFilter from '@/components/molecules/BrandFilter'
import SortFilter from '@/components/molecules/SortFilter'
import Header from '@/components/organisms/Header'
import MainTemplate from '@/components/templates/MainTemplate'
import { useGlobalStateContext } from '@/context/GlobalStateContext'
import React, { useEffect } from 'react'
import styles from './index.module.scss'
import FilterSideBar from '@/components/organisms/FilterSideBar'
import ProductCard from '@/components/atoms/ProductCard'
import { ProductType } from '@/types/ProductType'
import CartSideBar from '@/components/organisms/CartSideBar'

type Iprops = {
}

const Products: React.FC<Iprops> = (props) => {

  const { filterProducts, filterStates, products, filteredProducts, setProducts, getProducts } = useGlobalStateContext()

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