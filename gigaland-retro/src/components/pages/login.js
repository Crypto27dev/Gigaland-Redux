import React from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #FAF6F1;
    border-bottom: solid 1px #ccc !important;
  }
  .box-login p{
    color: #727272 !important;
  }
  .box-login{
    padding: 40px 50px;
  }
`;

const logintwo= () => (
<div>
<GlobalStyles/>

  <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/10.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row align-items-center px-0'>
          <div className="col-lg-4 offset-lg-4 m-auto px-0">
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
                  <ul className="list s3">
                      <li>Login with:</li>
                      <li><span >Facebook</span></li>
                      <li><span >Google</span></li>
                  </ul>
                  <div className="spacer-half"></div>
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