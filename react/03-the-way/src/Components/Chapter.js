import React, { Component } from 'react';
import Transition from 'react-animate-on-scroll';

const Chapter = props => {
    return (
        <div>
            <Transition animateIn="flipInY" duration={3}>
                <h2 className="chp-title">{props.title}</h2>
            </Transition>
            {props.data.map((line, id) => {
                return (
                    <Transition
                        animateIn="fadeIn" 
                        duration={3}
                    >
                        <p className="line" key={id}>{line}</p>
                    </Transition>
                )
            })}
            <div className="clear"></div>
        </div>
    )
}

export default Chapter;