import React, { useState, useEffect } from 'react';
import CheckScreenSize from './checkdisplay';




const FirstTop = () => {

    const { isMobile, customName, checkFromWindow, View , clamp } = CheckScreenSize(window);

    const[size , setSize ] = useState([window.innerHeight , window.innerWidth]);

    return (

        <div>
            {View}
        </div>
    )
}



export default FirstTop
