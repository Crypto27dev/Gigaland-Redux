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

const serviceone= () => (
<div>
<GlobalStyles/>

  <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row m-10-hor'>
          <div className='col-12'>
            <h1 className='text-center'>Etline Icons</h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container'>
    <div className='row'>
      <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-mobile"></span> &nbsp;icon-mobile
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-laptop"></span> &nbsp;icon-laptop
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-desktop"></span> &nbsp;icon-desktop
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-tablet"></span> &nbsp;icon-tablet
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-phone"></span> &nbsp;icon-phone
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-document"></span> &nbsp;icon-document
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-documents"></span> &nbsp;icon-documents
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-search"></span> &nbsp;icon-search
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-clipboard"></span> &nbsp;icon-clipboard
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-newspaper"></span> &nbsp;icon-newspaper
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-notebook"></span> &nbsp;icon-notebook
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-book-open"></span> &nbsp;icon-book-open
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-browser"></span> &nbsp;icon-browser
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-calendar"></span> &nbsp;icon-calendar
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-presentation"></span> &nbsp;icon-presentation
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-picture"></span> &nbsp;icon-picture
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-pictures"></span> &nbsp;icon-pictures
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-video"></span> &nbsp;icon-video
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-camera"></span> &nbsp;icon-camera
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-printer"></span> &nbsp;icon-printer
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-toolbox"></span> &nbsp;icon-toolbox
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-briefcase"></span> &nbsp;icon-briefcase
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-wallet"></span> &nbsp;icon-wallet
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-gift"></span> &nbsp;icon-gift
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-bargraph"></span> &nbsp;icon-bargraph
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-grid"></span> &nbsp;icon-grid
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-expand"></span> &nbsp;icon-expand
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-focus"></span> &nbsp;icon-focus
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-edit"></span> &nbsp;icon-edit
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-adjustments"></span> &nbsp;icon-adjustments
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-ribbon"></span> &nbsp;icon-ribbon
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-hourglass"></span> &nbsp;icon-hourglass
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-lock"></span> &nbsp;icon-lock
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-megaphone"></span> &nbsp;icon-megaphone
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-shield"></span> &nbsp;icon-shield
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-trophy"></span> &nbsp;icon-trophy
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-flag"></span> &nbsp;icon-flag
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-map"></span> &nbsp;icon-map
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-puzzle"></span> &nbsp;icon-puzzle
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-basket"></span> &nbsp;icon-basket
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-envelope"></span> &nbsp;icon-envelope
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-streetsign"></span> &nbsp;icon-streetsign
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-telescope"></span> &nbsp;icon-telescope
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-gears"></span> &nbsp;icon-gears
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-key"></span> &nbsp;icon-key
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-paperclip"></span> &nbsp;icon-paperclip
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-attachment"></span> &nbsp;icon-attachment
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-pricetags"></span> &nbsp;icon-pricetags
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-lightbulb"></span> &nbsp;icon-lightbulb
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-layers"></span> &nbsp;icon-layers
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-pencil"></span> &nbsp;icon-pencil
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-tools"></span> &nbsp;icon-tools
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-tools-2"></span> &nbsp;icon-tools-2
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-scissors"></span> &nbsp;icon-scissors
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-paintbrush"></span> &nbsp;icon-paintbrush
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-magnifying-glass"></span> &nbsp;icon-magnifying-glass
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-circle-compass"></span> &nbsp;icon-circle-compass
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-linegraph"></span> &nbsp;icon-linegraph
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-mic"></span> &nbsp;icon-mic
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-strategy"></span> &nbsp;icon-strategy
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-beaker"></span> &nbsp;icon-beaker
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-caution"></span> &nbsp;icon-caution
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-recycle"></span> &nbsp;icon-recycle
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-anchor"></span> &nbsp;icon-anchor
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-profile-male"></span> &nbsp;icon-profile-male
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-profile-female"></span> &nbsp;icon-profile-female
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-bike"></span> &nbsp;icon-bike
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-wine"></span> &nbsp;icon-wine
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-hotairballoon"></span> &nbsp;icon-hotairballoon
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-globe"></span> &nbsp;icon-globe
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-genius"></span> &nbsp;icon-genius
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-map-pin"></span> &nbsp;icon-map-pin
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-dial"></span> &nbsp;icon-dial
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-chat"></span> &nbsp;icon-chat
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-heart"></span> &nbsp;icon-heart
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-cloud"></span> &nbsp;icon-cloud
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-upload"></span> &nbsp;icon-upload
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-download"></span> &nbsp;icon-download
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-target"></span> &nbsp;icon-target
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-hazardous"></span> &nbsp;icon-hazardous
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-piechart"></span> &nbsp;icon-piechart
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-speedometer"></span> &nbsp;icon-speedometer
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-global"></span> &nbsp;icon-global
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-compass"></span> &nbsp;icon-compass
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-lifesaver"></span> &nbsp;icon-lifesaver
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-clock"></span> &nbsp;icon-clock
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-aperture"></span> &nbsp;icon-aperture
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-quote"></span> &nbsp;icon-quote
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-scope"></span> &nbsp;icon-scope
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-alarmclock"></span> &nbsp;icon-alarmclock
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-refresh"></span> &nbsp;icon-refresh
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-happy"></span> &nbsp;icon-happy
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-sad"></span> &nbsp;icon-sad
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-facebook"></span> &nbsp;icon-facebook
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-twitter"></span> &nbsp;icon-twitter
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-googleplus"></span> &nbsp;icon-googleplus
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-rss"></span> &nbsp;icon-rss
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-tumblr"></span> &nbsp;icon-tumblr
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-linkedin"></span> &nbsp;icon-linkedin
            </div>
            <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
              <span aria-hidden="true" className="icon-dribbble"></span> &nbsp;icon-dribbble
            </div>
    </div>
  </section>

  <Footer />
</div>

);
export default serviceone;