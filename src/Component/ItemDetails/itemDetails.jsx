import React from 'react'
import {useLocation} from 'react-router-dom'
import './itemDetails.css';


const ItemDetails =() => {

    const location = useLocation();
    const {product} = location.state;

    return (
        <div className="itemA">
            <div className="details">
                <div className="big-image">
                    <img src={product.image} alt="" className = "image"/>
                </div>

                <div className="box">
                    <div className="row">
                        <h2>
                            The Women's Wear For Nature
                          </h2>
                        <span>$25 price</span>
                    </div>
                    <div className="colors">

                    </div>
                    <button className="cart">Order Now</button>
                    <p>This is the description of the item you need now</p>
                    <p>This is the content of the item you need now</p>
                    <div className="thumb">
                    </div>
                    
                </div>
            </div>

        </div>


    )
}

export default ItemDetails
