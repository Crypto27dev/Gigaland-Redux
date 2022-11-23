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

const fontawesome= () => (
<div>
<GlobalStyles/>

  <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row m-10-hor'>
          <div className='col-12'>
            <h1 className='text-center'>Font Awesome Icons</h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container'>
    <div className='row'>
     <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use 500px"></i>
              fa-500px
              
              <span className="text-grey">[&amp;#xf26e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use address-book"></i>
              fa-address-book
              
              <span className="text-grey">[&amp;#xf2b9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use address-book-o"></i>
              fa-address-book-o
              
              <span className="text-grey">[&amp;#xf2ba;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use address-card"></i>
              fa-address-card
              
              <span className="text-grey">[&amp;#xf2bb;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use address-card-o"></i>
              fa-address-card-o
              
              <span className="text-grey">[&amp;#xf2bc;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use adjust"></i>
              fa-adjust
              
              <span className="text-grey">[&amp;#xf042;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use adn"></i>
              fa-adn
              
              <span className="text-grey">[&amp;#xf170;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use align-center"></i>
              fa-align-center
              
              <span className="text-grey">[&amp;#xf037;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use align-justify"></i>
              fa-align-justify
              
              <span className="text-grey">[&amp;#xf039;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use align-left"></i>
              fa-align-left
              
              <span className="text-grey">[&amp;#xf036;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use align-right"></i>
              fa-align-right
              
              <span className="text-grey">[&amp;#xf038;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use amazon"></i>
              fa-amazon
              
              <span className="text-grey">[&amp;#xf270;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use ambulance"></i>
              fa-ambulance
              
              <span className="text-grey">[&amp;#xf0f9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use american-sign-language-interpreting"></i>
              fa-american-sign-language-interpreting
              
              <span className="text-grey">[&amp;#xf2a3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use anchor"></i>
              fa-anchor
              
              <span className="text-grey">[&amp;#xf13d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use android"></i>
              fa-android
              
              <span className="text-grey">[&amp;#xf17b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use angellist"></i>
              fa-angellist
              
              <span className="text-grey">[&amp;#xf209;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use angle-double-down"></i>
              fa-angle-double-down
              
              <span className="text-grey">[&amp;#xf103;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use angle-double-left"></i>
              fa-angle-double-left
              
              <span className="text-grey">[&amp;#xf100;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use angle-double-right"></i>
              fa-angle-double-right
              
              <span className="text-grey">[&amp;#xf101;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use angle-double-up"></i>
              fa-angle-double-up
              
              <span className="text-grey">[&amp;#xf102;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use angle-down"></i>
              fa-angle-down
              
              <span className="text-grey">[&amp;#xf107;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use angle-left"></i>
              fa-angle-left
              
              <span className="text-grey">[&amp;#xf104;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use angle-right"></i>
              fa-angle-right
              
              <span className="text-grey">[&amp;#xf105;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use angle-up"></i>
              fa-angle-up
              
              <span className="text-grey">[&amp;#xf106;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use apple"></i>
              fa-apple
              
              <span className="text-grey">[&amp;#xf179;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use archive"></i>
              fa-archive
              
              <span className="text-grey">[&amp;#xf187;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use area-chart"></i>
              fa-area-chart
              
              <span className="text-grey">[&amp;#xf1fe;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrow-circle-down"></i>
              fa-arrow-circle-down
              
              <span className="text-grey">[&amp;#xf0ab;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrow-circle-left"></i>
              fa-arrow-circle-left
              
              <span className="text-grey">[&amp;#xf0a8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrow-circle-o-down"></i>
              fa-arrow-circle-o-down
              
              <span className="text-grey">[&amp;#xf01a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrow-circle-o-left"></i>
              fa-arrow-circle-o-left
              
              <span className="text-grey">[&amp;#xf190;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrow-circle-o-right"></i>
              fa-arrow-circle-o-right
              
              <span className="text-grey">[&amp;#xf18e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrow-circle-o-up"></i>
              fa-arrow-circle-o-up
              
              <span className="text-grey">[&amp;#xf01b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrow-circle-right"></i>
              fa-arrow-circle-right
              
              <span className="text-grey">[&amp;#xf0a9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrow-circle-up"></i>
              fa-arrow-circle-up
              
              <span className="text-grey">[&amp;#xf0aa;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrow-down"></i>
              fa-arrow-down
              
              <span className="text-grey">[&amp;#xf063;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrow-left"></i>
              fa-arrow-left
              
              <span className="text-grey">[&amp;#xf060;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrow-right"></i>
              fa-arrow-right
              
              <span className="text-grey">[&amp;#xf061;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrow-up"></i>
              fa-arrow-up
              
              <span className="text-grey">[&amp;#xf062;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrows"></i>
              fa-arrows
              
              <span className="text-grey">[&amp;#xf047;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrows-alt"></i>
              fa-arrows-alt
              
              <span className="text-grey">[&amp;#xf0b2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrows-h"></i>
              fa-arrows-h
              
              <span className="text-grey">[&amp;#xf07e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use arrows-v"></i>
              fa-arrows-v
              
              <span className="text-grey">[&amp;#xf07d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use asl-interpreting"></i>
              fa-asl-interpreting
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2a3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use assistive-listening-systems"></i>
              fa-assistive-listening-systems
              
              <span className="text-grey">[&amp;#xf2a2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use asterisk"></i>
              fa-asterisk
              
              <span className="text-grey">[&amp;#xf069;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use at"></i>
              fa-at
              
              <span className="text-grey">[&amp;#xf1fa;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use audio-description"></i>
              fa-audio-description
              
              <span className="text-grey">[&amp;#xf29e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use automobile"></i>
              fa-automobile
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1b9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use backward"></i>
              fa-backward
              
              <span className="text-grey">[&amp;#xf04a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use balance-scale"></i>
              fa-balance-scale
              
              <span className="text-grey">[&amp;#xf24e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use ban"></i>
              fa-ban
              
              <span className="text-grey">[&amp;#xf05e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bandcamp"></i>
              fa-bandcamp
              
              <span className="text-grey">[&amp;#xf2d5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bank"></i>
              fa-bank
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf19c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bar-chart"></i>
              fa-bar-chart
              
              <span className="text-grey">[&amp;#xf080;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bar-chart-o"></i>
              fa-bar-chart-o
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf080;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use barcode"></i>
              fa-barcode
              
              <span className="text-grey">[&amp;#xf02a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bars"></i>
              fa-bars
              
              <span className="text-grey">[&amp;#xf0c9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bath"></i>
              fa-bath
              
              <span className="text-grey">[&amp;#xf2cd;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bathtub"></i>
              fa-bathtub
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2cd;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use battery"></i>
              fa-battery
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf240;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use battery-0"></i>
              fa-battery-0
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf244;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use battery-1"></i>
              fa-battery-1
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf243;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use battery-2"></i>
              fa-battery-2
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf242;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use battery-3"></i>
              fa-battery-3
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf241;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use battery-4"></i>
              fa-battery-4
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf240;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use battery-empty"></i>
              fa-battery-empty
              
              <span className="text-grey">[&amp;#xf244;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use battery-full"></i>
              fa-battery-full
              
              <span className="text-grey">[&amp;#xf240;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use battery-half"></i>
              fa-battery-half
              
              <span className="text-grey">[&amp;#xf242;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use battery-quarter"></i>
              fa-battery-quarter
              
              <span className="text-grey">[&amp;#xf243;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use battery-three-quarters"></i>
              fa-battery-three-quarters
              
              <span className="text-grey">[&amp;#xf241;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bed"></i>
              fa-bed
              
              <span className="text-grey">[&amp;#xf236;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use beer"></i>
              fa-beer
              
              <span className="text-grey">[&amp;#xf0fc;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use behance"></i>
              fa-behance
              
              <span className="text-grey">[&amp;#xf1b4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use behance-square"></i>
              fa-behance-square
              
              <span className="text-grey">[&amp;#xf1b5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bell"></i>
              fa-bell
              
              <span className="text-grey">[&amp;#xf0f3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bell-o"></i>
              fa-bell-o
              
              <span className="text-grey">[&amp;#xf0a2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bell-slash"></i>
              fa-bell-slash
              
              <span className="text-grey">[&amp;#xf1f6;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bell-slash-o"></i>
              fa-bell-slash-o
              
              <span className="text-grey">[&amp;#xf1f7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bicycle"></i>
              fa-bicycle
              
              <span className="text-grey">[&amp;#xf206;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use binoculars"></i>
              fa-binoculars
              
              <span className="text-grey">[&amp;#xf1e5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use birthday-cake"></i>
              fa-birthday-cake
              
              <span className="text-grey">[&amp;#xf1fd;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bitbucket"></i>
              fa-bitbucket
              
              <span className="text-grey">[&amp;#xf171;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bitbucket-square"></i>
              fa-bitbucket-square
              
              <span className="text-grey">[&amp;#xf172;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bitcoin"></i>
              fa-bitcoin
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf15a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use black-tie"></i>
              fa-black-tie
              
              <span className="text-grey">[&amp;#xf27e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use blind"></i>
              fa-blind
              
              <span className="text-grey">[&amp;#xf29d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bluetooth"></i>
              fa-bluetooth
              
              <span className="text-grey">[&amp;#xf293;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bluetooth-b"></i>
              fa-bluetooth-b
              
              <span className="text-grey">[&amp;#xf294;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bold"></i>
              fa-bold
              
              <span className="text-grey">[&amp;#xf032;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bolt"></i>
              fa-bolt
              
              <span className="text-grey">[&amp;#xf0e7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bomb"></i>
              fa-bomb
              
              <span className="text-grey">[&amp;#xf1e2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use book"></i>
              fa-book
              
              <span className="text-grey">[&amp;#xf02d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bookmark"></i>
              fa-bookmark
              
              <span className="text-grey">[&amp;#xf02e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bookmark-o"></i>
              fa-bookmark-o
              
              <span className="text-grey">[&amp;#xf097;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use braille"></i>
              fa-braille
              
              <span className="text-grey">[&amp;#xf2a1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use briefcase"></i>
              fa-briefcase
              
              <span className="text-grey">[&amp;#xf0b1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use btc"></i>
              fa-btc
              
              <span className="text-grey">[&amp;#xf15a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bug"></i>
              fa-bug
              
              <span className="text-grey">[&amp;#xf188;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use building"></i>
              fa-building
              
              <span className="text-grey">[&amp;#xf1ad;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use building-o"></i>
              fa-building-o
              
              <span className="text-grey">[&amp;#xf0f7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bullhorn"></i>
              fa-bullhorn
              
              <span className="text-grey">[&amp;#xf0a1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bullseye"></i>
              fa-bullseye
              
              <span className="text-grey">[&amp;#xf140;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use bus"></i>
              fa-bus
              
              <span className="text-grey">[&amp;#xf207;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use buysellads"></i>
              fa-buysellads
              
              <span className="text-grey">[&amp;#xf20d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cab"></i>
              fa-cab
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1ba;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use calculator"></i>
              fa-calculator
              
              <span className="text-grey">[&amp;#xf1ec;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use calendar"></i>
              fa-calendar
              
              <span className="text-grey">[&amp;#xf073;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use calendar-check-o"></i>
              fa-calendar-check-o
              
              <span className="text-grey">[&amp;#xf274;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use calendar-minus-o"></i>
              fa-calendar-minus-o
              
              <span className="text-grey">[&amp;#xf272;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use calendar-o"></i>
              fa-calendar-o
              
              <span className="text-grey">[&amp;#xf133;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use calendar-plus-o"></i>
              fa-calendar-plus-o
              
              <span className="text-grey">[&amp;#xf271;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use calendar-times-o"></i>
              fa-calendar-times-o
              
              <span className="text-grey">[&amp;#xf273;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use camera"></i>
              fa-camera
              
              <span className="text-grey">[&amp;#xf030;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use camera-retro"></i>
              fa-camera-retro
              
              <span className="text-grey">[&amp;#xf083;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use car"></i>
              fa-car
              
              <span className="text-grey">[&amp;#xf1b9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use caret-down"></i>
              fa-caret-down
              
              <span className="text-grey">[&amp;#xf0d7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use caret-left"></i>
              fa-caret-left
              
              <span className="text-grey">[&amp;#xf0d9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use caret-right"></i>
              fa-caret-right
              
              <span className="text-grey">[&amp;#xf0da;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use caret-square-o-down"></i>
              fa-caret-square-o-down
              
              <span className="text-grey">[&amp;#xf150;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use caret-square-o-left"></i>
              fa-caret-square-o-left
              
              <span className="text-grey">[&amp;#xf191;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use caret-square-o-right"></i>
              fa-caret-square-o-right
              
              <span className="text-grey">[&amp;#xf152;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use caret-square-o-up"></i>
              fa-caret-square-o-up
              
              <span className="text-grey">[&amp;#xf151;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use caret-up"></i>
              fa-caret-up
              
              <span className="text-grey">[&amp;#xf0d8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cart-arrow-down"></i>
              fa-cart-arrow-down
              
              <span className="text-grey">[&amp;#xf218;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cart-plus"></i>
              fa-cart-plus
              
              <span className="text-grey">[&amp;#xf217;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cc"></i>
              fa-cc
              
              <span className="text-grey">[&amp;#xf20a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cc-amex"></i>
              fa-cc-amex
              
              <span className="text-grey">[&amp;#xf1f3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cc-diners-club"></i>
              fa-cc-diners-club
              
              <span className="text-grey">[&amp;#xf24c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cc-discover"></i>
              fa-cc-discover
              
              <span className="text-grey">[&amp;#xf1f2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cc-jcb"></i>
              fa-cc-jcb
              
              <span className="text-grey">[&amp;#xf24b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cc-mastercard"></i>
              fa-cc-mastercard
              
              <span className="text-grey">[&amp;#xf1f1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cc-paypal"></i>
              fa-cc-paypal
              
              <span className="text-grey">[&amp;#xf1f4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cc-stripe"></i>
              fa-cc-stripe
              
              <span className="text-grey">[&amp;#xf1f5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cc-visa"></i>
              fa-cc-visa
              
              <span className="text-grey">[&amp;#xf1f0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use certificate"></i>
              fa-certificate
              
              <span className="text-grey">[&amp;#xf0a3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use chain"></i>
              fa-chain
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf0c1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use chain-broken"></i>
              fa-chain-broken
              
              <span className="text-grey">[&amp;#xf127;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use check"></i>
              fa-check
              
              <span className="text-grey">[&amp;#xf00c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use check-circle"></i>
              fa-check-circle
              
              <span className="text-grey">[&amp;#xf058;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use check-circle-o"></i>
              fa-check-circle-o
              
              <span className="text-grey">[&amp;#xf05d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use check-square"></i>
              fa-check-square
              
              <span className="text-grey">[&amp;#xf14a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use check-square-o"></i>
              fa-check-square-o
              
              <span className="text-grey">[&amp;#xf046;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use chevron-circle-down"></i>
              fa-chevron-circle-down
              
              <span className="text-grey">[&amp;#xf13a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use chevron-circle-left"></i>
              fa-chevron-circle-left
              
              <span className="text-grey">[&amp;#xf137;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use chevron-circle-right"></i>
              fa-chevron-circle-right
              
              <span className="text-grey">[&amp;#xf138;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use chevron-circle-up"></i>
              fa-chevron-circle-up
              
              <span className="text-grey">[&amp;#xf139;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use chevron-down"></i>
              fa-chevron-down
              
              <span className="text-grey">[&amp;#xf078;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use chevron-left"></i>
              fa-chevron-left
              
              <span className="text-grey">[&amp;#xf053;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use chevron-right"></i>
              fa-chevron-right
              
              <span className="text-grey">[&amp;#xf054;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use chevron-up"></i>
              fa-chevron-up
              
              <span className="text-grey">[&amp;#xf077;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use child"></i>
              fa-child
              
              <span className="text-grey">[&amp;#xf1ae;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use chrome"></i>
              fa-chrome
              
              <span className="text-grey">[&amp;#xf268;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use circle"></i>
              fa-circle
              
              <span className="text-grey">[&amp;#xf111;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use circle-o"></i>
              fa-circle-o
              
              <span className="text-grey">[&amp;#xf10c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use circle-o-notch"></i>
              fa-circle-o-notch
              
              <span className="text-grey">[&amp;#xf1ce;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use circle-thin"></i>
              fa-circle-thin
              
              <span className="text-grey">[&amp;#xf1db;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use clipboard"></i>
              fa-clipboard
              
              <span className="text-grey">[&amp;#xf0ea;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use clock-o"></i>
              fa-clock-o
              
              <span className="text-grey">[&amp;#xf017;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use clone"></i>
              fa-clone
              
              <span className="text-grey">[&amp;#xf24d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use close"></i>
              fa-close
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf00d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cloud"></i>
              fa-cloud
              
              <span className="text-grey">[&amp;#xf0c2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cloud-download"></i>
              fa-cloud-download
              
              <span className="text-grey">[&amp;#xf0ed;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cloud-upload"></i>
              fa-cloud-upload
              
              <span className="text-grey">[&amp;#xf0ee;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cny"></i>
              fa-cny
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf157;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use code"></i>
              fa-code
              
              <span className="text-grey">[&amp;#xf121;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use code-fork"></i>
              fa-code-fork
              
              <span className="text-grey">[&amp;#xf126;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use codepen"></i>
              fa-codepen
              
              <span className="text-grey">[&amp;#xf1cb;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use codiepie"></i>
              fa-codiepie
              
              <span className="text-grey">[&amp;#xf284;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use coffee"></i>
              fa-coffee
              
              <span className="text-grey">[&amp;#xf0f4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cog"></i>
              fa-cog
              
              <span className="text-grey">[&amp;#xf013;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cogs"></i>
              fa-cogs
              
              <span className="text-grey">[&amp;#xf085;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use columns"></i>
              fa-columns
              
              <span className="text-grey">[&amp;#xf0db;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use comment"></i>
              fa-comment
              
              <span className="text-grey">[&amp;#xf075;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use comment-o"></i>
              fa-comment-o
              
              <span className="text-grey">[&amp;#xf0e5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use commenting"></i>
              fa-commenting
              
              <span className="text-grey">[&amp;#xf27a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use commenting-o"></i>
              fa-commenting-o
              
              <span className="text-grey">[&amp;#xf27b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use comments"></i>
              fa-comments
              
              <span className="text-grey">[&amp;#xf086;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use comments-o"></i>
              fa-comments-o
              
              <span className="text-grey">[&amp;#xf0e6;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use compass"></i>
              fa-compass
              
              <span className="text-grey">[&amp;#xf14e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use compress"></i>
              fa-compress
              
              <span className="text-grey">[&amp;#xf066;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use connectdevelop"></i>
              fa-connectdevelop
              
              <span className="text-grey">[&amp;#xf20e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use contao"></i>
              fa-contao
              
              <span className="text-grey">[&amp;#xf26d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use copy"></i>
              fa-copy
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf0c5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use copyright"></i>
              fa-copyright
              
              <span className="text-grey">[&amp;#xf1f9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use creative-commons"></i>
              fa-creative-commons
              
              <span className="text-grey">[&amp;#xf25e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use credit-card"></i>
              fa-credit-card
              
              <span className="text-grey">[&amp;#xf09d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use credit-card-alt"></i>
              fa-credit-card-alt
              
              <span className="text-grey">[&amp;#xf283;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use crop"></i>
              fa-crop
              
              <span className="text-grey">[&amp;#xf125;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use crosshairs"></i>
              fa-crosshairs
              
              <span className="text-grey">[&amp;#xf05b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use css3"></i>
              fa-css3
              
              <span className="text-grey">[&amp;#xf13c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cube"></i>
              fa-cube
              
              <span className="text-grey">[&amp;#xf1b2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cubes"></i>
              fa-cubes
              
              <span className="text-grey">[&amp;#xf1b3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cut"></i>
              fa-cut
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf0c4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use cutlery"></i>
              fa-cutlery
              
              <span className="text-grey">[&amp;#xf0f5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use dashboard"></i>
              fa-dashboard
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf0e4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use dashcube"></i>
              fa-dashcube
              
              <span className="text-grey">[&amp;#xf210;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use database"></i>
              fa-database
              
              <span className="text-grey">[&amp;#xf1c0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use deaf"></i>
              fa-deaf
              
              <span className="text-grey">[&amp;#xf2a4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use deafness"></i>
              fa-deafness
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2a4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use dedent"></i>
              fa-dedent
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf03b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use delicious"></i>
              fa-delicious
              
              <span className="text-grey">[&amp;#xf1a5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use desktop"></i>
              fa-desktop
              
              <span className="text-grey">[&amp;#xf108;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use deviantart"></i>
              fa-deviantart
              
              <span className="text-grey">[&amp;#xf1bd;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use diamond"></i>
              fa-diamond
              
              <span className="text-grey">[&amp;#xf219;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use digg"></i>
              fa-digg
              
              <span className="text-grey">[&amp;#xf1a6;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use dollar"></i>
              fa-dollar
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf155;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use dot-circle-o"></i>
              fa-dot-circle-o
              
              <span className="text-grey">[&amp;#xf192;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use download"></i>
              fa-download
              
              <span className="text-grey">[&amp;#xf019;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use dribbble"></i>
              fa-dribbble
              
              <span className="text-grey">[&amp;#xf17d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use drivers-license"></i>
              fa-drivers-license
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2c2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use drivers-license-o"></i>
              fa-drivers-license-o
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2c3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use dropbox"></i>
              fa-dropbox
              
              <span className="text-grey">[&amp;#xf16b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use drupal"></i>
              fa-drupal
              
              <span className="text-grey">[&amp;#xf1a9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use edge"></i>
              fa-edge
              
              <span className="text-grey">[&amp;#xf282;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use edit"></i>
              fa-edit
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf044;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use eercast"></i>
              fa-eercast
              
              <span className="text-grey">[&amp;#xf2da;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use eject"></i>
              fa-eject
              
              <span className="text-grey">[&amp;#xf052;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use ellipsis-h"></i>
              fa-ellipsis-h
              
              <span className="text-grey">[&amp;#xf141;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use ellipsis-v"></i>
              fa-ellipsis-v
              
              <span className="text-grey">[&amp;#xf142;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use empire"></i>
              fa-empire
              
              <span className="text-grey">[&amp;#xf1d1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use envelope"></i>
              fa-envelope
              
              <span className="text-grey">[&amp;#xf0e0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use envelope-o"></i>
              fa-envelope-o
              
              <span className="text-grey">[&amp;#xf003;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use envelope-open"></i>
              fa-envelope-open
              
              <span className="text-grey">[&amp;#xf2b6;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use envelope-open-o"></i>
              fa-envelope-open-o
              
              <span className="text-grey">[&amp;#xf2b7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use envelope-square"></i>
              fa-envelope-square
              
              <span className="text-grey">[&amp;#xf199;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use envira"></i>
              fa-envira
              
              <span className="text-grey">[&amp;#xf299;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use eraser"></i>
              fa-eraser
              
              <span className="text-grey">[&amp;#xf12d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use etsy"></i>
              fa-etsy
              
              <span className="text-grey">[&amp;#xf2d7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use eur"></i>
              fa-eur
              
              <span className="text-grey">[&amp;#xf153;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use euro"></i>
              fa-euro
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf153;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use exchange"></i>
              fa-exchange
              
              <span className="text-grey">[&amp;#xf0ec;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use exclamation"></i>
              fa-exclamation
              
              <span className="text-grey">[&amp;#xf12a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use exclamation-circle"></i>
              fa-exclamation-circle
              
              <span className="text-grey">[&amp;#xf06a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use exclamation-triangle"></i>
              fa-exclamation-triangle
              
              <span className="text-grey">[&amp;#xf071;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use expand"></i>
              fa-expand
              
              <span className="text-grey">[&amp;#xf065;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use expeditedssl"></i>
              fa-expeditedssl
              
              <span className="text-grey">[&amp;#xf23e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use external-link"></i>
              fa-external-link
              
              <span className="text-grey">[&amp;#xf08e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use external-link-square"></i>
              fa-external-link-square
              
              <span className="text-grey">[&amp;#xf14c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use eye"></i>
              fa-eye
              
              <span className="text-grey">[&amp;#xf06e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use eye-slash"></i>
              fa-eye-slash
              
              <span className="text-grey">[&amp;#xf070;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use eyedropper"></i>
              fa-eyedropper
              
              <span className="text-grey">[&amp;#xf1fb;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use fa"></i>
              fa-fa
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2b4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use facebook"></i>
              fa-facebook
              
              <span className="text-grey">[&amp;#xf09a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use facebook-f"></i>
              fa-facebook-f
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf09a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use facebook-official"></i>
              fa-facebook-official
              
              <span className="text-grey">[&amp;#xf230;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use facebook-square"></i>
              fa-facebook-square
              
              <span className="text-grey">[&amp;#xf082;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use fast-backward"></i>
              fa-fast-backward
              
              <span className="text-grey">[&amp;#xf049;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use fast-forward"></i>
              fa-fast-forward
              
              <span className="text-grey">[&amp;#xf050;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use fax"></i>
              fa-fax
              
              <span className="text-grey">[&amp;#xf1ac;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use feed"></i>
              fa-feed
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf09e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use female"></i>
              fa-female
              
              <span className="text-grey">[&amp;#xf182;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use fighter-jet"></i>
              fa-fighter-jet
              
              <span className="text-grey">[&amp;#xf0fb;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file"></i>
              fa-file
              
              <span className="text-grey">[&amp;#xf15b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file-archive-o"></i>
              fa-file-archive-o
              
              <span className="text-grey">[&amp;#xf1c6;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file-audio-o"></i>
              fa-file-audio-o
              
              <span className="text-grey">[&amp;#xf1c7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file-code-o"></i>
              fa-file-code-o
              
              <span className="text-grey">[&amp;#xf1c9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file-excel-o"></i>
              fa-file-excel-o
              
              <span className="text-grey">[&amp;#xf1c3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file-image-o"></i>
              fa-file-image-o
              
              <span className="text-grey">[&amp;#xf1c5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file-movie-o"></i>
              fa-file-movie-o
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1c8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file-o"></i>
              fa-file-o
              
              <span className="text-grey">[&amp;#xf016;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file-pdf-o"></i>
              fa-file-pdf-o
              
              <span className="text-grey">[&amp;#xf1c1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file-photo-o"></i>
              fa-file-photo-o
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1c5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file-picture-o"></i>
              fa-file-picture-o
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1c5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file-powerpoint-o"></i>
              fa-file-powerpoint-o
              
              <span className="text-grey">[&amp;#xf1c4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file-sound-o"></i>
              fa-file-sound-o
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1c7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file-text"></i>
              fa-file-text
              
              <span className="text-grey">[&amp;#xf15c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file-text-o"></i>
              fa-file-text-o
              
              <span className="text-grey">[&amp;#xf0f6;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file-video-o"></i>
              fa-file-video-o
              
              <span className="text-grey">[&amp;#xf1c8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file-word-o"></i>
              fa-file-word-o
              
              <span className="text-grey">[&amp;#xf1c2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use file-zip-o"></i>
              fa-file-zip-o
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1c6;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use files-o"></i>
              fa-files-o
              
              <span className="text-grey">[&amp;#xf0c5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use film"></i>
              fa-film
              
              <span className="text-grey">[&amp;#xf008;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use filter"></i>
              fa-filter
              
              <span className="text-grey">[&amp;#xf0b0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use fire"></i>
              fa-fire
              
              <span className="text-grey">[&amp;#xf06d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use fire-extinguisher"></i>
              fa-fire-extinguisher
              
              <span className="text-grey">[&amp;#xf134;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use firefox"></i>
              fa-firefox
              
              <span className="text-grey">[&amp;#xf269;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use first-order"></i>
              fa-first-order
              
              <span className="text-grey">[&amp;#xf2b0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use flag"></i>
              fa-flag
              
              <span className="text-grey">[&amp;#xf024;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use flag-checkered"></i>
              fa-flag-checkered
              
              <span className="text-grey">[&amp;#xf11e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use flag-o"></i>
              fa-flag-o
              
              <span className="text-grey">[&amp;#xf11d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use flash"></i>
              fa-flash
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf0e7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use flask"></i>
              fa-flask
              
              <span className="text-grey">[&amp;#xf0c3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use flickr"></i>
              fa-flickr
              
              <span className="text-grey">[&amp;#xf16e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use floppy-o"></i>
              fa-floppy-o
              
              <span className="text-grey">[&amp;#xf0c7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use folder"></i>
              fa-folder
              
              <span className="text-grey">[&amp;#xf07b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use folder-o"></i>
              fa-folder-o
              
              <span className="text-grey">[&amp;#xf114;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use folder-open"></i>
              fa-folder-open
              
              <span className="text-grey">[&amp;#xf07c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use folder-open-o"></i>
              fa-folder-open-o
              
              <span className="text-grey">[&amp;#xf115;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use font"></i>
              fa-font
              
              <span className="text-grey">[&amp;#xf031;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use font-awesome"></i>
              fa-font-awesome
              
              <span className="text-grey">[&amp;#xf2b4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use fonticons"></i>
              fa-fonticons
              
              <span className="text-grey">[&amp;#xf280;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use fort-awesome"></i>
              fa-fort-awesome
              
              <span className="text-grey">[&amp;#xf286;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use forumbee"></i>
              fa-forumbee
              
              <span className="text-grey">[&amp;#xf211;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use forward"></i>
              fa-forward
              
              <span className="text-grey">[&amp;#xf04e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use foursquare"></i>
              fa-foursquare
              
              <span className="text-grey">[&amp;#xf180;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use free-code-camp"></i>
              fa-free-code-camp
              
              <span className="text-grey">[&amp;#xf2c5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use frown-o"></i>
              fa-frown-o
              
              <span className="text-grey">[&amp;#xf119;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use futbol-o"></i>
              fa-futbol-o
              
              <span className="text-grey">[&amp;#xf1e3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use gamepad"></i>
              fa-gamepad
              
              <span className="text-grey">[&amp;#xf11b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use gavel"></i>
              fa-gavel
              
              <span className="text-grey">[&amp;#xf0e3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use gbp"></i>
              fa-gbp
              
              <span className="text-grey">[&amp;#xf154;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use ge"></i>
              fa-ge
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1d1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use gear"></i>
              fa-gear
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf013;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use gears"></i>
              fa-gears
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf085;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use genderless"></i>
              fa-genderless
              
              <span className="text-grey">[&amp;#xf22d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use get-pocket"></i>
              fa-get-pocket
              
              <span className="text-grey">[&amp;#xf265;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use gg"></i>
              fa-gg
              
              <span className="text-grey">[&amp;#xf260;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use gg-circle"></i>
              fa-gg-circle
              
              <span className="text-grey">[&amp;#xf261;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use gift"></i>
              fa-gift
              
              <span className="text-grey">[&amp;#xf06b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use git"></i>
              fa-git
              
              <span className="text-grey">[&amp;#xf1d3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use git-square"></i>
              fa-git-square
              
              <span className="text-grey">[&amp;#xf1d2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use github"></i>
              fa-github
              
              <span className="text-grey">[&amp;#xf09b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use github-alt"></i>
              fa-github-alt
              
              <span className="text-grey">[&amp;#xf113;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use github-square"></i>
              fa-github-square
              
              <span className="text-grey">[&amp;#xf092;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use gitlab"></i>
              fa-gitlab
              
              <span className="text-grey">[&amp;#xf296;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use gittip"></i>
              fa-gittip
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf184;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use glass"></i>
              fa-glass
              
              <span className="text-grey">[&amp;#xf000;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use glide"></i>
              fa-glide
              
              <span className="text-grey">[&amp;#xf2a5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use glide-g"></i>
              fa-glide-g
              
              <span className="text-grey">[&amp;#xf2a6;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use globe"></i>
              fa-globe
              
              <span className="text-grey">[&amp;#xf0ac;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use google"></i>
              fa-google
              
              <span className="text-grey">[&amp;#xf1a0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use google-plus"></i>
              fa-google-plus
              
              <span className="text-grey">[&amp;#xf0d5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use google-plus-circle"></i>
              fa-google-plus-circle
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2b3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use google-plus-official"></i>
              fa-google-plus-official
              
              <span className="text-grey">[&amp;#xf2b3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use google-plus-square"></i>
              fa-google-plus-square
              
              <span className="text-grey">[&amp;#xf0d4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use google-wallet"></i>
              fa-google-wallet
              
              <span className="text-grey">[&amp;#xf1ee;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use graduation-cap"></i>
              fa-graduation-cap
              
              <span className="text-grey">[&amp;#xf19d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use gratipay"></i>
              fa-gratipay
              
              <span className="text-grey">[&amp;#xf184;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use grav"></i>
              fa-grav
              
              <span className="text-grey">[&amp;#xf2d6;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use group"></i>
              fa-group
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf0c0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use h-square"></i>
              fa-h-square
              
              <span className="text-grey">[&amp;#xf0fd;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hacker-news"></i>
              fa-hacker-news
              
              <span className="text-grey">[&amp;#xf1d4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hand-grab-o"></i>
              fa-hand-grab-o
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf255;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hand-lizard-o"></i>
              fa-hand-lizard-o
              
              <span className="text-grey">[&amp;#xf258;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hand-o-down"></i>
              fa-hand-o-down
              
              <span className="text-grey">[&amp;#xf0a7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hand-o-left"></i>
              fa-hand-o-left
              
              <span className="text-grey">[&amp;#xf0a5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hand-o-right"></i>
              fa-hand-o-right
              
              <span className="text-grey">[&amp;#xf0a4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hand-o-up"></i>
              fa-hand-o-up
              
              <span className="text-grey">[&amp;#xf0a6;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hand-paper-o"></i>
              fa-hand-paper-o
              
              <span className="text-grey">[&amp;#xf256;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hand-peace-o"></i>
              fa-hand-peace-o
              
              <span className="text-grey">[&amp;#xf25b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hand-pointer-o"></i>
              fa-hand-pointer-o
              
              <span className="text-grey">[&amp;#xf25a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hand-rock-o"></i>
              fa-hand-rock-o
              
              <span className="text-grey">[&amp;#xf255;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hand-scissors-o"></i>
              fa-hand-scissors-o
              
              <span className="text-grey">[&amp;#xf257;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hand-spock-o"></i>
              fa-hand-spock-o
              
              <span className="text-grey">[&amp;#xf259;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hand-stop-o"></i>
              fa-hand-stop-o
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf256;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use handshake-o"></i>
              fa-handshake-o
              
              <span className="text-grey">[&amp;#xf2b5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hard-of-hearing"></i>
              fa-hard-of-hearing
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2a4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hashtag"></i>
              fa-hashtag
              
              <span className="text-grey">[&amp;#xf292;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hdd-o"></i>
              fa-hdd-o
              
              <span className="text-grey">[&amp;#xf0a0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use header"></i>
              fa-header
              
              <span className="text-grey">[&amp;#xf1dc;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use headphones"></i>
              fa-headphones
              
              <span className="text-grey">[&amp;#xf025;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use heart"></i>
              fa-heart
              
              <span className="text-grey">[&amp;#xf004;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use heart-o"></i>
              fa-heart-o
              
              <span className="text-grey">[&amp;#xf08a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use heartbeat"></i>
              fa-heartbeat
              
              <span className="text-grey">[&amp;#xf21e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use history"></i>
              fa-history
              
              <span className="text-grey">[&amp;#xf1da;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use home"></i>
              fa-home
              
              <span className="text-grey">[&amp;#xf015;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hospital-o"></i>
              fa-hospital-o
              
              <span className="text-grey">[&amp;#xf0f8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hotel"></i>
              fa-hotel
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf236;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hourglass"></i>
              fa-hourglass
              
              <span className="text-grey">[&amp;#xf254;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hourglass-1"></i>
              fa-hourglass-1
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf251;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hourglass-2"></i>
              fa-hourglass-2
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf252;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hourglass-3"></i>
              fa-hourglass-3
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf253;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hourglass-end"></i>
              fa-hourglass-end
              
              <span className="text-grey">[&amp;#xf253;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hourglass-half"></i>
              fa-hourglass-half
              
              <span className="text-grey">[&amp;#xf252;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hourglass-o"></i>
              fa-hourglass-o
              
              <span className="text-grey">[&amp;#xf250;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use hourglass-start"></i>
              fa-hourglass-start
              
              <span className="text-grey">[&amp;#xf251;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use houzz"></i>
              fa-houzz
              
              <span className="text-grey">[&amp;#xf27c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use html5"></i>
              fa-html5
              
              <span className="text-grey">[&amp;#xf13b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use i-cursor"></i>
              fa-i-cursor
              
              <span className="text-grey">[&amp;#xf246;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use id-badge"></i>
              fa-id-badge
              
              <span className="text-grey">[&amp;#xf2c1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use id-card"></i>
              fa-id-card
              
              <span className="text-grey">[&amp;#xf2c2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use id-card-o"></i>
              fa-id-card-o
              
              <span className="text-grey">[&amp;#xf2c3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use ils"></i>
              fa-ils
              
              <span className="text-grey">[&amp;#xf20b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use image"></i>
              fa-image
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf03e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use imdb"></i>
              fa-imdb
              
              <span className="text-grey">[&amp;#xf2d8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use inbox"></i>
              fa-inbox
              
              <span className="text-grey">[&amp;#xf01c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use indent"></i>
              fa-indent
              
              <span className="text-grey">[&amp;#xf03c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use industry"></i>
              fa-industry
              
              <span className="text-grey">[&amp;#xf275;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use info"></i>
              fa-info
              
              <span className="text-grey">[&amp;#xf129;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use info-circle"></i>
              fa-info-circle
              
              <span className="text-grey">[&amp;#xf05a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use inr"></i>
              fa-inr
              
              <span className="text-grey">[&amp;#xf156;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use instagram"></i>
              fa-instagram
              
              <span className="text-grey">[&amp;#xf16d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use institution"></i>
              fa-institution
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf19c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use internet-explorer"></i>
              fa-internet-explorer
              
              <span className="text-grey">[&amp;#xf26b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use intersex"></i>
              fa-intersex
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf224;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use ioxhost"></i>
              fa-ioxhost
              
              <span className="text-grey">[&amp;#xf208;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use italic"></i>
              fa-italic
              
              <span className="text-grey">[&amp;#xf033;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use joomla"></i>
              fa-joomla
              
              <span className="text-grey">[&amp;#xf1aa;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use jpy"></i>
              fa-jpy
              
              <span className="text-grey">[&amp;#xf157;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use jsfiddle"></i>
              fa-jsfiddle
              
              <span className="text-grey">[&amp;#xf1cc;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use key"></i>
              fa-key
              
              <span className="text-grey">[&amp;#xf084;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use keyboard-o"></i>
              fa-keyboard-o
              
              <span className="text-grey">[&amp;#xf11c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use krw"></i>
              fa-krw
              
              <span className="text-grey">[&amp;#xf159;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use language"></i>
              fa-language
              
              <span className="text-grey">[&amp;#xf1ab;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use laptop"></i>
              fa-laptop
              
              <span className="text-grey">[&amp;#xf109;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use lastfm"></i>
              fa-lastfm
              
              <span className="text-grey">[&amp;#xf202;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use lastfm-square"></i>
              fa-lastfm-square
              
              <span className="text-grey">[&amp;#xf203;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use leaf"></i>
              fa-leaf
              
              <span className="text-grey">[&amp;#xf06c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use leanpub"></i>
              fa-leanpub
              
              <span className="text-grey">[&amp;#xf212;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use legal"></i>
              fa-legal
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf0e3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use lemon-o"></i>
              fa-lemon-o
              
              <span className="text-grey">[&amp;#xf094;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use level-down"></i>
              fa-level-down
              
              <span className="text-grey">[&amp;#xf149;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use level-up"></i>
              fa-level-up
              
              <span className="text-grey">[&amp;#xf148;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use life-bouy"></i>
              fa-life-bouy
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1cd;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use life-buoy"></i>
              fa-life-buoy
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1cd;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use life-ring"></i>
              fa-life-ring
              
              <span className="text-grey">[&amp;#xf1cd;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use life-saver"></i>
              fa-life-saver
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1cd;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use lightbulb-o"></i>
              fa-lightbulb-o
              
              <span className="text-grey">[&amp;#xf0eb;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use line-chart"></i>
              fa-line-chart
              
              <span className="text-grey">[&amp;#xf201;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use link"></i>
              fa-link
              
              <span className="text-grey">[&amp;#xf0c1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use linkedin"></i>
              fa-linkedin
              
              <span className="text-grey">[&amp;#xf0e1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use linkedin-square"></i>
              fa-linkedin-square
              
              <span className="text-grey">[&amp;#xf08c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use linode"></i>
              fa-linode
              
              <span className="text-grey">[&amp;#xf2b8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use linux"></i>
              fa-linux
              
              <span className="text-grey">[&amp;#xf17c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use list"></i>
              fa-list
              
              <span className="text-grey">[&amp;#xf03a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use list-alt"></i>
              fa-list-alt
              
              <span className="text-grey">[&amp;#xf022;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use list-ol"></i>
              fa-list-ol
              
              <span className="text-grey">[&amp;#xf0cb;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use list-ul"></i>
              fa-list-ul
              
              <span className="text-grey">[&amp;#xf0ca;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use location-arrow"></i>
              fa-location-arrow
              
              <span className="text-grey">[&amp;#xf124;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use lock"></i>
              fa-lock
              
              <span className="text-grey">[&amp;#xf023;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use long-arrow-down"></i>
              fa-long-arrow-down
              
              <span className="text-grey">[&amp;#xf175;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use long-arrow-left"></i>
              fa-long-arrow-left
              
              <span className="text-grey">[&amp;#xf177;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use long-arrow-right"></i>
              fa-long-arrow-right
              
              <span className="text-grey">[&amp;#xf178;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use long-arrow-up"></i>
              fa-long-arrow-up
              
              <span className="text-grey">[&amp;#xf176;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use low-vision"></i>
              fa-low-vision
              
              <span className="text-grey">[&amp;#xf2a8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use magic"></i>
              fa-magic
              
              <span className="text-grey">[&amp;#xf0d0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use magnet"></i>
              fa-magnet
              
              <span className="text-grey">[&amp;#xf076;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use mail-forward"></i>
              fa-mail-forward
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf064;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use mail-reply"></i>
              fa-mail-reply
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf112;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use mail-reply-all"></i>
              fa-mail-reply-all
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf122;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use male"></i>
              fa-male
              
              <span className="text-grey">[&amp;#xf183;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use map"></i>
              fa-map
              
              <span className="text-grey">[&amp;#xf279;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use map-marker"></i>
              fa-map-marker
              
              <span className="text-grey">[&amp;#xf041;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use map-o"></i>
              fa-map-o
              
              <span className="text-grey">[&amp;#xf278;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use map-pin"></i>
              fa-map-pin
              
              <span className="text-grey">[&amp;#xf276;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use map-signs"></i>
              fa-map-signs
              
              <span className="text-grey">[&amp;#xf277;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use mars"></i>
              fa-mars
              
              <span className="text-grey">[&amp;#xf222;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use mars-double"></i>
              fa-mars-double
              
              <span className="text-grey">[&amp;#xf227;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use mars-stroke"></i>
              fa-mars-stroke
              
              <span className="text-grey">[&amp;#xf229;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use mars-stroke-h"></i>
              fa-mars-stroke-h
              
              <span className="text-grey">[&amp;#xf22b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use mars-stroke-v"></i>
              fa-mars-stroke-v
              
              <span className="text-grey">[&amp;#xf22a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use maxcdn"></i>
              fa-maxcdn
              
              <span className="text-grey">[&amp;#xf136;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use meanpath"></i>
              fa-meanpath
              
              <span className="text-grey">[&amp;#xf20c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use medium"></i>
              fa-medium
              
              <span className="text-grey">[&amp;#xf23a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use medkit"></i>
              fa-medkit
              
              <span className="text-grey">[&amp;#xf0fa;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use meetup"></i>
              fa-meetup
              
              <span className="text-grey">[&amp;#xf2e0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use meh-o"></i>
              fa-meh-o
              
              <span className="text-grey">[&amp;#xf11a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use mercury"></i>
              fa-mercury
              
              <span className="text-grey">[&amp;#xf223;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use microchip"></i>
              fa-microchip
              
              <span className="text-grey">[&amp;#xf2db;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use microphone"></i>
              fa-microphone
              
              <span className="text-grey">[&amp;#xf130;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use microphone-slash"></i>
              fa-microphone-slash
              
              <span className="text-grey">[&amp;#xf131;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use minus"></i>
              fa-minus
              
              <span className="text-grey">[&amp;#xf068;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use minus-circle"></i>
              fa-minus-circle
              
              <span className="text-grey">[&amp;#xf056;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use minus-square"></i>
              fa-minus-square
              
              <span className="text-grey">[&amp;#xf146;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use minus-square-o"></i>
              fa-minus-square-o
              
              <span className="text-grey">[&amp;#xf147;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use mixcloud"></i>
              fa-mixcloud
              
              <span className="text-grey">[&amp;#xf289;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use mobile"></i>
              fa-mobile
              
              <span className="text-grey">[&amp;#xf10b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use mobile-phone"></i>
              fa-mobile-phone
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf10b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use modx"></i>
              fa-modx
              
              <span className="text-grey">[&amp;#xf285;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use money"></i>
              fa-money
              
              <span className="text-grey">[&amp;#xf0d6;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use moon-o"></i>
              fa-moon-o
              
              <span className="text-grey">[&amp;#xf186;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use mortar-board"></i>
              fa-mortar-board
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf19d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use motorcycle"></i>
              fa-motorcycle
              
              <span className="text-grey">[&amp;#xf21c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use mouse-pointer"></i>
              fa-mouse-pointer
              
              <span className="text-grey">[&amp;#xf245;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use music"></i>
              fa-music
              
              <span className="text-grey">[&amp;#xf001;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use navicon"></i>
              fa-navicon
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf0c9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use neuter"></i>
              fa-neuter
              
              <span className="text-grey">[&amp;#xf22c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use newspaper-o"></i>
              fa-newspaper-o
              
              <span className="text-grey">[&amp;#xf1ea;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use object-group"></i>
              fa-object-group
              
              <span className="text-grey">[&amp;#xf247;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use object-ungroup"></i>
              fa-object-ungroup
              
              <span className="text-grey">[&amp;#xf248;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use odnoklassniki"></i>
              fa-odnoklassniki
              
              <span className="text-grey">[&amp;#xf263;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use odnoklassniki-square"></i>
              fa-odnoklassniki-square
              
              <span className="text-grey">[&amp;#xf264;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use opencart"></i>
              fa-opencart
              
              <span className="text-grey">[&amp;#xf23d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use openid"></i>
              fa-openid
              
              <span className="text-grey">[&amp;#xf19b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use opera"></i>
              fa-opera
              
              <span className="text-grey">[&amp;#xf26a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use optin-monster"></i>
              fa-optin-monster
              
              <span className="text-grey">[&amp;#xf23c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use outdent"></i>
              fa-outdent
              
              <span className="text-grey">[&amp;#xf03b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use pagelines"></i>
              fa-pagelines
              
              <span className="text-grey">[&amp;#xf18c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use paint-brush"></i>
              fa-paint-brush
              
              <span className="text-grey">[&amp;#xf1fc;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use paper-plane"></i>
              fa-paper-plane
              
              <span className="text-grey">[&amp;#xf1d8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use paper-plane-o"></i>
              fa-paper-plane-o
              
              <span className="text-grey">[&amp;#xf1d9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use paperclip"></i>
              fa-paperclip
              
              <span className="text-grey">[&amp;#xf0c6;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use paragraph"></i>
              fa-paragraph
              
              <span className="text-grey">[&amp;#xf1dd;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use paste"></i>
              fa-paste
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf0ea;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use pause"></i>
              fa-pause
              
              <span className="text-grey">[&amp;#xf04c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use pause-circle"></i>
              fa-pause-circle
              
              <span className="text-grey">[&amp;#xf28b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use pause-circle-o"></i>
              fa-pause-circle-o
              
              <span className="text-grey">[&amp;#xf28c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use paw"></i>
              fa-paw
              
              <span className="text-grey">[&amp;#xf1b0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use paypal"></i>
              fa-paypal
              
              <span className="text-grey">[&amp;#xf1ed;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use pencil"></i>
              fa-pencil
              
              <span className="text-grey">[&amp;#xf040;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use pencil-square"></i>
              fa-pencil-square
              
              <span className="text-grey">[&amp;#xf14b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use pencil-square-o"></i>
              fa-pencil-square-o
              
              <span className="text-grey">[&amp;#xf044;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use percent"></i>
              fa-percent
              
              <span className="text-grey">[&amp;#xf295;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use phone"></i>
              fa-phone
              
              <span className="text-grey">[&amp;#xf095;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use phone-square"></i>
              fa-phone-square
              
              <span className="text-grey">[&amp;#xf098;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use photo"></i>
              fa-photo
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf03e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use picture-o"></i>
              fa-picture-o
              
              <span className="text-grey">[&amp;#xf03e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use pie-chart"></i>
              fa-pie-chart
              
              <span className="text-grey">[&amp;#xf200;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use pied-piper"></i>
              fa-pied-piper
              
              <span className="text-grey">[&amp;#xf2ae;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use pied-piper-alt"></i>
              fa-pied-piper-alt
              
              <span className="text-grey">[&amp;#xf1a8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use pied-piper-pp"></i>
              fa-pied-piper-pp
              
              <span className="text-grey">[&amp;#xf1a7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use pinterest"></i>
              fa-pinterest
              
              <span className="text-grey">[&amp;#xf0d2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use pinterest-p"></i>
              fa-pinterest-p
              
              <span className="text-grey">[&amp;#xf231;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use pinterest-square"></i>
              fa-pinterest-square
              
              <span className="text-grey">[&amp;#xf0d3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use plane"></i>
              fa-plane
              
              <span className="text-grey">[&amp;#xf072;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use play"></i>
              fa-play
              
              <span className="text-grey">[&amp;#xf04b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use play-circle"></i>
              fa-play-circle
              
              <span className="text-grey">[&amp;#xf144;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use play-circle-o"></i>
              fa-play-circle-o
              
              <span className="text-grey">[&amp;#xf01d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use plug"></i>
              fa-plug
              
              <span className="text-grey">[&amp;#xf1e6;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use plus"></i>
              fa-plus
              
              <span className="text-grey">[&amp;#xf067;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use plus-circle"></i>
              fa-plus-circle
              
              <span className="text-grey">[&amp;#xf055;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use plus-square"></i>
              fa-plus-square
              
              <span className="text-grey">[&amp;#xf0fe;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use plus-square-o"></i>
              fa-plus-square-o
              
              <span className="text-grey">[&amp;#xf196;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use podcast"></i>
              fa-podcast
              
              <span className="text-grey">[&amp;#xf2ce;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use power-off"></i>
              fa-power-off
              
              <span className="text-grey">[&amp;#xf011;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use print"></i>
              fa-print
              
              <span className="text-grey">[&amp;#xf02f;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use product-hunt"></i>
              fa-product-hunt
              
              <span className="text-grey">[&amp;#xf288;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use puzzle-piece"></i>
              fa-puzzle-piece
              
              <span className="text-grey">[&amp;#xf12e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use qq"></i>
              fa-qq
              
              <span className="text-grey">[&amp;#xf1d6;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use qrcode"></i>
              fa-qrcode
              
              <span className="text-grey">[&amp;#xf029;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use question"></i>
              fa-question
              
              <span className="text-grey">[&amp;#xf128;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use question-circle"></i>
              fa-question-circle
              
              <span className="text-grey">[&amp;#xf059;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use question-circle-o"></i>
              fa-question-circle-o
              
              <span className="text-grey">[&amp;#xf29c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use quora"></i>
              fa-quora
              
              <span className="text-grey">[&amp;#xf2c4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use quote-left"></i>
              fa-quote-left
              
              <span className="text-grey">[&amp;#xf10d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use quote-right"></i>
              fa-quote-right
              
              <span className="text-grey">[&amp;#xf10e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use ra"></i>
              fa-ra
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1d0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use random"></i>
              fa-random
              
              <span className="text-grey">[&amp;#xf074;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use ravelry"></i>
              fa-ravelry
              
              <span className="text-grey">[&amp;#xf2d9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use rebel"></i>
              fa-rebel
              
              <span className="text-grey">[&amp;#xf1d0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use recycle"></i>
              fa-recycle
              
              <span className="text-grey">[&amp;#xf1b8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use reddit"></i>
              fa-reddit
              
              <span className="text-grey">[&amp;#xf1a1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use reddit-alien"></i>
              fa-reddit-alien
              
              <span className="text-grey">[&amp;#xf281;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use reddit-square"></i>
              fa-reddit-square
              
              <span className="text-grey">[&amp;#xf1a2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use refresh"></i>
              fa-refresh
              
              <span className="text-grey">[&amp;#xf021;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use registered"></i>
              fa-registered
              
              <span className="text-grey">[&amp;#xf25d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use remove"></i>
              fa-remove
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf00d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use renren"></i>
              fa-renren
              
              <span className="text-grey">[&amp;#xf18b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use reorder"></i>
              fa-reorder
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf0c9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use repeat"></i>
              fa-repeat
              
              <span className="text-grey">[&amp;#xf01e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use reply"></i>
              fa-reply
              
              <span className="text-grey">[&amp;#xf112;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use reply-all"></i>
              fa-reply-all
              
              <span className="text-grey">[&amp;#xf122;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use resistance"></i>
              fa-resistance
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1d0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use retweet"></i>
              fa-retweet
              
              <span className="text-grey">[&amp;#xf079;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use rmb"></i>
              fa-rmb
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf157;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use road"></i>
              fa-road
              
              <span className="text-grey">[&amp;#xf018;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use rocket"></i>
              fa-rocket
              
              <span className="text-grey">[&amp;#xf135;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use rotate-left"></i>
              fa-rotate-left
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf0e2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use rotate-right"></i>
              fa-rotate-right
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf01e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use rouble"></i>
              fa-rouble
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf158;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use rss"></i>
              fa-rss
              
              <span className="text-grey">[&amp;#xf09e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use rss-square"></i>
              fa-rss-square
              
              <span className="text-grey">[&amp;#xf143;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use rub"></i>
              fa-rub
              
              <span className="text-grey">[&amp;#xf158;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use ruble"></i>
              fa-ruble
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf158;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use rupee"></i>
              fa-rupee
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf156;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use s15"></i>
              fa-s15
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2cd;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use safari"></i>
              fa-safari
              
              <span className="text-grey">[&amp;#xf267;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use save"></i>
              fa-save
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf0c7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use scissors"></i>
              fa-scissors
              
              <span className="text-grey">[&amp;#xf0c4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use scribd"></i>
              fa-scribd
              
              <span className="text-grey">[&amp;#xf28a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use search"></i>
              fa-search
              
              <span className="text-grey">[&amp;#xf002;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use search-minus"></i>
              fa-search-minus
              
              <span className="text-grey">[&amp;#xf010;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use search-plus"></i>
              fa-search-plus
              
              <span className="text-grey">[&amp;#xf00e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sellsy"></i>
              fa-sellsy
              
              <span className="text-grey">[&amp;#xf213;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use send"></i>
              fa-send
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1d8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use send-o"></i>
              fa-send-o
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1d9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use server"></i>
              fa-server
              
              <span className="text-grey">[&amp;#xf233;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use share"></i>
              fa-share
              
              <span className="text-grey">[&amp;#xf064;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use share-alt"></i>
              fa-share-alt
              
              <span className="text-grey">[&amp;#xf1e0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use share-alt-square"></i>
              fa-share-alt-square
              
              <span className="text-grey">[&amp;#xf1e1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use share-square"></i>
              fa-share-square
              
              <span className="text-grey">[&amp;#xf14d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use share-square-o"></i>
              fa-share-square-o
              
              <span className="text-grey">[&amp;#xf045;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use shekel"></i>
              fa-shekel
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf20b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sheqel"></i>
              fa-sheqel
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf20b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use shield"></i>
              fa-shield
              
              <span className="text-grey">[&amp;#xf132;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use ship"></i>
              fa-ship
              
              <span className="text-grey">[&amp;#xf21a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use shirtsinbulk"></i>
              fa-shirtsinbulk
              
              <span className="text-grey">[&amp;#xf214;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use shopping-bag"></i>
              fa-shopping-bag
              
              <span className="text-grey">[&amp;#xf290;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use shopping-basket"></i>
              fa-shopping-basket
              
              <span className="text-grey">[&amp;#xf291;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use shopping-cart"></i>
              fa-shopping-cart
              
              <span className="text-grey">[&amp;#xf07a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use shower"></i>
              fa-shower
              
              <span className="text-grey">[&amp;#xf2cc;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sign-in"></i>
              fa-sign-in
              
              <span className="text-grey">[&amp;#xf090;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sign-language"></i>
              fa-sign-language
              
              <span className="text-grey">[&amp;#xf2a7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sign-out"></i>
              fa-sign-out
              
              <span className="text-grey">[&amp;#xf08b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use signal"></i>
              fa-signal
              
              <span className="text-grey">[&amp;#xf012;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use signing"></i>
              fa-signing
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2a7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use simplybuilt"></i>
              fa-simplybuilt
              
              <span className="text-grey">[&amp;#xf215;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sitemap"></i>
              fa-sitemap
              
              <span className="text-grey">[&amp;#xf0e8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use skyatlas"></i>
              fa-skyatlas
              
              <span className="text-grey">[&amp;#xf216;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use skype"></i>
              fa-skype
              
              <span className="text-grey">[&amp;#xf17e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use slack"></i>
              fa-slack
              
              <span className="text-grey">[&amp;#xf198;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sliders"></i>
              fa-sliders
              
              <span className="text-grey">[&amp;#xf1de;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use slideshare"></i>
              fa-slideshare
              
              <span className="text-grey">[&amp;#xf1e7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use smile-o"></i>
              fa-smile-o
              
              <span className="text-grey">[&amp;#xf118;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use snapchat"></i>
              fa-snapchat
              
              <span className="text-grey">[&amp;#xf2ab;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use snapchat-ghost"></i>
              fa-snapchat-ghost
              
              <span className="text-grey">[&amp;#xf2ac;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use snapchat-square"></i>
              fa-snapchat-square
              
              <span className="text-grey">[&amp;#xf2ad;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use snowflake-o"></i>
              fa-snowflake-o
              
              <span className="text-grey">[&amp;#xf2dc;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use soccer-ball-o"></i>
              fa-soccer-ball-o
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1e3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sort"></i>
              fa-sort
              
              <span className="text-grey">[&amp;#xf0dc;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sort-alpha-asc"></i>
              fa-sort-alpha-asc
              
              <span className="text-grey">[&amp;#xf15d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sort-alpha-desc"></i>
              fa-sort-alpha-desc
              
              <span className="text-grey">[&amp;#xf15e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sort-amount-asc"></i>
              fa-sort-amount-asc
              
              <span className="text-grey">[&amp;#xf160;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sort-amount-desc"></i>
              fa-sort-amount-desc
              
              <span className="text-grey">[&amp;#xf161;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sort-asc"></i>
              fa-sort-asc
              
              <span className="text-grey">[&amp;#xf0de;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sort-desc"></i>
              fa-sort-desc
              
              <span className="text-grey">[&amp;#xf0dd;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sort-down"></i>
              fa-sort-down
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf0dd;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sort-numeric-asc"></i>
              fa-sort-numeric-asc
              
              <span className="text-grey">[&amp;#xf162;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sort-numeric-desc"></i>
              fa-sort-numeric-desc
              
              <span className="text-grey">[&amp;#xf163;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sort-up"></i>
              fa-sort-up
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf0de;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use soundcloud"></i>
              fa-soundcloud
              
              <span className="text-grey">[&amp;#xf1be;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use space-shuttle"></i>
              fa-space-shuttle
              
              <span className="text-grey">[&amp;#xf197;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use spinner"></i>
              fa-spinner
              
              <span className="text-grey">[&amp;#xf110;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use spoon"></i>
              fa-spoon
              
              <span className="text-grey">[&amp;#xf1b1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use spotify"></i>
              fa-spotify
              
              <span className="text-grey">[&amp;#xf1bc;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use square"></i>
              fa-square
              
              <span className="text-grey">[&amp;#xf0c8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use square-o"></i>
              fa-square-o
              
              <span className="text-grey">[&amp;#xf096;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use stack-exchange"></i>
              fa-stack-exchange
              
              <span className="text-grey">[&amp;#xf18d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use stack-overflow"></i>
              fa-stack-overflow
              
              <span className="text-grey">[&amp;#xf16c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use star"></i>
              fa-star
              
              <span className="text-grey">[&amp;#xf005;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use star-half"></i>
              fa-star-half
              
              <span className="text-grey">[&amp;#xf089;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use star-half-empty"></i>
              fa-star-half-empty
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf123;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use star-half-full"></i>
              fa-star-half-full
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf123;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use star-half-o"></i>
              fa-star-half-o
              
              <span className="text-grey">[&amp;#xf123;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use star-o"></i>
              fa-star-o
              
              <span className="text-grey">[&amp;#xf006;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use steam"></i>
              fa-steam
              
              <span className="text-grey">[&amp;#xf1b6;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use steam-square"></i>
              fa-steam-square
              
              <span className="text-grey">[&amp;#xf1b7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use step-backward"></i>
              fa-step-backward
              
              <span className="text-grey">[&amp;#xf048;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use step-forward"></i>
              fa-step-forward
              
              <span className="text-grey">[&amp;#xf051;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use stethoscope"></i>
              fa-stethoscope
              
              <span className="text-grey">[&amp;#xf0f1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sticky-note"></i>
              fa-sticky-note
              
              <span className="text-grey">[&amp;#xf249;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sticky-note-o"></i>
              fa-sticky-note-o
              
              <span className="text-grey">[&amp;#xf24a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use stop"></i>
              fa-stop
              
              <span className="text-grey">[&amp;#xf04d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use stop-circle"></i>
              fa-stop-circle
              
              <span className="text-grey">[&amp;#xf28d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use stop-circle-o"></i>
              fa-stop-circle-o
              
              <span className="text-grey">[&amp;#xf28e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use street-view"></i>
              fa-street-view
              
              <span className="text-grey">[&amp;#xf21d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use strikethrough"></i>
              fa-strikethrough
              
              <span className="text-grey">[&amp;#xf0cc;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use stumbleupon"></i>
              fa-stumbleupon
              
              <span className="text-grey">[&amp;#xf1a4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use stumbleupon-circle"></i>
              fa-stumbleupon-circle
              
              <span className="text-grey">[&amp;#xf1a3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use subscript"></i>
              fa-subscript
              
              <span className="text-grey">[&amp;#xf12c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use subway"></i>
              fa-subway
              
              <span className="text-grey">[&amp;#xf239;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use suitcase"></i>
              fa-suitcase
              
              <span className="text-grey">[&amp;#xf0f2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use sun-o"></i>
              fa-sun-o
              
              <span className="text-grey">[&amp;#xf185;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use superpowers"></i>
              fa-superpowers
              
              <span className="text-grey">[&amp;#xf2dd;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use superscript"></i>
              fa-superscript
              
              <span className="text-grey">[&amp;#xf12b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use support"></i>
              fa-support
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1cd;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use table"></i>
              fa-table
              
              <span className="text-grey">[&amp;#xf0ce;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use tablet"></i>
              fa-tablet
              
              <span className="text-grey">[&amp;#xf10a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use tachometer"></i>
              fa-tachometer
              
              <span className="text-grey">[&amp;#xf0e4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use tag"></i>
              fa-tag
              
              <span className="text-grey">[&amp;#xf02b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use tags"></i>
              fa-tags
              
              <span className="text-grey">[&amp;#xf02c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use tasks"></i>
              fa-tasks
              
              <span className="text-grey">[&amp;#xf0ae;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use taxi"></i>
              fa-taxi
              
              <span className="text-grey">[&amp;#xf1ba;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use telegram"></i>
              fa-telegram
              
              <span className="text-grey">[&amp;#xf2c6;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use television"></i>
              fa-television
              
              <span className="text-grey">[&amp;#xf26c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use tencent-weibo"></i>
              fa-tencent-weibo
              
              <span className="text-grey">[&amp;#xf1d5;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use terminal"></i>
              fa-terminal
              
              <span className="text-grey">[&amp;#xf120;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use text-height"></i>
              fa-text-height
              
              <span className="text-grey">[&amp;#xf034;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use text-width"></i>
              fa-text-width
              
              <span className="text-grey">[&amp;#xf035;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use th"></i>
              fa-th
              
              <span className="text-grey">[&amp;#xf00a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use th-large"></i>
              fa-th-large
              
              <span className="text-grey">[&amp;#xf009;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use th-list"></i>
              fa-th-list
              
              <span className="text-grey">[&amp;#xf00b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use themeisle"></i>
              fa-themeisle
              
              <span className="text-grey">[&amp;#xf2b2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use thermometer"></i>
              fa-thermometer
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2c7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use thermometer-0"></i>
              fa-thermometer-0
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2cb;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use thermometer-1"></i>
              fa-thermometer-1
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2ca;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use thermometer-2"></i>
              fa-thermometer-2
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2c9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use thermometer-3"></i>
              fa-thermometer-3
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2c8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use thermometer-4"></i>
              fa-thermometer-4
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2c7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use thermometer-empty"></i>
              fa-thermometer-empty
              
              <span className="text-grey">[&amp;#xf2cb;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use thermometer-full"></i>
              fa-thermometer-full
              
              <span className="text-grey">[&amp;#xf2c7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use thermometer-half"></i>
              fa-thermometer-half
              
              <span className="text-grey">[&amp;#xf2c9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use thermometer-quarter"></i>
              fa-thermometer-quarter
              
              <span className="text-grey">[&amp;#xf2ca;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use thermometer-three-quarters"></i>
              fa-thermometer-three-quarters
              
              <span className="text-grey">[&amp;#xf2c8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use thumb-tack"></i>
              fa-thumb-tack
              
              <span className="text-grey">[&amp;#xf08d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use thumbs-down"></i>
              fa-thumbs-down
              
              <span className="text-grey">[&amp;#xf165;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use thumbs-o-down"></i>
              fa-thumbs-o-down
              
              <span className="text-grey">[&amp;#xf088;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use thumbs-o-up"></i>
              fa-thumbs-o-up
              
              <span className="text-grey">[&amp;#xf087;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use thumbs-up"></i>
              fa-thumbs-up
              
              <span className="text-grey">[&amp;#xf164;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use ticket"></i>
              fa-ticket
              
              <span className="text-grey">[&amp;#xf145;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use times"></i>
              fa-times
              
              <span className="text-grey">[&amp;#xf00d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use times-circle"></i>
              fa-times-circle
              
              <span className="text-grey">[&amp;#xf057;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use times-circle-o"></i>
              fa-times-circle-o
              
              <span className="text-grey">[&amp;#xf05c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use times-rectangle"></i>
              fa-times-rectangle
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2d3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use times-rectangle-o"></i>
              fa-times-rectangle-o
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2d4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use tint"></i>
              fa-tint
              
              <span className="text-grey">[&amp;#xf043;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use toggle-down"></i>
              fa-toggle-down
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf150;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use toggle-left"></i>
              fa-toggle-left
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf191;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use toggle-off"></i>
              fa-toggle-off
              
              <span className="text-grey">[&amp;#xf204;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use toggle-on"></i>
              fa-toggle-on
              
              <span className="text-grey">[&amp;#xf205;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use toggle-right"></i>
              fa-toggle-right
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf152;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use toggle-up"></i>
              fa-toggle-up
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf151;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use trademark"></i>
              fa-trademark
              
              <span className="text-grey">[&amp;#xf25c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use train"></i>
              fa-train
              
              <span className="text-grey">[&amp;#xf238;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use transgender"></i>
              fa-transgender
              
              <span className="text-grey">[&amp;#xf224;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use transgender-alt"></i>
              fa-transgender-alt
              
              <span className="text-grey">[&amp;#xf225;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use trash"></i>
              fa-trash
              
              <span className="text-grey">[&amp;#xf1f8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use trash-o"></i>
              fa-trash-o
              
              <span className="text-grey">[&amp;#xf014;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use tree"></i>
              fa-tree
              
              <span className="text-grey">[&amp;#xf1bb;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use trello"></i>
              fa-trello
              
              <span className="text-grey">[&amp;#xf181;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use tripadvisor"></i>
              fa-tripadvisor
              
              <span className="text-grey">[&amp;#xf262;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use trophy"></i>
              fa-trophy
              
              <span className="text-grey">[&amp;#xf091;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use truck"></i>
              fa-truck
              
              <span className="text-grey">[&amp;#xf0d1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use try"></i>
              fa-try
              
              <span className="text-grey">[&amp;#xf195;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use tty"></i>
              fa-tty
              
              <span className="text-grey">[&amp;#xf1e4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use tumblr"></i>
              fa-tumblr
              
              <span className="text-grey">[&amp;#xf173;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use tumblr-square"></i>
              fa-tumblr-square
              
              <span className="text-grey">[&amp;#xf174;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use turkish-lira"></i>
              fa-turkish-lira
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf195;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use tv"></i>
              fa-tv
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf26c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use twitch"></i>
              fa-twitch
              
              <span className="text-grey">[&amp;#xf1e8;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use twitter"></i>
              fa-twitter
              
              <span className="text-grey">[&amp;#xf099;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use twitter-square"></i>
              fa-twitter-square
              
              <span className="text-grey">[&amp;#xf081;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use umbrella"></i>
              fa-umbrella
              
              <span className="text-grey">[&amp;#xf0e9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use underline"></i>
              fa-underline
              
              <span className="text-grey">[&amp;#xf0cd;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use undo"></i>
              fa-undo
              
              <span className="text-grey">[&amp;#xf0e2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use universal-access"></i>
              fa-universal-access
              
              <span className="text-grey">[&amp;#xf29a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use university"></i>
              fa-university
              
              <span className="text-grey">[&amp;#xf19c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use unlink"></i>
              fa-unlink
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf127;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use unlock"></i>
              fa-unlock
              
              <span className="text-grey">[&amp;#xf09c;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use unlock-alt"></i>
              fa-unlock-alt
              
              <span className="text-grey">[&amp;#xf13e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use unsorted"></i>
              fa-unsorted
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf0dc;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use upload"></i>
              fa-upload
              
              <span className="text-grey">[&amp;#xf093;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.5</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use usb"></i>
              fa-usb
              
              <span className="text-grey">[&amp;#xf287;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use usd"></i>
              fa-usd
              
              <span className="text-grey">[&amp;#xf155;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use user"></i>
              fa-user
              
              <span className="text-grey">[&amp;#xf007;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use user-circle"></i>
              fa-user-circle
              
              <span className="text-grey">[&amp;#xf2bd;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use user-circle-o"></i>
              fa-user-circle-o
              
              <span className="text-grey">[&amp;#xf2be;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use user-md"></i>
              fa-user-md
              
              <span className="text-grey">[&amp;#xf0f0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use user-o"></i>
              fa-user-o
              
              <span className="text-grey">[&amp;#xf2c0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use user-plus"></i>
              fa-user-plus
              
              <span className="text-grey">[&amp;#xf234;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use user-secret"></i>
              fa-user-secret
              
              <span className="text-grey">[&amp;#xf21b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use user-times"></i>
              fa-user-times
              
              <span className="text-grey">[&amp;#xf235;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use users"></i>
              fa-users
              
              <span className="text-grey">[&amp;#xf0c0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use vcard"></i>
              fa-vcard
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2bb;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use vcard-o"></i>
              fa-vcard-o
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf2bc;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use venus"></i>
              fa-venus
              
              <span className="text-grey">[&amp;#xf221;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use venus-double"></i>
              fa-venus-double
              
              <span className="text-grey">[&amp;#xf226;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use venus-mars"></i>
              fa-venus-mars
              
              <span className="text-grey">[&amp;#xf228;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use viacoin"></i>
              fa-viacoin
              
              <span className="text-grey">[&amp;#xf237;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use viadeo"></i>
              fa-viadeo
              
              <span className="text-grey">[&amp;#xf2a9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use viadeo-square"></i>
              fa-viadeo-square
              
              <span className="text-grey">[&amp;#xf2aa;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use video-camera"></i>
              fa-video-camera
              
              <span className="text-grey">[&amp;#xf03d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use vimeo"></i>
              fa-vimeo
              
              <span className="text-grey">[&amp;#xf27d;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use vimeo-square"></i>
              fa-vimeo-square
              
              <span className="text-grey">[&amp;#xf194;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use vine"></i>
              fa-vine
              
              <span className="text-grey">[&amp;#xf1ca;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use vk"></i>
              fa-vk
              
              <span className="text-grey">[&amp;#xf189;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use volume-control-phone"></i>
              fa-volume-control-phone
              
              <span className="text-grey">[&amp;#xf2a0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use volume-down"></i>
              fa-volume-down
              
              <span className="text-grey">[&amp;#xf027;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use volume-off"></i>
              fa-volume-off
              
              <span className="text-grey">[&amp;#xf026;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use volume-up"></i>
              fa-volume-up
              
              <span className="text-grey">[&amp;#xf028;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use warning"></i>
              fa-warning
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf071;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use wechat"></i>
              fa-wechat
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1d7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use weibo"></i>
              fa-weibo
              
              <span className="text-grey">[&amp;#xf18a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use weixin"></i>
              fa-weixin
              
              <span className="text-grey">[&amp;#xf1d7;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.3</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use whatsapp"></i>
              fa-whatsapp
              
              <span className="text-grey">[&amp;#xf232;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.0</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use wheelchair"></i>
              fa-wheelchair
              
              <span className="text-grey">[&amp;#xf193;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use wheelchair-alt"></i>
              fa-wheelchair-alt
              
              <span className="text-grey">[&amp;#xf29b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use wifi"></i>
              fa-wifi
              
              <span className="text-grey">[&amp;#xf1eb;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use wikipedia-w"></i>
              fa-wikipedia-w
              
              <span className="text-grey">[&amp;#xf266;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use window-close"></i>
              fa-window-close
              
              <span className="text-grey">[&amp;#xf2d3;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use window-close-o"></i>
              fa-window-close-o
              
              <span className="text-grey">[&amp;#xf2d4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use window-maximize"></i>
              fa-window-maximize
              
              <span className="text-grey">[&amp;#xf2d0;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use window-minimize"></i>
              fa-window-minimize
              
              <span className="text-grey">[&amp;#xf2d1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use window-restore"></i>
              fa-window-restore
              
              <span className="text-grey">[&amp;#xf2d2;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use windows"></i>
              fa-windows
              
              <span className="text-grey">[&amp;#xf17a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use won"></i>
              fa-won
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf159;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use wordpress"></i>
              fa-wordpress
              
              <span className="text-grey">[&amp;#xf19a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use wpbeginner"></i>
              fa-wpbeginner
              
              <span className="text-grey">[&amp;#xf297;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.7</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use wpexplorer"></i>
              fa-wpexplorer
              
              <span className="text-grey">[&amp;#xf2de;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use wpforms"></i>
              fa-wpforms
              
              <span className="text-grey">[&amp;#xf298;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use wrench"></i>
              fa-wrench
              
              <span className="text-grey">[&amp;#xf0ad;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use xing"></i>
              fa-xing
              
              <span className="text-grey">[&amp;#xf168;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use xing-square"></i>
              fa-xing-square
              
              <span className="text-grey">[&amp;#xf169;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use y-combinator"></i>
              fa-y-combinator
              
              <span className="text-grey">[&amp;#xf23b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use y-combinator-square"></i>
              fa-y-combinator-square
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1d4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use yahoo"></i>
              fa-yahoo
              
              <span className="text-grey">[&amp;#xf19e;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.4</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use yc"></i>
              fa-yc
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf23b;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.1</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use yc-square"></i>
              fa-yc-square
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf1d4;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.2</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use yelp"></i>
              fa-yelp
              
              <span className="text-grey">[&amp;#xf1e9;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use yen"></i>
              fa-yen
               <span className="text-grey">(alias)</span>
              <span className="text-grey">[&amp;#xf157;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              <small className="text-grey pull-right">4.6</small>
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use yoast"></i>
              fa-yoast
              
              <span className="text-grey">[&amp;#xf2b1;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use youtube"></i>
              fa-youtube
              
              <span className="text-grey">[&amp;#xf167;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use youtube-play"></i>
              fa-youtube-play
              
              <span className="text-grey">[&amp;#xf16a;]</span>
            </div>
            
            <div className="col-lg-4 col-md-6 demo-icon-wrap">
              
              <i className="fa fa-fw" aria-hidden="true" title="Copy to use youtube-square"></i>
              fa-youtube-square
              
              <span className="text-grey">[&amp;#xf166;]</span>
            </div>
    </div>
  </section>

  <Footer />
</div>

);
export default fontawesome;