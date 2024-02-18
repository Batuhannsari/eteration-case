import { useGlobalStateContext } from '@/context/GlobalStateContext'
import React from 'react'
import styles from './BrandFilter.module.scss'
import { FormControl, FormControlLabel, InputAdornment, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { CheckBox, Search } from '@mui/icons-material'

type Iprops = {
}

const BrandFilter: React.FC<Iprops> = (props) => {

    const { } = useGlobalStateContext()

    const options = [
        "Apple",
        "Samsung",
        "Huawei",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
    ]

    return (
        <>
            <div className={styles.layout}>
                <Typography className={styles.title}>
                    Brands
                </Typography>

                <RadioGroup value={"Old to new"} onChange={() => { }} className={styles.radioContainer} >

                    <TextField
                        variant="outlined"
                        placeholder="Search"
                        onChange={(e) => { console.log('e', e.target.value) }}
                        className={styles.search}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start"  >
                                    <Search style={{ color: "#868CA5" }} />
                                </InputAdornment>
                            ),
                            sx: (theme) => ({
                                backgroundColor: "var(--filter-search-bg)",
                                "& fieldset": { border: 'none' }
                            }),
                        }}
                        size="small"
                        value={""}
                        fullWidth
                    />


                    <div className={styles.checkBoxGroup}>

                        {options.map((v, i) => (
                            <FormControlLabel
                                key={i}
                                value={v}
                                control={<CheckBox />}
                                label={v}
                                sx={{ width: "100%" }}
                            />
                        ))}

                    </div>

                </RadioGroup>

            </div>
        </>
    )

}

export default BrandFilter