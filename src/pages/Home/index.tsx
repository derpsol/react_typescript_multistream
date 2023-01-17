import React, { useRef, Component } from "react";
import Box from "@mui/material/Box";
import Header from "../../components/Header";
import Slider from "react-slick";
import { Button } from "@mui/material";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";

export default function Home() {
  const sliderRef = useRef<Slider | null>(null);
  const sliderRefdown = useRef<Slider | null>(null);

  const settings = {
    pauseOnHover: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    easing: 'linear',
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsdown = {
    pauseOnHover: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 3,
  };

  const datas = [
    './images/disney.jpg',
    './images/hbomax.jpg',
    './images/hulu.jpg',
    './images/netflix.jpg'
  ];
  return (
    <React.Fragment>
      <Header />
      <Box sx={{ backgroundColor: '#131313', pt: 4, height: '100vh' }}>
        <Box sx={{ position: 'relative' }}>
          <Slider
            ref={sliderRef}
            {...settings}
          >
            {datas.map((data, index) => {
              return (
                <Box key={index}>
                  <Box
                    component='img'
                    src={data}
                    width='80%'
                    sx={{
                      mx: 'auto',
                      borderRadius: '20px',
                      boxShadow: '4px 2px 4px #b190ff',
                      border: '2px solid #b190ff',
                    }}
                  />
                </Box>
              )
            })}
          </Slider>
          <Slider
            ref={sliderRefdown}
            {...settingsdown}
          >
            {datas.map((data, index) => {
              return (
                <Box key={index}>
                  <Box
                    component='img'
                    src={data}
                    width='70%'
                    sx={{
                      mx: 'auto',
                      borderRadius: '20px',
                      boxShadow: '4px 2px 4px #b190ff',
                      border: '2px solid #b190ff',
                      mt: 4,
                      mb: 4,
                    }}
                  />
                </Box>
              )
            })}
          </Slider>
          <Button
            sx={{
              color: '#aaa',
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%'
            }}
            onClick={() => { sliderRef.current?.slickPrev() || sliderRefdown.current?.slickPrev() }}
          >
            <FaChevronLeft size='30px' />
          </Button>
          <Button
            sx={{
              color: '#aaa',
              position: 'absolute',
              right: 0,
              top: 0,
              height: '100%',
            }}
            onClick={() => { sliderRef.current?.slickNext() || sliderRefdown.current?.slickNext() }}
          >
            <FaChevronRight size='30px' />
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
