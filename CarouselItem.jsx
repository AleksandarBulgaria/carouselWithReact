import React from 'react'

export const CarouselItem = ({item}) => {
    return (
        <div className='carousel-item'>
            <div></div>
            <img className="carousel-img" alt='' src={item.path} />
            <div className="carousel-item-text">{item.description}</div>
        </div>
    )
}