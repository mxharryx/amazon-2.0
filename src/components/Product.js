import React, { useState } from 'react';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

const MIN_RATING = 1;
const MAX_RATING = 5;

const Product = ({ id, title, price, description, category, image }) => {

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    return (
        <div>
            <p>{category}</p>
            <Image src={image} height={200} width={200} objectFit='contain' />
            <h4>{title}</h4>
            <div className='flex'>
                {Array(rating).fill().map((_, i) => (
                    <AiFillStar key={i} className='h-5 text-yellow-500' />
                ))}
            </div>
        </div>
    )
}

export default Product