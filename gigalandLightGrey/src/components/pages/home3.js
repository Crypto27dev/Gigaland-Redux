import React from 'react';
import SliderCarouselRedux from '../components/SliderCarouselRedux';
import FeatureBox from '../components/FeatureBox';
import CarouselCollectionRedux from '../components/CarouselCollectionRedux';
import ColumnNewRedux from '../components/ColumnNewRedux';
import AuthorListRedux from '../components/AuthorListRedux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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
  .navbar .mainside a{
    background: #f32178;  
  }
  .navbar .mainside a:hover{
    box-shadow: 2px 2px 20px 0px #f32178;
  }
  .de_countdown{
    right: 10px;
    color: #fff;
    background: #f32178;
    border: solid 0px #f32178;
  }
  .author_list_pp{
    margin-left:0;
  }
  .author_list_pp i, .nft_coll_pp i{
    background: #f32178;
  }
  .nft__item_action span{
    color: #f32178;
  }
  #scroll-to-top div{
    background: #f32178;
  }
  .feature-box.style-3 i{
    background: #f32178;
  }
  .feature-box.f-boxed:hover{
    background: #7b0f38;
  }
  footer.footer-light #form_subscribe #btn-subscribe i, footer.footer-light .subfooter .social-icons span i{
    background: #f32178;
  }
  footer.footer-light{
    background: #331b69 !important;
  }
  footer.footer-light, footer .widget h5, footer.footer-light a{
    color: #fff;
  }
  footer.footer-light .subfooter{
    border-top: 1px solid rgba(255,255,255,.1);
  }
  .social-icons i, .btn-main{
    background: #f32178;
  }
  .btn-main:hover{
    box-shadow: 2px 2px 20px 0px #f32178;
  }
  .item-dropdown .dropdown a:hover{
    background: #f32178;
  }
`;

const homethree= () => (
  <div>
  <GlobalStyles />
      <section className="jumbotron no-bg no-bottom">
        <div className='container-fluid'>
          <div className='row'>
             <SliderCarouselRedux/>
          </div>
        </div>
      </section>

      <section className='container no-top'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
              <div className="spacer-double"></div>
              <h2 className='style-2'>New Items</h2>
          </div>
        </div>
       <ColumnNewRedux/>
      </div>
      </section>

      <section className='container'>
        <div className='row'>
          <div className='col-lg-12'>
              <h2 className='style-2'>Hot Collections</h2>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <CarouselCollectionRedux/>
            </div>
          </div>
        </div>
      </section>

      <section className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Top Sellers</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            <AuthorListRedux/>
          </div>
        </div>
      </section>

      <section className='container-fluid bg-gray'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Create and sell your NFTs</h2>
              <div className="small-border"></div>
            </div>
          </div>
        </div>
        <div className='container'>
          <FeatureBox/>
        </div>
      </section>

    <Footer />

  </div>
);
export default homethree;