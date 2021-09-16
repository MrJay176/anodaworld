import React from 'react';
import './TopCard.css';
import { Link } from 'react-router-dom';


const TopCard = () => {
    return (
         <div className="TopCard">
        <div className="row">

            {/*First Container */}

            <div className="TopContainer col-lg-6 col-md-12">
                <Link to={{
                    pathname: "/category"
                }}>
                    <div className="Topcard1">
                        <img src=" " alt="" />
                        <h1 >Bags</h1>
                        <h4>Get This Nice And Exclusive Bags For Your Journey and Occational Use Cases</h4>
                    </div>
                </Link>
                <Link to={{
                    pathname: "/category"
                }}>
                    <div className="Topcard2">
                        <img src="" alt="" />
                        <h1>Shoes</h1>
                        <h4>Get This Shoes and Rock The On your top day to day trips</h4>
                    </div>
                </Link>
            </div>

            {/*First Container */}

            {/*Second Container */}
            <div className="TopContainer col-lg-6 col-md-12">
                <Link to={{
                    pathname: "/category"
                }}>
                    <div className="Topcard3">
                        <img src="" alt=""></img>
                        <h1>Clothes</h1>
                        <h4>We Have The bes clothes to suit your every needs and purposes</h4>
                    </div>
                </Link>
                <Link to={{
                    pathname: "/category"
                }}>
                    <div className="Topcard4">
                        <img src="" alt=""></img>
                        <h1>Asseccories</h1>
                        <h4>This Assesories will make your every outfit stand out from others</h4>
                    </div>
                </Link>
            </div>


            {/*Second Container */}

        </div>
        </div>
    )
}


export default TopCard
