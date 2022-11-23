import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );

      
  }
}

export default class Responsive extends Component {

  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: 300,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };

    return (
        <div className='nft-big'>
          <Slider {...settings}>
            <CustomSlide className='itm' index={1}>
              <div className="nft_pic">                            
                  <span>
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">The Era of 90's</span>
                          <span className="nft_pic_by">Gayle Hicks</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-6.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
             <div className="nft_pic">                            
                  <span>
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">live Arts</span>
                          <span className="nft_pic_by">Nicholas Daniels</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-5.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={3}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">Hot Lava</span>
                          <span className="nft_pic_by">Nicholas Daniels</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-3.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={4}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">Loop Donut</span>
                          <span className="nft_pic_by">Lori Hart</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/items/anim-5.webp" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={5}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">I Believe I Can Fly</span>
                          <span className="nft_pic_by">Fred Ryan</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/items/anim-8.webp" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

          </Slider>
        </div>
    );
  }
}
