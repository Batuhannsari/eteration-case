import { useGlobalStateContext } from '@/context/GlobalStateContext'
import React from 'react'
import BrandFilter from '../molecules/BrandFilter'
import ModelFilter from '../molecules/ModelFilter'
import SortFilter from '../molecules/SortFilter'
import styles from './FilterSideBar.module.scss'

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