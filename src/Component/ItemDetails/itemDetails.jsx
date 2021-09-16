import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './itemDetails.css';


const ItemDetails = () => {

    const location = useLocation();
    const { product } = location.state;

    console.log(product.image);

    return (
        <div className="itemAa">
            <div className="detailsa">
                <div className="big-imagea">
                    <img src={product.image} alt="" className="image" />
                </div>

                <div className="box">
                    <div className="row">
                        <h2>
                            The Women's Wear For Nature
                        </h2>
                        <span>{product.price}</span>
                    </div>
                    <div className="colors">

                    </div>
                    <a href ='https://wa.me/2348024485978' target="_blank" rel="noopener noreferrer" >
                        <button className="cart">Order Now</button>
                    </a>
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
