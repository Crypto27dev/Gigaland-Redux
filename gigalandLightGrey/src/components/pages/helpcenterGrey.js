import React from 'react';
import Footer from '../components/footer';
import { Link } from '@reach/router';
import { createGlobalStyle } from 'styled-components';

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

const logintwo= () => (
<div className="greyscheme">
<GlobalStyles/>

  <section className='jumbotron breadcumb no-bg'>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-8 offset-md-2 text-center">
              <h1>Help Center</h1>
              <div className="spacer-20"></div>
              <form className="row" id='form_sb' name="myForm">
              <div className="col text-center">
                  <input className="form-control" id='name_1' name='name_1' placeholder="type your question here" type='text'/> <button id="btn-submit"><i className="arrow_right"></i></button>
              </div>
              </form>
              <div className="spacer-20"></div>
              
              <p className="mt-0">eg. create item, create wallet.</p>
              
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container'>
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-4">
          <div className="feature-box f-boxed style-3 text-center">
              <div className="text">
                  <h4>Getting Started</h4>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.</p>
                  <Link to="" className="btn-main m-auto">Read more</Link>
              </div>
          </div>
      </div>    

      <div className="col-lg-4 col-md-6 mb-4">
          <div className="feature-box f-boxed style-3 text-center">
              <div className="text">
                  <h4>Buying</h4>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.</p>
                  <Link to="" className="btn-main m-auto">Read more</Link>
              </div>
          </div>
      </div>  

      <div className="col-lg-4 col-md-6 mb-4">
          <div className="feature-box f-boxed style-3 text-center">
              <div className="text">
                  <h4>Selling</h4>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.</p>
                  <Link to="" className="btn-main m-auto">Read more</Link>
              </div>
          </div>
      </div>  

      <div className="col-lg-4 col-md-6 mb-4">
          <div className="feature-box f-boxed style-3 text-center">
              <div className="text">
                  <h4>Creating</h4>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.</p>
                  <Link to="" className="btn-main m-auto">Read more</Link>
              </div>
          </div>
      </div>  

      <div className="col-lg-4 col-md-6 mb-4">
          <div className="feature-box f-boxed style-3 text-center">
              <div className="text">
                  <h4>Partners</h4>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.</p>
                  <Link to="" className="btn-main m-auto">Read more</Link>
              </div>
          </div>
      </div>  

      <div className="col-lg-4 col-md-6 mb-4">
          <div className="feature-box f-boxed style-3 text-center">
              <div className="text">
                  <h4>Developers</h4>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.</p>
                  <Link to="" className="btn-main m-auto">Read more</Link>
              </div>
          </div>
      </div>  
    </div>
  </section>

  <Footer />
</div>

);
export default logintwo;