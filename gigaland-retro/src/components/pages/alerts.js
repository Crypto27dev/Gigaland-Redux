import React from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #FAF6F1;
  }
`;

const accordion= () => (
<div>
<GlobalStyles/>

  <section className='jumbotron breadcumb no-bg' >
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row m-10-hor'>
          <div className='col-12'>
            <h1 className='text-center'>Alerts</h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container'>
    <div className='row'>

      <div className="col-md-8 offset-md-2"> 
        <h3>Simple Alert</h3>           
          <div className="alert alert-primary" role="alert">
            A simple primary alert—check it out!
          </div>
          <div className="alert alert-secondary" role="alert">
            A simple secondary alert—check it out!
          </div>
          <div className="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div>
          <div className="alert alert-danger" role="alert">
            A simple danger alert—check it out!
          </div>
          <div className="alert alert-warning" role="alert">
            A simple warning alert—check it out!
          </div>
          <div className="alert alert-info" role="alert">
            A simple info alert—check it out!
          </div>
          <div className="alert alert-light" role="alert">
            A simple light alert—check it out!
          </div>
          <div className="alert alert-dark" role="alert">
            A simple dark alert—check it out!
          </div>

          <div className="spacer-single"></div>
          <h3>Additional Content</h3>
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr/>
            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          </div>

          <div className="spacer-single"></div>
          <h3>With Icons</h3>

          <div className="alert alert-primary d-flex align-items-center" role="alert">
            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlinkHref="#info-fill"/></svg>
            <div>
              An example alert with an icon
            </div>
          </div>
          <div className="alert alert-success d-flex align-items-center" role="alert">
            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlinkHref="#check-circle-fill"/></svg>
            <div>
              An example success alert with an icon
            </div>
          </div>
          <div className="alert alert-warning d-flex align-items-center" role="alert">
            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlinkHref="#exclamation-triangle-fill"/></svg>
            <div>
              An example warning alert with an icon
            </div>
          </div>
          <div className="alert alert-danger d-flex align-items-center" role="alert">
            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlinkHref="#exclamation-triangle-fill"/></svg>
            <div>
              An example danger alert with an icon
            </div>
          </div>
      </div>

    </div>
  </section>

  <Footer />
</div>

);
export default accordion;