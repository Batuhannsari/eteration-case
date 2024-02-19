import { useGlobalStateContext } from '@/context/GlobalStateContext';
import { Search } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import { InputAdornment, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    const { filterStates, setFilterStates } = useGlobalStateContext();

    const router = useRouter()

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFilterStates((prev) => ({ ...prev, search: value }));

    };

    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Typography onClick={() => { router.push("/products") }} className={styles.logo}>Eteration</Typography>
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
