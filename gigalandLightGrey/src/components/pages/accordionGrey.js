import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from '../components/footer';
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

const accordion= () => (
<div className="greyscheme">
<GlobalStyles/>

  <section className='jumbotron breadcumb no-bg'>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row m-10-hor'>
          <div className='col-12'>
            <h1 className='text-center'>Accordion</h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container'>
    <div className='row'>

      <div className='col-md-6 mb-5'>
      <h3>Default</h3>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Accordion Item #1
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <strong>This is the first item's accordion body.</strong> 
              It is shown by default, until the collapse 
              plugin adds the appropriate classes that 
              we use to style each element. 
              These classes control the overall appearance, 
              as well as the showing and hiding via CSS transitions. 
              You can modify any of this with custom CSS or 
              overriding our default variables. </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Accordion Item #2
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body> <strong>This is the first item's accordion body.</strong> 
              It is shown by default, until the collapse 
              plugin adds the appropriate classes that 
              we use to style each element. 
              These classes control the overall appearance, 
              as well as the showing and hiding via CSS transitions. 
              You can modify any of this with custom CSS or 
              overriding our default variables.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Accordion Item #3
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body> <strong>This is the first item's accordion body.</strong> 
              It is shown by default, until the collapse 
              plugin adds the appropriate classes that 
              we use to style each element. 
              These classes control the overall appearance, 
              as well as the showing and hiding via CSS transitions. 
              You can modify any of this with custom CSS or 
              overriding our default variables.</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>

      <div className='col-md-6'>
      <h3>Full Hide</h3>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Accordion Item #1
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <strong>This is the first item's accordion body.</strong> 
              It is shown by default, until the collapse 
              plugin adds the appropriate classes that 
              we use to style each element. 
              These classes control the overall appearance, 
              as well as the showing and hiding via CSS transitions. 
              You can modify any of this with custom CSS or 
              overriding our default variables. </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Accordion Item #2
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body> <strong>This is the first item's accordion body.</strong> 
              It is shown by default, until the collapse 
              plugin adds the appropriate classes that 
              we use to style each element. 
              These classes control the overall appearance, 
              as well as the showing and hiding via CSS transitions. 
              You can modify any of this with custom CSS or 
              overriding our default variables.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Accordion Item #3
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body> <strong>This is the first item's accordion body.</strong> 
              It is shown by default, until the collapse 
              plugin adds the appropriate classes that 
              we use to style each element. 
              These classes control the overall appearance, 
              as well as the showing and hiding via CSS transitions. 
              You can modify any of this with custom CSS or 
              overriding our default variables.</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>

    </div>
  </section>

  <Footer />
</div>

);
export default accordion;