import './image-slider.css';

import React from 'react';

import { Carousel } from 'antd';

import { IMAGES } from './../../../data/images';

const ImageSlider = () => {
    return (
        <Carousel autoplay>
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