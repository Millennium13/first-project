import React from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit"><Link style={{color:'white',textDecoration:'none'}} to="/">Home</Link></Button>
          </Typography>
          <Button color="inherit"><Link style={{color:'white',textDecoration:'none'}} to="/card"><ShoppingCartIcon/></Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default App;