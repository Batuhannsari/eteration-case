import { useGlobalStateContext } from '@/context/GlobalStateContext'
import React from 'react'
import SortFilter from '../molecules/SortFilter'
import BrandFilter from '../molecules/BrandFilter'
import styles from './FilterSideBar.module.scss'
import ModelFilter from '../molecules/ModelFilter'

type Iprops = {
}

const FilterSideBar: React.FC<Iprops> = (props) => {

    const { } = useGlobalStateContext()

    return (
        <>
            <div className={styles.filters} >

                <SortFilter />

                <BrandFilter />

                <ModelFilter />

            </div>
        </>
    )

}

export default FilterSideBar