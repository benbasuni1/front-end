import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Content = props =>
    props.data.map((line, index) => {
        return (
        <ScrollAnimation
            key={index}
            animateIn="fadeIn"
            animateOut="fadeOut"
            animateOnce={true}
            duration={2}
        >
        <p className="text">{line}</p>
        </ScrollAnimation>
        )
    })

export default Content;
