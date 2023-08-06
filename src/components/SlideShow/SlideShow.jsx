import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronCompactRight } from 'react-icons/bs';
import { firstimg, secondimg, thirdimg, fourthimg, fifthimg, sixthimg } from '../../contact/image';

export default function SlideShow() {
    const images = [firstimg, secondimg, thirdimg, fourthimg, fifthimg, sixthimg];
    const [currentIndex, setCurrentIndex] = useState(0);
    // Function to handle the automatic slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => {
            clearInterval(timer);
        };
    }, [images.length]);

    // Function to go to the previous image
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Function to go to the next image
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className='home_img_container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={images[currentIndex]} alt="offer" />
            <div className='img_button'>
                <button className='prev_button but' onClick={prevSlide}><BsChevronLeft /></button>
                <button className='prev_button2 but2' onClick={prevSlide}><BsChevronLeft /></button>
                <button className='next_button but' onClick={nextSlide}><BsChevronCompactRight /></button>
                <button className='next_button2 but2' onClick={nextSlide}><BsChevronCompactRight /></button>
            </div>
        </div>
    );
}
