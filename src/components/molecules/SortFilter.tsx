import { useGlobalStateContext } from '@/context/GlobalStateContext'
import React from 'react'
import styles from './SortFilter.module.scss'
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'

type Iprops = {
}

const SortFilter: React.FC<Iprops> = (props) => {

    const { } = useGlobalStateContext()

    const options = [
        "Old to new",
        "New to old",
        "Price hight to low",
        "Price low to High",
    ]

    return (
        <>
            <div className={styles.layout}>
                <Typography className={styles.title}>
                    Sort By
                </Typography>

                <RadioGroup value={"Old to new"} onChange={() => { }} className={styles.radioGroup} >
                    {options.map((v, i) => (
                        <FormControlLabel
                            key={i}
                            value={v}
                            control={<Radio />}
                            label={v}
                        />
                    ))}
                </RadioGroup>


            </div>
        </>
    )

}

export default SortFilter