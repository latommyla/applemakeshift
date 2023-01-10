import React from 'react'

import { Carousel } from 'flowbite-react'

import Image1 from '../../images/Carousel01.jpg'
import Image2 from '../../images/Carousel02.jpg'
import Image3 from '../../images/Carousel03.jpg'
import Image4 from '../../images/Carousel04.jpg'

export default function Carouselbottom() {
    return (
        <div className="mt-10 mb-10 m-auto max-w-5xl h-96">
            <Carousel slideInterval={5000} leftControl=" " rightControl=" ">
                <img
                    src={ Image1 }
                    alt="..."
                />
                <img
                    src={ Image2 }
                    alt="..."
                />
                <img
                    src={ Image3 }
                    alt="..."
                />
                <img
                    src={ Image4 }
                    alt="..."
                />
            </Carousel>
        </div>
    );
}