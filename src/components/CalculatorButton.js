import React from 'react';
import { Button } from '@mui/material';


const CalculatorButton = ({ onClick }) => {
    return (
        <Button
            sx={{
                marginTop: '10px',
                marginBottom: '10px',
            }}
            variant="contained"
            color="primary"
            onClick={onClick}
        >
            Calculate
        </Button>
    );
};

export default CalculatorButton;
