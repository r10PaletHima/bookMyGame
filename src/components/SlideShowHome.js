import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import badminton from "../assets/images/Home/badminton.jpg"
import cricket from "../assets/images/Home/cricket.jpg"
import jawalian from "../assets/images/Home/jawalian-throw.jpg"
import kabaddi from "../assets/images/Home/kabaddi.jpg"
import swimming from "../assets/images/Home/swimming.jpg"
import chess from "../assets/images/Home/chess.jpg"


const SlideShow = () => {
    const images = [ swimming, kabaddi, jawalian, chess, cricket, badminton ]
        
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <PrevArrow />, // Use custom previous arrow component
        nextArrow: <NextArrow />, // Use custom next arrow component
    };

    return (
        <Slider {...settings}>
            {
                images.map((sportsImage, i) => {
                    return (
                        <div key={i}>
                            <img src={sportsImage} alt="sports"/>
                        </div>
                    )
                })
            }
        </Slider>
    );
};

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <IconButton className={className} onClick={onClick}>
            <ChevronLeft />
        </IconButton>
    );
};

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <IconButton className={className} onClick={onClick}>
            <ChevronRight />
        </IconButton>
    );
};

export { SlideShow };
