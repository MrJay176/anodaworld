import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring';
import { StyleTwoTone } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
import { animated, useSpring } from "react-spring";
import Nav from '../NavBar/Nav';
import { Grid } from '@material-ui/core';
import './Display.css';
import ProductCom  from '../Product/ProductCom';

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


const DisplayController = (props) => {

    const classes = useStyles();
    
    const [Myview , setView] = useState(DisplayWeb);

    const [style, set] = useSpring(() => ({
        transform: "perspective(700px) rotateY(0deg)"
    }));



    var array = [];
    var fromFive = [];


    if (props === "bags") {
        array = [
            { id: 1, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/bags/bag1.jpg" },
            { id: 2, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/bags/bag2.jpg" },
            { id: 3, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/bags/bag3.jpg" },
            { id: 4, name: 'MacBook', description: 'Apple MacBook', price: "$50", image: "image/bags/bag4.jpg" },
            { id: 5, name: 'MacBook', description: 'Apple MacBook', price: "$50", image: "image/bags/bag4.jpg" },
            { id: 6, name: 'MacBook', description: 'Apple MacBook', price: "$50", image: "image/bags/bag4.jpg" },
            { id: 7, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/Clothes/cloth1.jpg" },
            { id: 8, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/Clothes/cloth2.jpg" },
            { id: 9, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/Clothes/cloth3.jpg" },
            { id: 10, name: 'MacBook', description: 'Apple MacBook', price: "$50", image: "image/Clothes/cloth4.jpg" },
        ];
    } else if (props == "clothes") {

    } else if (props == "shoes") {


    } else if (props == "accessories") {

    }

    var horizontalList = null;
    if (array.length > 5) {
        for (var i = 4; i <= (array.length - 5); i++) {
            var item = array[i];
            //fromFive This Will Contain all element above the 5th element  
            fromFive.push(item)
        }
        //filter will filter out only the first five element
        filter(array);
    }

    const filter = async (arrayV) => {
        var filteredArray = [];
        const size = arrayV.length;
        if (size > 5) {
            for (var i = 0; i <= 5; i++) {
                var item = arrayV[i];
                filteredArray.push(item);
            }
            horizontalList = filteredArray;
            return filteredArray;
        }
    }
    const DisplayWeb =
        <div>

        </div>;

    const DisplayMobile =
        <div>
            <div className="horizontal-scroll">
                <ul className="ul-wrapper">
                    {horizontalList.map((e) => (
                        <li className="li-wrapper">
                            <Link to={{
                                pathname: "/display",
                                state: {
                                    product: e,
                                }
                            }}
                            >
                                <animated.div
                                    className="card-mobile"
                                    style={{
                                        ...style
                                    }}
                                >
                                    <img src={e.image} alt="" className="image-show" />
                                    <div className="bottom">
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="price-name">Adoba Wears</p>
                                            </div>
                                            <div className="price-bottom col-12 justify-content-end">
                                                <p className="price-txt">N22,000</p>
                                            </div>
                                        </div>
                                    </div>
                                </animated.div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={classes.GeneralGridCover}>
                {/* i will use grid for list */}
                <Grid container spacing={1} className={classes.grid}>
                    {fromFive.map((e) => (
                        <Grid item key={e.id} xs={6} sm={3} md={3} lg={3}>
                            <ProductCom product={e} />
                        </Grid>
                    ))}

                </Grid>

            </div>


        </div>;

    return { isMobile, customName, checkFromWindow, View, clamp };

}

export default DisplayController;