import React from 'react'
import Slider from "react-slick";
export default function ProductSlider() {
  const carouselContent = [
    {
      image: "/images/banner-1.jpg",
      title: "Explore the Latest Gadgets",
      subtitle: "From smartphones to smart homes"
    },
    {
      image: "/images/banner-2.jpg",
      title: "Unbeatable Deals",
      subtitle: "Discounts up to 50% on top tech"
    },
    {
      image: "/images/banner-3.jpg",
      title: "Smart Home Essentials",
      subtitle: "Make your home smarter with our picks"
    }
  ];
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
    <div className="h-[600px] container">
      <Slider {...settings}>
        {carouselContent.map((item, idx) => (
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
