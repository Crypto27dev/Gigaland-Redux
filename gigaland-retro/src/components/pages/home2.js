import React from 'react';
import SliderMainParticle from '../components/SliderMainParticle';
import FeatureBox from '../components/FeatureBox';
import CarouselCollectionRedux from '../components/CarouselCollectionRedux';
import CarouselNewRedux from '../components/CarouselNewRedux';
import AuthorListRedux from '../components/AuthorListRedux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

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


const homeone= () => (
  <div>
  <GlobalStyles />
      <section className="jumbotron no-bg">
         <SliderMainParticle/>
      </section>

      <section className='container no-top no-bottom'>
        <div className="row">
            <div className="col-lg-2 col-sm-4 col-6 mb30">
                <span className="box-url">
                    <img src="./img/wallet/1.png" alt="" className="mb20"/>
                    <h4>Metamask</h4>
                </span>
            </div>

            <div className="col-lg-2 col-sm-4 col-6 mb30">
                <span className="box-url">
                    <img src="./img/wallet/2.png" alt="" className="mb20"/>
                    <h4>Bitski</h4>
                </span>
            </div>       

            <div className="col-lg-2 col-sm-4 col-6 mb30">
                <span className="box-url">
                    <img src="./img/wallet/3.png" alt="" className="mb20"/>
                    <h4>Fortmatic</h4>
                </span>
            </div>    

            <div className="col-lg-2 col-sm-4 col-6 mb30">
                <span className="box-url">
                    <img src="./img/wallet/4.png" alt="" className="mb20"/>
                    <h4>WalletConnect</h4>
                </span>
            </div>

            <div className="col-lg-2 col-sm-4 col-6 mb30">
                <span className="box-url">
                    <img src="./img/wallet/5.png" alt="" className="mb20"/>
                    <h4>Coinbase Wallet</h4>
                </span>
            </div>

            <div className="col-lg-2 col-sm-4 col-6 mb30">
                <span className="box-url">
                    <img src="./img/wallet/6.png" alt="" className="mb20"/>
                    <h4>Arkane</h4>
                </span>
            </div>                                       
        </div>
      </section>

      <section className='container no-top no-bottom'>
        <div className='row'>
          <div className="spacer-double"></div>
          <div className='col-lg-12 mb-2'>
              <h2>New Items</h2>
          </div>
        </div> 
        <CarouselNewRedux/>
      </section>

      <section className='container no-top no-bottom'>
        <div className='row'>
          <div className="spacer-double"></div>
          <div className='col-lg-12'>
              <h2>Top Sellers</h2>
          </div>
          <div className='col-lg-12'>
            <AuthorListRedux/>
          </div>
        </div>
      </section>

      <section className='container no-top no-bottom'>
        <div className='row'>
          <div className="spacer-double"></div>
          <div className='col-lg-12 mb-2'>
              <h2>Hot Collections</h2>
          </div>
            <div className='col-lg-12'>
              <CarouselCollectionRedux/>
            </div>
          </div>
      </section>

      <section className='container no-top'>
        <div className='row'>
            <div className="spacer-double"></div>
            <div className='col-lg-12 mb-3'>
              <h2>Create and Sell Now</h2>
            </div>
            <FeatureBox/>
        </div>
      </section>

    <Footer />

  </div>
);
export default homeone;