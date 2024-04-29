import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IconButton, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import badminton from "../assets/images/Home/badminton.jpg"
import cricket from "../assets/images/Home/cricket.jpg"
import jawalian from "../assets/images/Home/jawalian-throw.jpg"
import kabaddi from "../assets/images/Home/kabaddi.jpg"
import swimming from "../assets/images/Home/swimming.jpg"
import chess from "../assets/images/Home/chess.jpg"
import "../assets/styles/HomeStyles/homeStyle.css"

const SlideShow = () => {
    const images = [
        { url: swimming, text: "Welcome to Tuff Line - Your Ultimate Destination for Competitive Sports! \n\nAt Tuff Line, we believe that every player deserves the perfect match. Whether you're a seasoned athlete or just stepping onto the court for the first time, we've got you covered. Our platform revolutionizes the way you approach sports, offering tailored experiences that match your skill level, preferences, and ambitions." },
        { url: kabaddi, text: "Book Your Game: Once you've found your ideal opponent, booking a match is a breeze. Our intuitive booking system allows you to schedule matches at your convenience, ensuring that you never miss an opportunity to showcase your skills on the field." },
        { url: jawalian, text: "Organize Tournaments: Take your passion for sports to the next level by organizing tournaments through our platform. Whether you're a seasoned event planner or a casual enthusiast, our tools make it easy to create and manage competitive events that bring players together from around the globe." },
        { url: chess, text: "Explore Player Rankings and Statistics: Curious about how you stack up against the competition? Dive into our comprehensive player rankings and statistics to track your progress, identify areas for improvement, and stay motivated on your journey to the top." },
        { url: cricket, text: "Build Your Dream Team: Looking to elevate your game to new heights? Unlock the power of teamwork by assembling your own dream team. With our player marketplace, you can recruit top talent to form a formidable squad that dominates the competition." },
        { url: badminton, text: "Track Your Performance: Your journey to greatness starts here. Visit your personalized profile page to access your performance dashboard, where you can track your wins, losses, and other key metrics that shape your sporting legacy." }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // prevArrow: <PrevArrow />, // Use custom previous arrow component
        // nextArrow: <NextArrow />, // Use custom next arrow component
    };

    return (
        <div className="slideshow-container"> {/* Add a wrapper container */}
            <Slider {...settings}>
                {
                    images.map((sportsImage, i) => {
                        return (
                            <div key={i} className="image-slider">
                                <img className="slide-image" src={sportsImage.url} alt="sports" /> {/* Apply styles to constrain image size */}
                                <Typography paragraph className='image-text'>
                                   {sportsImage.text}
                                </Typography>
                            </div>
                        )
                    })
                }
            </Slider>

        </div>
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
