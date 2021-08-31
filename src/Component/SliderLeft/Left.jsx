import React from 'react';
import Button from '../Button/Button';
import './Left.css';
import { Link } from 'react-router-dom';

const Left = () => {
    return (
        <div className="Left">
            <div className="Left-wrapper">
                <img src="image/newsales.jpg" alt="new sales" className="newsales" />
                <Link to="/" className="button-wrapper-link">
                    <div className="button-wrapper">
                        <h3 className="button-wrapper_text">Check New Sales</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Left
