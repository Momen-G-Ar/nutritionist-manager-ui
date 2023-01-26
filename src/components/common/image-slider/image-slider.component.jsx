import './image-slider.css';

import React from 'react';

import { Carousel } from 'antd';

import { IMAGES } from './../../../data/images';


/**
 * Image Slider to show some images only
 * @param {{
 *  effect:String;
 * }} props 
 * @returns 
 */

const ImageSlider = (props) => {
    return (
        <Carousel
            autoplay
            effect={props.effect}
            className={{className:'dots'}}
        >
            {
                IMAGES.map((image, i) => {
                    return (
                        <div>
                            <img
                                alt={'image' + i}
                                src={image}
                                className='imageInSlider'
                            />
                        </div>
                    );
                })
            }
        </Carousel>
    );
};

export default ImageSlider;