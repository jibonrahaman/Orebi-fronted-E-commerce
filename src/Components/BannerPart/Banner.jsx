import React from 'react'
import BannerGroup from '../../assets/BannerGroup.png'
import Slider from "react-slick";
import "../../App.css"
function Banner() {
  const settings = {
    dots: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
      <div class = "banner">
        <ul > {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <button> {`0${i + 1}`} </button>
    )
  };
  return (
    <div className='bg-banner bg-cover bg-no-repeat relative'>
      <Slider {...settings}>
      <img src={BannerGroup} alt={BannerGroup} />        
      <img src={BannerGroup} alt={BannerGroup} />    
      <img src={BannerGroup} alt={BannerGroup} />
      </Slider>
     
    </div>
  )
}

export default Banner