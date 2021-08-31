import React, { useState, useEffect } from 'react';
import './FirstTop.css';
import Products from '../Product/product';
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import { Spring } from 'react-spring';
import {Link} from 'react-router-dom';

function useWindowSize(){
   
}

const FirstTop = () => {
 
    const [isMobile, setIsMobile] = useState(false);
    
   // const [height , width] = useWindowSize();

    const[size , setSize ] = useState([window.innerHeight , window.innerWidth]);
   
     

    const [style, set] = useSpring(() => ({
        transform: "perspective(700px) rotateY(0deg)"
    }));

    const clamp = (value, clampAt = 30) => {
        if (value > 0) {
            return value > clampAt ? clampAt : value;
        } else {
            return value > -clampAt ? -clampAt : value;
        }
    };

    const setMobileIfMobile = () => {
        if (window.innerWidth <= 700) {
            setIsMobile(true)
        } else {
            setIsMobile(false);
        }
    };

    // window.addEventListener('resize', setMobileIfMobile);

    const bind = useScroll(event => {
        set({
            transform: `perspective(500px) rotateY(${event.scrolling ? clamp(event.delta[0]) : 0
                }deg)`
        })
    });


    const productBags = [
        { id: 1, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/bags/bag1.jpg" },
        { id: 1, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/bags/bag2.jpg" },
        { id: 1, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/bags/bag3.jpg" },
        { id: 2, name: 'MacBook', description: 'Apple MacBook', price: "$50", image: "image/bags/bag4.jpg" },
        { id: 2, name: 'MacBook', description: 'Apple MacBook', price: "$50", image: "image/bags/bag4.jpg" },
        { id: 2, name: 'MacBook', description: 'Apple MacBook', price: "$50", image: "image/bags/bag4.jpg" },
    ];

    const productClothes = [
        { id: 1, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/Clothes/cloth1.jpg" },
        { id: 1, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/Clothes/cloth2.jpg" },
        { id: 1, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/Clothes/cloth3.jpg" },
        { id: 2, name: 'MacBook', description: 'Apple MacBook', price: "$50", image: "image/Clothes/cloth4.jpg" },
    ];

    const custom_name = isMobile ? 'RightSection-Mobile' : 'RightSection';

    useEffect(() => {
        setMobileIfMobile();
        const handleResize = ()=>{
            setSize([window.innerHeight, window.innerWidth]);  
            setMobileIfMobile();     
        }
        window.addEventListener("resize",handleResize);
    }, [])

    console.log("This Is Custom Name " + custom_name);

    return (

        <Spring
            from={{ opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ duration: 20000 }}
        >
            {props => (
                <div style={props}>
                    <div className="FirstTop row">
                       
                            <div className={custom_name == "RightSection" ? "LeftSection col-12" : "LeftSection"}>
                                <div className="LeftSection" >
                                    <p className="buy">Buy Beautiful Dresses From Us</p>
                                    <p className="buy">Wear The Best Outfit That Suits You </p>
                                    <p className="buy">Never Run Out Of Choices</p>
                                </div>
                            </div>

                            <div className={custom_name == "RightSection" ? "RightSection col-12" : "RightSection-Mobile"}>
                                {custom_name == 'RightSection' ? <Products section={1} /> :
                                    <div className="RightSection-Mobile" {...bind()}>
                                        {productBags.map((e) => (
                                            
                                            <Link to = {{
                                                pathname:"/display",
                                                state:{
                                                   product:e
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
                                }

                            </div>

                    </div>

                </div>
            )}

        </Spring>


    )
}

export default FirstTop

