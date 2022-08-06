import React from 'react';
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';

const Thanks = () => {

    const navigate = useNavigate()

    const handleClickH = () => {
        navigate('/')
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '10vh' }}>
            <h1>Thanks for Buy!</h1>
            <Button style={{ height: '10vh', width: '200px' }} onClick={() => { handleClickH() }} variant="contained" color="primary">
                <h1>OK</h1>
            </Button>
        </div>
    );
};

export default Thanks;