import React from 'react';
import SliderCarouselRedux from '../components/SliderCarouselRedux';
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

      <section className='container no-bottom'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
              <h2 className='style-2'>Hot Collections</h2>
              <div className="small-border"></div>
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

      <section className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
              <h2 className='style-2'>New Items</h2>
              <div className="small-border"></div>
          </div>
        </div>
       <CarouselNewRedux/>
      </section>

      <section className='container no-top'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
              <h2 className='style-2'>Top Seller</h2>
              <div className="small-border"></div>
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