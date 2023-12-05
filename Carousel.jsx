import React, { useState } from 'react'
import { CarouselItem } from './CarouselItem'

export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const items = [
        {
            path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTfdboHAlOF4BctIJHV2wnW8SQAHnNjp8EYw&usqp=CAU',
            title: 'image 1',
            description: 'Morty',
        },
        {
            path: 'https://pbs.twimg.com/media/CytsXVQUsAA1D8N.jpg',
            title: 'image 2',
            description: 'Rick ',
        },
        {
            path: 'https://www.looper.com/img/gallery/the-wild-rick-and-morty-theory-that-explains-everything-about-jerry/intro-1638241022.jpg',
            title: 'image 3',
            description: 'Jerry',
        }
    ]
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
          newIndex = 0;
        } else if (newIndex >= items.length) {
          newIndex = items.length - 1;
        }
    
        setActiveIndex(newIndex);
      };
      return (
        <div className="carousel">
          <div
            className="inner"
            style={{ transform: `translate(-${activeIndex * 100}%)`}}
          >
            {items.map((item) => {
              return <CarouselItem item={item} width={"100%"} />;
            })}
          </div>
    
          <div className="carousel-buttons">
            <button
              className="button-arrow"
              onClick={() => {
                updateIndex(activeIndex - 1);
              }}
            >
              <span class="material-symbols-outlined"> {'<'} </span>{" "}
            </button>
            <div className="indicators">
              {items.map((item, index) => {
                return (
                  <button
                    className="indicator-buttons"
                    onClick={() => {
                      updateIndex(index);
                    }}
                  >
                    <span
                      className={`material-symbols-outlined ${
                        index === activeIndex
                          ? "indicator-symbol-active"
                          : "indicator-symbol"
                      }`}
                    >
                      o
                    </span>
                  </button>
                );
              })}
            </div>
            <button
              className="button-arrow"
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
            >
              <span class="material-symbols-outlined"> {'>'} </span>
            </button>
          </div>
        </div>
      );
}