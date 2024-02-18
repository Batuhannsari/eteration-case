import { useGlobalStateContext } from '@/context/GlobalStateContext'
import React from 'react'
import styles from './Header.module.scss'
import { InputAdornment, TextField, Typography } from '@mui/material'
import { Search } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
type Iprops = {
}

const Header: React.FC<Iprops> = (props) => {

    const { } = useGlobalStateContext()

    return (
        <>
            <div className={styles.layout}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <Typography
                            className={styles.logo}
                        >
                            Eteration
                        </Typography>

                        <TextField
                            variant="outlined"
                            placeholder="Search"
                            onChange={(e) => { }}
                            className={styles.search}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                ),
                                sx: (theme) => ({
                                    backgroundColor: theme.palette.background.paper,
                                }),
                            }}
                            size="small"
                            value={""}
                            fullWidth
                        />
                    </div>

                    <div className={styles.right}>
                        <div className={styles.item}>
                            <WorkIcon className={styles.icon} />

                            <Typography
                                className={styles.text}
                            >
                                117.000₺
                            </Typography>
                        </div>

                        <div className={styles.item}>
                            <PersonIcon className={styles.icon} />

                            <Typography
                                className={styles.text}
                            >
                                117.000₺
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Header