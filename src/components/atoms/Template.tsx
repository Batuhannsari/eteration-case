import { useGlobalStateContext } from '@/context/GlobalStateContext'
import React from 'react'

type Iprops = {
}

const Template: React.FC<Iprops> = (props) => {

    const { } = useGlobalStateContext()

    return (
        <div>
            Template
        </div>
    )

}

export default Template