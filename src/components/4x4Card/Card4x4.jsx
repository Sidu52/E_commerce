import React from 'react'
import "./Card4x4.scss";
import { Link } from 'react-router-dom';

export default function Card4x4(props) {
    const { heading, data } = props;
    var items = data;
    if (data) {
        // Shuffle the data array randomly
        const shuffledData = data.sort(() => Math.random() - 0.5);
        // Take the first 4 items from the shuffled array
        items = shuffledData.slice(0, 4);
    }
    var i = 0;

    return (
        <div className='card-4x4'>
            <h3>{heading}</h3>
            <div className='card-item'>
                {items && i <= 4 && items.map((data, index) => (
                    <Link to={`/product/${data.id}`} className='cart_item_link' key={index} >
                        <img src={data.imgUrl[0]} />
                        <p className='title'>{data.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

