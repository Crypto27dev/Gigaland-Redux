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
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
        <div className='nft'>
          <Slider {...settings}>
            <CustomSlide className='itm' index={1}>
              <div className="nft_coll">
                  <div className="nft_wrap">
                      <span><img src="./img/collections/coll-1.jpg" className="lazy img-fluid" alt=""/></span>
                  </div>
                  <div className="nft_coll_pp">
                      <span onClick={()=> window.open("/home", "_self")}><img className="lazy" src="./img/author/author-1.jpg" alt=""/></span>
                      <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                      <span onClick={()=> window.open("/home", "_self")}><h4>Abstraction</h4></span>
                      <span>ERC-192</span>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
              <div className="nft_coll">
                  <div className="nft_wrap">
                      <span><img src="./img/collections/coll-2.jpg" className="lazy img-fluid" alt=""/></span>
                  </div>
                  <div className="nft_coll_pp">
                      <span onClick={()=> window.open("/#", "_self")}><img className="lazy" src="./img/author/author-2.jpg" alt=""/></span>
                      <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                      <span onClick={()=> window.open("/#", "_self")}><h4>Patternlicious</h4></span>
                      <span>ERC-61</span>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={3}>
              <div className="nft_coll">
                  <div className="nft_wrap">
                      <span><img src="./img/collections/coll-3.jpg" className="lazy img-fluid" alt=""/></span>
                  </div>
                  <div className="nft_coll_pp">
                      <span onClick={()=> window.open("/#", "_self")}><img className="lazy" src="./img/author/author-3.jpg" alt=""/></span>
                      <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                      <span onClick={()=> window.open("/#", "_self")}><h4>Skecthify</h4></span>
                      <span>ERC-126</span>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={4}>
              <div className="nft_coll">
                  <div className="nft_wrap">
                      <span><img src="./img/collections/coll-4.jpg" className="lazy img-fluid" alt=""/></span>
                  </div>
                  <div className="nft_coll_pp">
                      <span onClick={()=> window.open("/#", "_self")}><img className="lazy" src="./img/author/author-4.jpg" alt=""/></span>
                      <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                      <span onClick={()=> window.open("/#", "_self")}><h4>Cartoonism</h4></span>
                      <span>ERC-73</span>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={5}>
              <div className="nft_coll">
                  <div className="nft_wrap">
                      <span><img src="./img/collections/coll-5.jpg" className="lazy img-fluid" alt=""/></span>
                  </div>
                  <div className="nft_coll_pp">
                      <span onClick={()=> window.open("/#", "_self")}><img className="lazy" src="./img/author/author-5.jpg" alt=""/></span>
                      <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                      <span onClick={()=> window.open("/#", "_self")}><h4>Virtuland</h4></span>
                      <span>ERC-85</span>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={6}>
              <div className="nft_coll">
                  <div className="nft_wrap">
                      <span><img src="./img/collections/coll-6.jpg" className="lazy img-fluid" alt=""/></span>
                  </div>
                  <div className="nft_coll_pp">
                      <span onClick={()=> window.open("/#", "_self")}><img className="lazy" src="./img/author/author-6.jpg" alt=""/></span>
                      <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                      <span onClick={()=> window.open("/#", "_self")}><h4>Papercut</h4></span>
                      <span>ERC-42</span>
                  </div>
              </div>
            </CustomSlide>

          </Slider>
        </div>
    );
  }
}
