import React, { useState, useEffect } from 'react';
import { animated, useSpring } from "react-spring";
import Products from '../Product/product';
import { useScroll } from "react-use-gesture";
import SecondProduct from './secondProduct';
import './SecondTop.css';
import { Link } from 'react-router-dom';

const CheckScreenSize = (window) => {

    const [isMobile, setIsMobile] = useState(false);
    const [customName, setCustomName] = useState('LeftSection-Second');

    const[size , setSize ] = useState([window.innerHeight , window.innerWidth]);

    const setMobileIfMobile = () => {
        if (window.innerWidth <= 700) {
            setIsMobile(true)
            setView(Mobile);
        } else {
            setIsMobile(false);
            setView(Webview);
        }
    };

  
    useEffect(() => {
        setMobileIfMobile();
        const handleResize = ()=>{
            setSize([window.innerHeight, window.innerWidth]);  
            setMobileIfMobile();     
        }
        window.addEventListener("resize",handleResize);
    }, [])

        


    // const Webview = <Products section={2} />;

    const productBags = [
        { id: 1, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/bags/bag1.jpg" },
        { id: 1, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/bags/bag2.jpg" },
        { id: 1, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/bags/bag3.jpg" },
        { id: 2, name: 'MacBook', description: 'Apple MacBook', price: "$50", image: "image/bags/bag4.jpg" },
        { id: 2, name: 'MacBook', description: 'Apple MacBook', price: "$50", image: "image/bags/bag4.jpg" },
        { id: 2, name: 'MacBook', description: 'Apple MacBook', price: "$50", image: "image/bags/bag4.jpg" },
    ];

    const [style, set] = useSpring(() => ({
        transform: "perspective(700px) rotateY(0deg)"
    }));

    const bind = useScroll(event => {
        set({
            transform: `perspective(500px) rotateY(${event.scrolling ? clamp(event.delta[0]) : 0
                }deg)`
        })
    });


    const Webview =
        <div className="webSecondCorrect row">

            <div className="webGrid col-md-12 col-lg-6 col-xs-12 col-sm-12 pl-md-20 pl-lg-30">

                <SecondProduct />
            </div>

            <div className="text col-md-12 col-lg-6 col-xs-12 col-sm-12 pl-md-20 pl-lg-30">
                <h2 className="text-p">Wear The Best Outfit That Suits You</h2>
            </div>

        </div>

    const Mobile = <div className="SecondTop">

        <div className="RightSection-Second">
            <p className="buy">Buy Beautiful Dresses From Us</p>
            <p className="buy">Wear The Best Outfit That Suits You </p>
            <p className="buy">Never Run Out Of Choices</p>
        </div>


        <div className="LeftSection-Mobile" {...bind()}>
            {productBags.map((e) => (
                <Link to={{
                    pathname: "/display",
                    state: {
                        product: e
                    }
                }}>
                    <animated.div
                        key={e.image}
                        className="card-mobile"
                        style={{
                            ...style,
                        }}
                    >
                        <img src={e.image} alt="" className='image-show' />
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


            ))}
        </div>
    </div>


    const [View, setView] = useState(Webview);

    const clamp = (value, clampAt = 30) => {
        if (value > 0) {
            return value > clampAt ? clampAt : value;
        } else {
            return value > -clampAt ? -clampAt : value;
        }
    };



    const checkFromWindow = () => {
        if (window.innerWidth <= 700) {
            //This is mobileView
            setIsMobile(true)
            setCustomName('LeftSection-Mobile-Second')
            setView(Mobile);
        } else {
            //This is WebView
            setIsMobile(false);
            setCustomName('LeftSection-Second')
            setView(Webview);
        }

    }


    return { isMobile, customName, checkFromWindow, View, clamp };

}

export default CheckScreenSize;