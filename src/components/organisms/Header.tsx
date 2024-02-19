import React, { useState } from 'react';
import { useGlobalStateContext } from '@/context/GlobalStateContext';
import { InputAdornment, TextField, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    const { filterProducts, filterStates, setFilterStates, setFilteredProducts, products, sortProducts } = useGlobalStateContext();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFilterStates((prev) => ({ ...prev, search: value }));

    };

    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Typography className={styles.logo}>Eteration</Typography>
                    <TextField
                        variant="outlined"
                        placeholder="Search"
                        onChange={handleSearchChange}
                        className={styles.search}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                            sx: theme => ({
                                backgroundColor: theme.palette.background.paper,
                            }),
                        }}
                        size="small"
                        value={filterStates.search}
                        fullWidth
                    />
                </div>
                <div className={styles.right}>
                    <div className={styles.item}>
                        <WorkIcon className={styles.icon} />
                        <Typography className={styles.text}>117.000₺</Typography>
                    </div>
                    <div className={styles.item}>
                        <PersonIcon className={styles.icon} />
                        <Typography className={styles.text}>117.000₺</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
