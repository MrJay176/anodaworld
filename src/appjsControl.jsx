import { useState } from "react";
import Slider from './Component/SlideCom/Slide';
import Right from './Component/SliderRight/Right';
import Left from './Component/SliderLeft/Left';
import './App.css';
import TopCard from "./Component/TopCardWidget/TopCard";


const AppJsxControls = (window) => {

    const [useEffectTriggered, setTriggered] = useState(false);

    const webView =
        <div className="Slidert">
            <div className="info-wrapper">
                <h1 className="header-text">Check Out Latest Products</h1>
                <h1 className="header-text">Purchase At Discount</h1>
            </div>
            <div className="item-wrapper row">
                <div className="col-12 col-lg-4">
                    <Left />
                </div>
                <div className="col-12 col-lg-4">
                    <Slider />
                </div>
                <div className="col-12 col-lg-4">
                    <Right />
                </div>
            </div>
        </div>

    const mobileView =
        <div className="SliderMobile">
            <h1 className="header-text">Check Out Latest Products</h1>
            <h1 className="header-text">Purchase At Discount</h1>
            <div className="padding-top" style ={{display:"flex", alignItems:"center" , justifyContent :"center"}}>
                <TopCard />
            </div>
            <Left />
            <Slider />
            <Right />
        </div>


    const [view, setView] = useState(webView);

    const checkFromWindow = () => {
        if (window.innerWidth <= 780) {
            setView(mobileView);
        } else {
            setView(webView);
        }
    }
    return { checkFromWindow, view };

}

export default AppJsxControls;