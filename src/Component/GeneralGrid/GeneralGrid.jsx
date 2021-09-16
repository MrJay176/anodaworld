import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ProductCom from '../Product/ProductCom';
import './GeneralGrid.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    GeneralGridCover: {
        marginLeft: "1px",

    }

}))

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/bags/bag1.jpg" },
    { id: 2, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/bags/bag2.jpg" },
    { id: 3, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/bags/bag3.jpg" },
    { id: 4, name: 'MacBook', description: 'Apple MacBook', price: "$50", image: "image/bags/bag1.jpg" },
    { id: 5, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/Clothes/cloth1.jpg" },
    { id: 6, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/Clothes/cloth2.jpg" },
    { id: 7, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/bags/bag4.jpg" },
    { id: 8, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/bags/bag4.jpg" },

];

const GeneralGrid = () => {

    const classes = useStyles();

    return (

        <div className="GeneralGrid_Wrapper">
            <h1 className="header-text">Buy From Us Now</h1>
            <h1 className="header-text">Get The Best Prices Of All Our Products</h1>
            <div className={classes.GeneralGridCover}>
                <Grid container spacing={1} className={classes.grid}>
                    {products.map((e) =>(
                            <Grid item key={e.id} xs={6} sm={3} md={3} lg={3}>
                                <ProductCom product={e} />
                            </Grid>

                    ))}
                </Grid>
            </div>
            <Link to="/" className="button-wrapper-link">
                <div className="button-wrapper">
                    <h3 className="button-wrapper_text">View More Products</h3>
                </div>
            </Link>
        </div>

    )
}

export default GeneralGrid;
