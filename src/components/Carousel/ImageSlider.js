import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import React from "react";

const ImageSlider = ({ images }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 1800
  };
  return (
    <>
      <h6 className="card-title display-3 text-center fw-bolder mb-0">
        BIG SAVING DAYS
      </h6>
      <p className="card-text text-center lead fs-2">
        SUPER OFFERS ON TOP BRANDS
      </p>

      <div className="slider">
        <div className="imgslider">
          <Slider {...settings}>
            {images.map((item) => (
              <div key={item.id}>
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default ImageSlider;
