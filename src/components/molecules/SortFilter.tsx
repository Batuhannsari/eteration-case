import { useGlobalStateContext } from '@/context/GlobalStateContext';
import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import styles from './SortFilter.module.scss';

type Iprops = {};

const SortFilter: React.FC<Iprops> = (props) => {
    const { filterStates, setFilterStates, filteredProducts, sortProducts } = useGlobalStateContext();

    const options = [
        "Old to new",
        "New to old",
        "Price high to low",
        "Price low to high",
    ];

    useEffect(() => {
        sortProducts(filteredProducts);

    }, [filterStates.sort]);

    const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedSort = event.target.value;
        setFilterStates(prevState => ({
            ...prevState,
            sort: selectedSort,
        }));
    };



    return (
        <>
            <div className={styles.layout}>
                <Typography className={styles.title}>
                    Sort By
                </Typography>

                <RadioGroup
                    value={filterStates.sort}
                    onChange={handleSortChange}
                    className={styles.radioGroup}
                >
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
    );
};

export default SortFilter;
