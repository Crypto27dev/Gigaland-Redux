import React from 'react';
import Footer from '../components/footer';
import { Link } from '@reach/router';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

const logintwo= () => (
<div>
<GlobalStyles/>

  <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
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