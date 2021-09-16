import { Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import './productCom.css';
import { AddShoppingCart } from '@material-ui/icons';
import { Spring, animated } from 'react-spring';
import { Link } from 'react-router-dom';


const ProductCom = ({ product }) => {

    return (
        <Spring
            from={{opacity:0,marginTop:-500}}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ duration: 2000 }}
        >
            {props => (

                <Link to={{
                    pathname: "/display",
                    state: {
                        product:product
                    }
                }}>
                    <animated.div style={props}>
                        <div>
                            <Card className='card-main' variant="outlined">
                                <img src={product.image} alt="" className='card-media'/>
                                <CardContent className="card-content">
                                    <div className='card-content-wrapper'>
                                        <div className="card-content-closure">
                                            <h4 className="typoOne">
                                                {product.name}
                                            </h4>
                                            <h4 className="typoTwo">
                                                {product.price}
                                            </h4>
                                        </div>
                                        <h5 className="typoThree">{product.description}</h5>
                                    </div>
                                </CardContent>
                                <CardActions disableSpacing className="card-actions">
                                    <IconButton aria-label="Add To Cart" className="myIcon">
                                        <AddShoppingCart />
                                    </IconButton>
                                </CardActions>
                            </Card>

                        </div>
                    </animated.div>
                </Link>

            )}
        </Spring>

    )
}

export default ProductCom
