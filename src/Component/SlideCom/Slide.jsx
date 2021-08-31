import React from 'react';
import Slider from 'react-slick';
import './Slide.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Slide = () => {

    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        slideToShow: 3,
        cssEase: "Linear",
    };

    return (
    
            <div className="SliderContainer">
                <Slider {...settings}>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="card-image">
                                <img className="img" src="image/mum.jpg" alt="" />
                            </div> 
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="card-image">
                                <img className="img" src="image/mum.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>


    )
}

export default Slide
