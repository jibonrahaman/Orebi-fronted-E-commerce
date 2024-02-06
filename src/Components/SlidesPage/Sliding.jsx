import React from 'react'
import Slides from './Slides'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Container from '../../Container'
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow';
import '../../App.css'
import Product1 from '../../assets/Product1.png'
import Product2 from '../../assets/Product2.png'
import Product3 from '../../assets/Product3.png'
import Product4 from '../../assets/Product4.png'
import Product5 from '../../assets/Product5.png'
import Product6 from '../../assets/Product6.png'
import Product7 from '../../assets/Product7.png'
import Product8 from '../../assets/Product8.png'
import Product9 from '../../assets/Product9.png'
import Product10 from '../../assets/Product10.png'
import Product11 from '../../assets/Product11.png'
import Product12 from '../../assets/Product12.png'

function Sliding() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        // centerPadding: "0",
        // centerMode: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <Container className="slides">
            <Slider {...settings} className='pb-10'>
                <div >
                    <Slides src={Product1} alt={Product1} pricing="$44:00" product="Product 1" />
                </div>
                <div  >
                    <Slides src={Product2} alt={Product2} pricing="$44:00" product="Product 2" />
                </div>
                <div>
                    <Slides src={Product3} alt={Product3} pricing="$44:00" product="Product 3" />
                </div>

                <div>
                    <Slides src={Product4} alt={Product4} pricing="$44:00" product="Product 4" />
                </div>
                <div>
                    <Slides src={Product5} alt={Product5} pricing="$44:00" product="Product 5" />
                </div>

                <div>
                    <Slides src={Product6} alt={Product6} pricing="$44:00" product="Product 6" />
                </div>

                <div>
                    <Slides src={Product7} alt={Product7} pricing="$44:00" product="Product 7" />
                </div>
                <div>
                    <Slides src={Product8} alt={Product8} pricing="$44:00" product="Product 8" />
                </div>
                <div>
                    <Slides src={Product9} alt={Product9} pricing="$44:00" product="Product 9" />
                </div>
                <div>
                    <Slides src={Product10} alt={Product10} pricing="$44:00" product="Product 10" />
                </div>
                <div>
                    <Slides src={Product11} alt={Product11} pricing="$44:00" product="Product 11" />
                </div>
                <div>
                    <Slides src={Product12} alt={Product12} pricing="$44:00" product="Product 12" />
                </div>
            </Slider>
        </Container>
    )
}

export default Sliding