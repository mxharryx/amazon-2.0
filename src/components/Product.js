import React, { useState } from 'react';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

const MIN_RATING = 1;
const MAX_RATING = 5;

const Product = ({ id, title, price, description, category, image }) => {

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const [hasPrime] = useState(Math.random() < 0.5)
    return (
        <div className='relative flex flex-col m-5 bg-white p-4 rounded-lg shadow-md z-30 p-10'>
            <p className='text-gray-500 absolute top-2 right-2 text-xs italic'>{category}</p>
            <div className='flex justify-center items-center'>
                <Image src={image} height={200} width={200} alt="" style={{ objectFit: "contain" }} />
            </div>
            <h4 className='text-gray-800 font-semibold text-md mb-1'>{title}</h4>
            <div className='flex items-center'>
                {Array(rating).fill().map((_, i) => (
                    <AiFillStar key={i} className='h-5 text-yellow-500' />
                ))}
            </div>
            <p className='text-gray-600 text-xs my-2 line-clamp-2'>{description}</p>
            <p className='font-semibold text-lg mb-5 text-green-600'>${price}</p>
            {hasPrime && (
                <div className='flex items-center mt-2'>
                    <p className='text-xs text-gray-500'>Free Next-Day Delivery</p>
                </div>
            )}
            <button className='mt-auto button'>Add to Basket</button>
        </div>

    )
}

export default Product