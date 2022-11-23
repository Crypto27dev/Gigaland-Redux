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

const progress= () => (
<div>
  <GlobalStyles/>
    <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
        <div className='mainbreadcumb'>
          <div className='container'>
            <div className='row m-10-hor'>
              <div className='col-12 text-center'>
                <h1>Progress Bar</h1>
                <p>Anim pariatur cliche reprehenderit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section className="container">
      <div className="row">
            
            <div className="col-md-4">
                <div className="skill-bar style-2">
                    <h5>Art</h5>
                    <div className="de-progress">
                        <div className="progress-bar" style={{width: `80%` }}>
                        </div>
                    </div>
                </div>

                <div className="skill-bar style-2">
                    <h5>Music</h5>
                    <div className="de-progress">
                        <div className="progress-bar" style={{width: `70%` }}>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="skill-bar style-2">
                    <h5>Domain Names</h5>
                    <div className="de-progress">
                        <div className="progress-bar" style={{width: `75%` }}>
                        </div>
                    </div>
                </div>

                <div className="skill-bar style-2">
                    <h5>Virtual Worlds</h5>
                    <div className="de-progress">
                        <div className="progress-bar" style={{width: `80%` }}>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="skill-bar style-2">
                    <h5>Trading Cards</h5>
                    <div className="de-progress">
                        <div className="progress-bar" style={{width: `90%` }}>
                        </div>
                    </div>
                </div>

                <div className="skill-bar style-2">
                    <h5>Collectibles</h5>
                    <div className="de-progress">
                        <div className="progress-bar" style={{width: `75%` }}>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>


  <Footer />
</div>

);
export default progress;