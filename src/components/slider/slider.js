import React from "react";
import Slider from "react-slick";
import styles from "./slider.module.css";
import { StaticImage } from "gatsby-plugin-image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderCarrousel (){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="container-carrousel">
      <Slider {...settings}>
        <div>
        <StaticImage src="../../images/image1.jpg" alt="carrousel" className="carrousel" />
        </div>
        <div>
        <StaticImage src="../../images/image2.jpg" alt="carrousel" className="carrousel" />
        </div>
        <div>
        <StaticImage src="../../images/image3.jpg" alt="carrousel" className="carrousel" />
        </div>
        <div>
        <StaticImage src="../../images/image4.jpg" alt="carrousel" className="carrousel" />
        </div>
        <div>
        <StaticImage src="../../images/image5.jpg" alt="carrousel" className="carrousel" />
        </div>

      </Slider>
    </div>
  );
}

export default SliderCarrousel;
