import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'; 
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/IKEA.png';
import usestyles from './Styles';

const Navbar = ({ totalItems }) => {
    const classes = usestyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h4" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="80px" className={classes.image} />
                        BILLY Series
                    </Typography>
                    <Typography variant="h6" className={classes.title} color="inherit">                   
                           <h5>Products</h5>                        
                    </Typography>
                    <Typography variant="h6" className={classes.title} color="inherit">                   
                           <h5>Rooms</h5>                        
                    </Typography>
                    <Typography variant="h6" className={classes.title} color="inherit">                   
                           <h5>Deals</h5>                        
                    </Typography>
                    <Typography  className={classes.searc} color="inherit">
                        <input type="text" placeholder="What are you looking for?"></input>
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                    <div className={classes.button} >
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                        </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
