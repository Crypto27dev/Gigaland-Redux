import React from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #FAF6F1;
    border-bottom: solid 1px #ccc !important;
  }
`;


const register= () => (
<div>
<GlobalStyles />


  <section className='container'>
    <div className="row">
    <div className='spacer-double'></div>
    <div className="col-md-8 offset-md-2">
      <h3>Don't have an account? Register now.</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

      <div className="spacer-10"></div>

      <form name="contactForm" id='contact_form' className="form-border" action='#'>

                        <div className="row">

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Name:</label>
                                    <input type='text' name='name' id='name' className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Email Address:</label>
                                    <input type='text' name='email' id='email' className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Choose a Username:</label>
                                    <input type='text' name='username' id='username' className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Phone:</label>
                                    <input type='text' name='phone' id='phone' className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Password:</label>
                                    <input type='text' name='password' id='password' className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Re-enter Password:</label>
                                    <input type='text' name='re-password' id='re-password' className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div id='submit' className="pull-left">
                                    <input type='submit' id='send_message' value='Register Now' className="btn btn-main color-2" />
                                </div>
                                
                                <div className="clearfix"></div>
                            </div>

                        </div>
                    </form>
      </div>

    </div>
  </section>

  <Footer />
</div>

);
export default register;