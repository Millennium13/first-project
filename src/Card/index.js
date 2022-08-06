import React from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

const Card = () => {

    const reservoir = useSelector(state => state)

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleDel = (id) => {
        dispatch({ type: "DEL", payload: { id: id } })
    }

    const handleClickG = () => {
        navigate('/thanks')
    }

    return (
        <Container>
            {reservoir ? reservoir.fruits.map((val, index) => (
                <>
                    <div className='name' key={index}>
                        <img src={val.image}></img>
                        <div>
                            <h3 style={{ paddingLeft: '25px' }}>{val.title}</h3>
                            <p style={{ marginLeft: '25px' }}>{val.desc}</p>
                        </div>
                        <p style={{ paddingLeft: '25px', color: 'green', marginTop: '55px', fontSize: '25px' }}>{val.count + "kg"}</p>
                        <Button style={{ marginLeft: '25px', height: '50px', width: '75px', marginTop: '50px' }} onClick={() => { handleDel(val.id) }} variant="contained" color="error">
                            Delete
                        </Button>
                    </div>
                </>
            )) : "Loading..."}
            <div style={{ marginLeft: '400px', marginTop: '10vh', margin: '50px' }}>
                <Button style={{ width: '150px' }} onClick={() => { handleClickG() }} variant="contained" color="primary">
                    BUY
                </Button>
            </div>
        </Container>
    );
};

export default Card;