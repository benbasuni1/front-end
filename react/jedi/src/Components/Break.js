import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import JediOrder from '../jedi-order.png';

const Break = props =>
    <ScrollAnimation
        animateIn="flipInY" 
        animateOut="flipOutY" 
        animateOnce={true}
        delay={500}
        duration={2}
    >
        <img className="img" width="100px" height="100px" src={JediOrder} alt="jedi-order"/>
    </ScrollAnimation>

export default Break;
