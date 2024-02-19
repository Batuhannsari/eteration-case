import { useGlobalStateContext } from '@/context/GlobalStateContext';
import React, { useEffect, useState } from 'react';
import styles from './BrandFilter.module.scss';
import { Checkbox, FormControlLabel, InputAdornment, RadioGroup, TextField, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';

type IProps = {};

const BrandFilter: React.FC<IProps> = (props) => {
    const { products, filterStates, setFilterStates } = useGlobalStateContext();
    const [uniqueBrands, setUniqueBrands] = useState<string[]>([]);
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

    console.log('products', products)


    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const filtered = uniqueBrands.filter((option: string) =>
            option.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered);
    };

    const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedBrand = event.target.value;
        const updatedBrands = filterStates.brand.includes(selectedBrand)
            ? filterStates.brand.filter(brand => brand !== selectedBrand)
            : [...filterStates.brand, selectedBrand];
    
        // Seçilen markaya ait modelleri al
        const modelsToRemove = products
            .filter(product => product.brand === selectedBrand)
            .map(product => product.model);
    
        // Markaya ait modelleri seçili modellerden kaldır
        const updatedModels = filterStates.model.filter(model => !modelsToRemove.includes(model));
    
        setFilterStates(prevState => ({
            ...prevState,
            brand: updatedBrands,
            model: updatedModels,
        }));
    };
    

    useEffect(() => {
        const uniqueBrandsSet = new Set<string>();
        const repeatedBrands: string[] = [];
        products.forEach(product => {
            const { brand } = product;
            if (!uniqueBrandsSet.has(brand)) {
                uniqueBrandsSet.add(brand);
            } else if (!repeatedBrands.includes(brand)) {
                repeatedBrands.push(brand);
            }
        });
        const uniqueBrandsArray = Array.from(uniqueBrandsSet);
        setUniqueBrands(uniqueBrandsArray);
        setFilteredOptions(uniqueBrandsArray);
    }, [products]);

    return (
        <div className={styles.layout}>
            <Typography className={styles.title}>Brands</Typography>

            <RadioGroup value={filterStates.brand} className={styles.radioContainer} >

                <TextField
                    variant="outlined"
                    placeholder="Search"
                    onChange={handleSearch}
                    className={styles.search}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search style={{ color: '#868CA5' }} />
                            </InputAdornment>
                        ),
                        sx: (theme) => ({
                            backgroundColor: 'var(--filter-search-bg)',
                            '& fieldset': { border: 'none' },
                        }),
                    }}
                    size="small"
                    fullWidth
                />


                <div className={styles.checkBoxGroup}>

                    {filteredOptions.map((v, i) => (
                        <FormControlLabel
                            key={i}
                            value={v}
                            control={<Checkbox onChange={handleBrandChange} />}
                            checked={filterStates.brand.includes(v)}
                            label={v}
                            sx={{ width: '100%' }}
                        />
                    ))}

                </div>

            </RadioGroup>

        </div>
    );
};

export default BrandFilter;
