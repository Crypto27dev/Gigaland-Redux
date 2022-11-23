import React from 'react';
import SliderCarouselSingleRedux from '../components/SliderCarouselSingleRedux';
import FeatureBox from '../components/FeatureBox';
import CarouselCollectionRedux from '../components/CarouselCollectionRedux';
import ColumnNewRedux from '../components/ColumnNewRedux';
import AuthorListRedux from '../components/AuthorListRedux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #212428;
    border-bottom: 0;
    box-shadow: 0 4px 20px 0 rgba(10,10,10, .8);
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: #fff;
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: none !important;
  }
  header#myHeader .logo .d-4{
    display: block !important;
  }
  .navbar .search #quick_search{
    border-radius: 20px;
  }
  .navbar .navbar-item .lines {
    border-bottom: 2px solid #ff343f;
  }
  .navbar .mainside a{
    text-align: center;
    color: #fff !important;
    background: #ff343f;
    border-radius: 30px;
  }
  .navbar .mainside a:hover {
    box-shadow: 2px 2px 20px 0 #ff343f;
    transition: all .3s ease;
  }
  .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
    background: #fff;
  }
  .item-dropdown{
    color: #fff !important;
    background: rgba(33, 36, 40, .9);
    box-shadow: 2px 2px 30px 0px rgba(20, 20, 20, 0.1);
  }
  .item-dropdown .dropdown a{
    color: #fff !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .item-dropdown .dropdown a:hover{
    color: #fff !important;
    background: #ff343f;
  }
  footer.footer-light .subfooter span img.d-1{
    display: none !important;
  }
  footer.footer-light .subfooter span img.d-4{
    display: inline-block !important;
  }
  .de_countdown{
    right: 10px;
    color: #fff;
  }
  .author_list_pp{
    margin-left:0;
  }
  footer.footer-light .subfooter{
    border-top: 1px solid rgba(255,255,255,.1);
  }
  #scroll-to-top div {
    background: #ff343f;
  }
  @media only screen and (max-width: 1199px) { 
    .navbar {
      background: #212428;
    }
  }
`;

const homethree= () => (
  <div className="greyscheme">
  <GlobalStyles />
      <section className="jumbotron no-bg" style={{backgroundImage: `url(${'./img/background/7.jpg'})`}}>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
                <div className="spacer-single"></div>
                <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                <h6 className=""><span className="text-uppercase color">Gigaland Market</span></h6>
                </Reveal>
                <div className="spacer-10"></div>
                <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
                <h1 className="">Create, sell or collect digital items.</h1>
                </Reveal>
                <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
                <p className=" lead">
                Unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable
                </p>
                </Reveal>
                <div className="spacer-10"></div>
                <Reveal className='onStep' keyframes={fadeInUp} delay={800} duration={900} triggerOnce>
                <span onClick={()=> window.open("/#", "_self")} className="btn-main lead">Explore</span>
                <div className="mb-sm-30"></div>
                </Reveal>
                <div className="spacer-double"></div>
            </div>
             <div className='col-lg-6 px-0'>
               <SliderCarouselSingleRedux/>
             </div>
          </div>
        </div>
      </section>

      <section className='container'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
              <h2 className='style-2'>New Items</h2>
          </div>
        </div>
       <ColumnNewRedux/>
      </div>
      </section>

      <section className='container no-top'>
        <div className='row'>
          <div className='col-lg-12'>
              <h2 className='style-2'>Hot Collections</h2>
          </div>
        </div>
        <div className='container no-top'>
          <div className='row'>
            <div className='col-lg-12 px-0'>
              <CarouselCollectionRedux/>
            </div>
          </div>
        </div>
      </section>

      <section className='container no-top'>
        <div className='row'>
          <div className='col-lg-12'>
              <h2 className='style-2'>Top Seller</h2>
          </div>
          <div className='col-lg-12'>
            <AuthorListRedux/>
          </div>
        </div>
      </section>

      <section className='container no-top'>
        <div className='row'>
          <div className='col-lg-12'>
              <h2 className='style-2'>Create and sell</h2>
          </div>
        </div>
        <div className='container px-0'>
          <FeatureBox/>
        </div>
      </section>

    <Footer />

  </div>
);
export default homethree;