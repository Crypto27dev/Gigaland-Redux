import React from 'react';
import Footer from '../components/footer';
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
        <div className='row align-items-center'>
          <div className="col-lg-5 text-light wow fadeInRight" data-wow-delay=".5s">
              <div className="spacer-10"></div>
              <h1>Create, sell or collect digital items.</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
          </div>
          <div className="col-lg-4 offset-lg-2 wow fadeIn" data-wow-delay=".5s">
            <div className="box-login">
              <h3 className="mb10">Sign In</h3>
              <p>Login using an existing account or create a new account <span>here</span>.</p>
              <form name="contactForm" id='contact_form' className="form-border" action='#'>

                  <div className="field-set">
                      <input type='text' name='email' id='email' className="form-control" placeholder="username"/>
                  </div>
                
                 <div className="field-set">
                      <input type='password' name='password' id='password' className="form-control" placeholder="password"/>
                  </div>
                
                <div className="field-set">
                  <input type='submit' id='send_message' value='Submit' className="btn btn-main btn-fullwidth color-2"/>
                </div>
                
                <div className="clearfix"></div>
                
                <div className="spacer-single"></div>
                  <ul className="list s3">
                      <li>Login with:</li>
                      <li><span >Facebook</span></li>
                      <li><span >Google</span></li>
                  </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</div>

);
export default logintwo;