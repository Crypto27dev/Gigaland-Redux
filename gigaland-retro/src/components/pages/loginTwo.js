import React from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #FAF6F1;
    border-bottom: solid 1px #ccc !important;
  }
`;

const logintwo= () => (
<div>
<GlobalStyles/>

  <section className='container'>
    <div className="row">
    <div className='spacer-double'></div>
    <div className="col-md-6 offset-md-3">

      <form name="contactForm" id='contact_form' className="form-border" action=''>
          <h3>Login to your account</h3>
                  <div className="field-set">
                      <label>Username</label>
                      <input type='text' name='name' id='name' className="form-control" placeholder=""/>
                  </div>


                  <div className="field-set">
                      <label>Password</label>
                      <input type='text' name='email' id='email' className="form-control" placeholder=""/>
                  </div>

          <div id='submit'>
              <input type='submit' id='send_message' value='Login' className="btn btn-main color-2"/>
              <div className="clearfix"></div>

              <div className="spacer-single"></div>

              <ul className="list s3">
                  <li>Or login with:</li>
                  <li><span>Facebook</span></li>
                  <li><span>Google</span></li>
                  <li><span>Instagram</span></li>
              </ul>
          </div>
      </form>

      </div>
    </div>
  </section>

  <Footer />
</div>

);
export default logintwo;