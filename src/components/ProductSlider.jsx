import React from 'react'
import Slider from "react-slick";
export default function ProductSlider({content}) {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    arrows : false,
  };
  return (
    <div className="h-[600px] container relative">
      <Slider {...settings}>
        {content.map((item, idx) => (
          <div>
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center gap-8 bg-cover bg-center  rounded-2xl p-6 min-h-full"
              style={{  
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                minHeight: "600px",
              }}
              >
              <div className="flex-1 text-center md:text-left bg-opacity-70 p-4  text-white rounded-lg">
                <h2 className="text-3xl font-bold  mb-2">{item.title}</h2>
                <p className="text-lg text">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
