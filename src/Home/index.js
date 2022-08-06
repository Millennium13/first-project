import React, {useState,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import "./style.css";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";

const Home = () => {

    const navigate = useNavigate()

    const [data,setData] = useState([])

    useEffect(() =>{
        axios.get("http://localhost:1313/fruits")
        .then(res=> {
            setData(res.data);
        }) .catch(e=>console.log(e));
    },[])

    const handleClick = (id)=>{
        navigate('/more', {state: id})
    }

    return (
        <Container maxWidth="ms">
            <div className='meva'>
                {data.map((val,index)=>{
                    return(
                        <Card className='mevalar' key={index} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={val.image}
                                alt="green iguana"
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {val.id}.
                                    {val.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {val.desc}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={()=>{handleClick(val.id)}} size="large" color="primary" variant='contained' fullWidth={true}>
                                    More
                                </Button>
                            </CardActions>
                        </Card>    
                    )
                })}
            </div>
        </Container>
    );
};

export default Home;