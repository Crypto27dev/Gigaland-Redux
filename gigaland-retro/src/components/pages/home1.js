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
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar .search #quick_search{
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: none !important;
  }
  header#myHeader .logo .d-3{
    display: block !important;
  }
  footer.footer-light .subfooter span img.d-1{
    display: none !important;
  }
  footer.footer-light .subfooter span img.d-3{
    display: inline-block !important;
  }
  .de_countdown{
    right: 10px;
  }
  .author_list_pp{
    margin-left:0;
  }
  footer.footer-light .subfooter{
    border-top: 1px solid rgba(255,255,255,.1);
  }
`;

const homethree= () => (
  <div>
  <GlobalStyles />
      <section className="jumbotron no-bg">
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
                <Reveal className='onStep d-inline' keyframes={inline} delay={900} duration={1200} triggerOnce>
                <div className="row">
                    <div className="spacer-single"></div>
                    <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-4 mb30">
                                <div className="de_count text-left">
                                    <h3><span>94215</span></h3>
                                    <h5 className="id-color">Collectibles</h5>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-4 mb30">
                                <div className="de_count text-left">
                                    <h3><span>27</span>k</h3>
                                    <h5 className="id-color">Auctions</h5>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-4 mb30">
                                <div className="de_count text-left">
                                    <h3><span>4</span>k</h3>
                                    <h5 className="id-color">NFT Artist</h5>
                                </div>
                            </div>
                        </div>
                </div>
                </Reveal>
                <div className="spacer-double"></div>
            </div>
             <div className='col-lg-6 px-0'>
               <SliderCarouselSingleRedux/>
             </div>
          </div>
        </div>
      </section>

      <section className='container no-top'>
        <div className='container px-0'>
          <FeatureBox/>
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
          <div className='col-lg-12 text-center'>
              <h2 className='style-2'>Browse Category</h2>
              <div className="small-border"></div>
          </div>
        </div>
        <div className='container px-0'>
          <div className="row">
              <div className="col-lg-2 col-sm-4 col-6 mb30">
                  <span className="box-url">
                      <i className="fa fa-image"></i>
                      <h4>Art</h4>
                  </span>
              </div>

              <div className="col-lg-2 col-sm-4 col-6 mb30">
                  <span className="box-url">
                      <i className="fa fa-music"></i>
                      <h4>Music</h4>
                  </span>
              </div>       

              <div className="col-lg-2 col-sm-4 col-6 mb30">
                  <span className="box-url">
                      <i className="fa fa-search"></i>
                      <h4>Domain Names</h4>
                  </span>
              </div>    

              <div className="col-lg-2 col-sm-4 col-6 mb30">
                  <span className="box-url">
                      <i className="fa fa-globe"></i>
                      <h4>Virtual Worlds</h4>
                  </span>
              </div>

              <div className="col-lg-2 col-sm-4 col-6 mb30">
                  <span className="box-url">
                      <i className="fa fa-vcard"></i>
                      <h4>Trading Cards</h4>
                  </span>
              </div>

              <div className="col-lg-2 col-sm-4 col-6 mb30">
                  <span className="box-url">
                      <i className="fa fa-th"></i>
                      <h4>Collectibles</h4>
                  </span>
              </div>                                       
          </div>
        </div>
      </section>

    <Footer />

  </div>
);
export default homethree;