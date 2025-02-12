import React from 'react'
import './Delivery.css'
import icon1 from '../../../../assets/images/package-icon.png';
import icon2 from '../../../../assets/images/truck-icon.png';
import icon3 from '../../../../assets/images/bank.png';

const Delivery = () => {
    return (
        <div className="delivery">
            <div className="delivery__piece">
                <img src={icon1} alt="" />
                <span>Our postage charges include all customs and import duties</span>
            </div>
            <div className="delivery__piece">
                <img src={icon2} alt="" />
                <span>Our postage charges include all customs and import duties</span>
            </div>
            <div className="delivery__piece">
                <img src={icon3} alt="" />
                <span>Our postage charges include all customs and import duties</span>
            </div>
        </div>
    )
}

export default Delivery