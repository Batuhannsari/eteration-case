import Template from '@/components/atoms/Template'
import { useGlobalStateContext } from '@/context/GlobalStateContext'
import React, { useEffect } from 'react'

type Iprops = {
}

const Products: React.FC<Iprops> = (props) => {

  const { products, setProducts, getProducts } = useGlobalStateContext()

  useEffect(() => {
    getProducts()

  }, [])

  console.log('products', products)

  return (
    <div>
      products
      <Template />
    </div>
  )

}

export default Products