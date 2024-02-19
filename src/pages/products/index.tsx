import ProductCard from '@/components/atoms/ProductCard'
import CartSideBar from '@/components/organisms/CartSideBar'
import FilterSideBar from '@/components/organisms/FilterSideBar'
import MainTemplate from '@/components/templates/MainTemplate'
import { useGlobalStateContext } from '@/context/GlobalStateContext'
import { ProductType } from '@/types/ProductType'
import { Pagination } from '@mui/material'
import React, { useEffect } from 'react'
import styles from './index.module.scss'

type Iprops = {}

const Products: React.FC<Iprops> = (props) => {
  const { pagination, filterProducts, filterStates, filteredProducts, getProducts, setPagination } = useGlobalStateContext()
  const productsPerPage = 12;

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    filterProducts()

  }, [filterStates])

  useEffect(() => {
    if (filteredProducts && filteredProducts.length > 0) {
      const totalPageCount = Math.ceil(filteredProducts.length / productsPerPage);
      setPagination(prevState => ({
        ...prevState,
        count: totalPageCount
      }));
    }
  }, [filteredProducts]);

  const indexOfLastProduct = pagination.page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPagination((prev) => ({ ...prev, page: value }))
  };

  return (
    <MainTemplate>
      <div className={styles.container}>
        <div className={styles.filterSidebar}>
          <FilterSideBar />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.products}>
            {currentProducts && currentProducts.length > 0 &&
              currentProducts.map((v: ProductType, i: number) => {
                return <ProductCard data={v} key={i} />
              })}
          </div>
          {pagination.count > 1 && (
            <Pagination
              className={styles.pagination}
              count={pagination.count}
              page={pagination.page}
              variant="outlined"
              shape="rounded"
              onChange={handlePageChange}
            />
          )}
        </div>
        <div className={styles.cartSidebar}>
          <CartSideBar />
        </div>
      </div>
    </MainTemplate>
  )
}

export default Products
