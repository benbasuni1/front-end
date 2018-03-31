import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const ThreeTenets = props =>
    props.tenets.map( (knowledge, index) => {
        return (
            <ScrollAnimation 
                key={index}
                animateIn="bounceInRight" 
                animateOut="bounceInLeft"
                duration={3}
                animateOnce={true}
                >
            <div className="text">{knowledge.title}: <span>{knowledge.description}</span></div>
            </ScrollAnimation>
        )
    })

export default ThreeTenets;
