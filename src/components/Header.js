/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'
import { BsSearch } from "react-icons/bs"
import {AiOutlineShoppingCart, AiOutlineMenu} from "react-icons/ai"

const Header = () => {
    return (
        <header>
            {/* Top Nav */}
            <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
                <div className='mt-2 mr-6 flex items-center flex-grow sm:flex-grow-0'>
                    <Image
                        src="https://links.papareact.com/f90"
                        width={100}
                        height={32}
                        objectFit='contain'
                        className='cursor-pointer'
                    />
                </div>

                {/* Search */}
                <div className='hidden sm:flex items-center h-10 rounded-md flex-grow  bg-yellow-400 hover:bg-yellow-500'>
                    <input type='text' 
                    className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none'
                    placeholder='Search for products, brands and more'/>
                    <div className="h-12 p-4"> {/* Add a wrapping div */}
                        <BsSearch /> {/* Apply classes to the icon */}
                    </div>

                </div>

                {/* Right */}
                <div className='text-white flex items-center text-xs space-x-6 mx-6'>

                <div className='link'>
                <p>Hello, User</p>
                <p className='font-extrabold'>Account & Lists</p>
                </div>
                
                <div className='link' >
                <p>Returns</p>
                <p className='font-extrabold'> & Orders</p>
                </div>

                <div className='relative link flex items-center' >
                        <div className='relative h-12 w-12'>
                            <AiOutlineShoppingCart className="h-10 w-10" /> 
                            <span className='absolute top-0 right-0 md:right-0 h-4 w-4 bg-yellow-400 text-center text-xs rounded-full text-black font-bold'>0</span>
                        </div>
                        <p className='hidden md:inline font-extrabold md:text-sm'> Cart </p>
                    </div>
                
                </div>
            </div>

            {/* Bottom Nav */}
            <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
            <p className='link flex items-center'>
            <AiOutlineMenu className='h-6 mr-1'/> All
            </p>
            <p className='link'>
            Prime Video
            </p>
            <p className='link'>
            Amazon Business
            </p>
            <p className='link'>
            Today's Deals
            </p>
            <p className='link hidden lg:inline-flex'> Electronics
            </p>
            <p className='link hidden lg:inline-flex'> Food & Grocery
            </p>
            <p className='link hidden lg:inline-flex'> Prime 
            </p>
            <p className='link hidden lg:inline-flex'> Buy Again
            </p>
            <p className='link hidden lg:inline-flex'> Shoppers and Toolkit
            </p>
            <p className='link hidden lg:inline-flex'> Health and Personal Care
            </p>
            </div>
        </header>
    )
}

export default Header;
