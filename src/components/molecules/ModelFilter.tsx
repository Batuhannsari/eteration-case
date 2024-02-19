import { useGlobalStateContext } from '@/context/GlobalStateContext';
import React, { useEffect, useState } from 'react';
import styles from './ModelFilter.module.scss';
import { Checkbox, FormControlLabel, InputAdornment, RadioGroup, TextField, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';

type IProps = {};

const ModelFilter: React.FC<IProps> = (props) => {
    const { products, filterStates, setFilterStates } = useGlobalStateContext();
    const [uniqueModels, setUniqueModels] = useState<string[]>([]);
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const filtered = uniqueModels.filter((option: string) =>
            option.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered);
    };

    const handleModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedModel = event.target.value;
        const updatedModels = filterStates.model.includes(selectedModel)
            ? filterStates.model.filter(model => model !== selectedModel)
            : [...filterStates.model, selectedModel];
        setFilterStates(prevState => ({
            ...prevState,
            model: updatedModels,
        }));
    };

    useEffect(() => {
        if (filterStates.brand.length === 1) {
            // Eğer brandlerden hiçbir şey seçili değilse, tüm modelleri al
            const allModels = products.map(product => product.model);
            const uniqueModelsSet = new Set<string>(allModels);
            const uniqueModelsArray = Array.from(uniqueModelsSet);
            setUniqueModels(uniqueModelsArray);
            setFilteredOptions(uniqueModelsArray);
        } else {
            // Brandlerle filtrelenmiş ürünlerin listesi
            const filteredProducts = products.filter(product => filterStates.brand.includes(product.brand));
            // Brandlerle filtrelenmiş ürünlerin modellerinin listesi
            const models = filteredProducts.map(product => product.model);
            // Tekrar eden modelleri kaldırarak benzersiz modellerin listesini oluştur
            const uniqueModelsSet = new Set<string>(models);
            const uniqueModelsArray = Array.from(uniqueModelsSet);
            setUniqueModels(uniqueModelsArray);
            setFilteredOptions(uniqueModelsArray);
        }
    }, [products, filterStates.brand]);

    console.log('filterStates', filterStates)

    return (
        <div className={styles.layout}>
            <Typography className={styles.title}>Model</Typography>

            <RadioGroup value={filterStates.model} className={styles.radioContainer} >

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
                            control={<Checkbox onChange={handleModelChange} />}
                            checked={filterStates.model.includes(v)}
                            label={v}
                            sx={{ width: '100%' }}
                        />
                    ))}

                </div>

            </RadioGroup>

        </div>
    );
};

export default ModelFilter;
