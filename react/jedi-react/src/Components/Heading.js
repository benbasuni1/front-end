import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Heading = props =>
    <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        animateOnce={true}
        duration={2}
    >
    <h1 className="heading">{props.title}</h1>
    </ScrollAnimation>

export default Heading;