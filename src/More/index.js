import React,{useEffect,useState} from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

import axios from 'axios';

import { useLocation } from 'react-router-dom';

import Button from '@mui/material/Button';

import {useDispatch} from "react-redux";

const More = () => {

    const location = useLocation();
    const [fruit, setFruit] = useState(undefined);
    const [count, setCount] = useState(1);
    
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:1313/fruits/"+location.state)
        .then(res => {
            setFruit(res.data)
            console.log(res.data);
        }).catch(err=> {
            console.log(err);
        })
    },[])

    const handleClickA = ()=>{
        dispatch({type: "ADD",payload: {...fruit, count: count}})
    }

    return (
        <div className='gallery'>
            {!fruit?"Loading...":
                <div className='edit'>
                    <div className='rasm'>
                        <img src={fruit.image}></img>
                    </div>
                    <div className='matn'>
                        <h1>{fruit.title}</h1>
                        <p>{fruit.desc}</p>
                        <div className='btn'>
                            <Button onClick={()=>count>1?setCount(count-1):""} variant="contained" color="warning">
                                -
                            </Button>
                            <p>{count+"kg"}</p>
                            <Button onClick={()=>setCount(count+1)} variant="contained" color="success">
                                +
                            </Button>
                        </div>
                        <div className='add'>
                            <Button onClick={()=>{handleClickA(fruit.id)}} variant="contained" color="primary">
                                <Link style={{textDecoration:'none',color:'#fff'}} to="/">Add to Basket</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default More;