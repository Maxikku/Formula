import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const AutocompleteSelect = ({ value, options, inputValue, onChange, onInputChange, onClose, loading }) => {

    return (
        <Autocomplete
            multiple
            value={value}
            onChange={onChange}
            inputValue={inputValue}
            onInputChange={onInputChange}
            onClose={onClose}
            options={options}
            loading={loading}
            renderInput={params => (
                <TextField {...params} label="Lets calculate something" variant="outlined" />
            )}
            freeSolo
        />
    );
};

export default AutocompleteSelect;
