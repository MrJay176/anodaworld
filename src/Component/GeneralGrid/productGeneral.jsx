import React from 'react';
import { Card, CardMedia, CardContent, Typography , CardActions,IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import './productGeneral.css';


const productGeneral = () => {
    return (
        <Card className='card-main-general'>
            <CardMedia className='card-media-general' image='' title='' />
            <CardContent className ="card-content-general">
                <div className='card-content-wrapper-general'>
                    <div className="card-content-closure-general">
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
            <CardActions disableSpacing className = "card-actions-general">
               <IconButton aria-label = "Add To Cart" className ="myIcon-general">
                  <AddShoppingCart/>
               </IconButton>
            </CardActions>
        </Card>
    )
}

export default productGeneral
