import { useGlobalStateContext } from '@/context/GlobalStateContext'
import React from 'react'
import styles from './Template.module.scss'

type Iprops = {
}

const Template: React.FC<Iprops> = (props) => {

    const { } = useGlobalStateContext()

    return (
        <>
            <div className={styles.test}>
                Template
            </div>
        </>
    )

}

export default Template