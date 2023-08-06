import React from 'react';
import './Scrollcard.scss';
import { Link } from 'react-router-dom';
import { BsChevronLeft, BsChevronCompactRight } from 'react-icons/bs';
import { cardfirstimg, cardsecondimg, cardthirdimg, cardfourthimg, cardfifthimg, cardsixthimg, cardseventhimg, cardeightmg, cardninthimg, cardtenthimg, cardeleventhimg, cardtwelththimg } from '../../contact/image';
export default function Scrollcard(props) {
    const { value, heading, data } = props;
    console.log("Va", value, "he", heading, "da", data);
    const Image = [cardfirstimg, cardsecondimg, cardthirdimg, cardfourthimg, cardfifthimg, cardsixthimg, cardseventhimg, cardeightmg, cardninthimg, cardtenthimg, cardeleventhimg, cardtwelththimg];
    // Function to go to the previous image
    // const prevSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    // };

    // // Function to go to the next image
    // const nextSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // };
    return (
        <div className='scroll_container'>
            <h3>{heading}</h3>
            {/* <button className='prev_button but' onClick={prevSlide}><BsChevronLeft /></button>
            <button className='next_button but' onClick={nextSlide}><BsChevronCompactRight /></button> */}

            <div className="card">
                {data && data.map((data, index) => (
                    <Link to={`/product/${data.id}`} key={index}>
                        <img src={data.imgUrl[0]} />
                        <div style={{ display: value ? "block" : "none" }} className='card-offer'>
                            <span>Upto {data.discount}% off</span> Deal of the day
                            <p>Hyy this is des</p>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}
