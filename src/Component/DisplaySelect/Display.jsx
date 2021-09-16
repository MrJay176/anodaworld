import React from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring';
import { StyleTwoTone } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
import { animated, useSpring } from "react-spring";
import Nav from '../NavBar/Nav';
import { Grid } from '@material-ui/core';
import './Display.css';
import TopCardWidget from '../TopCardWidget/TopCard';
import Footer from '../Footer/footer';
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

const Display = () => {

    const classes = useStyles();

    const [style, set] = useSpring(() => ({
        transform: "perspective(700px) rotateY(0deg)"
    }));


    const productBags = [
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


    return (
        <div className="wrapper">
              <Nav/>
              <div className="cate" style ={{marginTop:"20px",width:"100%",display:"flex",alignItems:"center",paddingLeft:"20px",fontWeight:"bold" , justifyContent:"center"}}>
                  <h5 style={{color:"white" , fontSize:"30px" }}>Bags</h5>
              </div>
            <div className="horizontal-scroll">
                <ul className="ul-wrapper">
                    {productBags.map((e) => (
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
          
            <Link to="/admin">
            <div className="cate" style ={{marginTop:"20px",width:"100%",display:"flex",alignItems:"center",paddingLeft:"20px",fontWeight:"bold",justifyContent:"center"}}>
                
                  <h5 style={{color:"white" , fontSize:"20px" }}>More For You</h5>
                 
              </div>
              </Link>
            <div className={classes.GeneralGridCover}>
                {/* i will use grid for list */}
                <Grid container spacing={1} className={classes.grid}>
                    {productBags.map((e) => (
                        <Grid item key={e.id} xs={6} sm={3} md={3} lg={3}>
                             <ProductCom product={e} />
                        </Grid>
                    ))}

                </Grid>
            </div>
            <TopCardWidget/>
            <Footer/>
        </div>
    )
}

export default Display
