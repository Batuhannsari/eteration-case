import { useGlobalStateContext } from '@/context/GlobalStateContext'
import React, { ReactNode } from 'react'
import styles from './MainTemplate.module.scss'
import Header from '../organisms/Header'
import { Container } from '@mui/material'

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