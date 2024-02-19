import { useGlobalStateContext } from '@/context/GlobalStateContext';
import React, { useEffect } from 'react';
import styles from './SortFilter.module.scss';
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

type Iprops = {};

const SortFilter: React.FC<Iprops> = (props) => {
    const { filterStates, setFilterStates, products, setProducts } = useGlobalStateContext();

    const options = [
        "Old to new",
        "New to old",
        "Price high to low",
        "Price low to high",
    ];

    useEffect(() => {
        sortProducts();

    }, [filterStates.sort]);

    const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedSort = event.target.value;
        setFilterStates(prevState => ({
            ...prevState,
            sort: selectedSort,
        }));
    };

    const sortProducts = () => {
        const sortedProducts = [...products];
        switch (filterStates.sort) {
            case "Old to new":
                sortedProducts.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
                break;
            case "New to old":
                sortedProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                break;
            case "Price high to low":
                sortedProducts.sort((a, b) => Number(b.price) - Number(a.price));
                break;
            case "Price low to high":
                sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));
                break;
            default:
                break;
        }
        setProducts(sortedProducts);
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
