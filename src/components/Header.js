import React from 'react'

const Header = () => {
    return (
        <header className='mt-[50px]'>
            <div className='flex flex-col items-center font-Raleway text-[#444]' >
                <span className='absolute top-[15%] text-xl font-semibold'>
                    React
                </span>
                <span className='absolute top-[30%] text-8xl font-Raleway italic'>
                    Blog
                </span>
            </div>
            <img className='w-full h-[450px] mt-[80px] object-cover'
                src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Blog"
            />
        </header>
    )
}

export default Header;