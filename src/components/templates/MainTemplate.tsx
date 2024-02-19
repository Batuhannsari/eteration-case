import { useGlobalStateContext } from '@/context/GlobalStateContext'
import { Container } from '@mui/material'
import React, { ReactNode } from 'react'
import Header from '../organisms/Header'
import styles from './MainTemplate.module.scss'

type Iprops = {
    children: ReactNode
}

const MainTemplate: React.FC<Iprops> = (props) => {

    const { } = useGlobalStateContext()

    return (
        <>
            <Header />
            <Container className={styles.container}>
                {props.children}
            </Container>
        </>
    )

}

export default MainTemplate