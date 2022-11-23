import React, { Component } from "react";
import { Link } from '@reach/router';
import Footer from '../components/footer';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  .mainside{
    .connect-wal{
      display: none;
    }
    .logout{
      display: flex;
      align-items: center;
    }
  }
`;


export default class Createpage extends Component {



render() {
    return (
      <div>
        <GlobalStyles/>
        <section className='jumbotron breadcumb no-bg'>
          <div className='mainbreadcumb'>
            <div className='container'>
              <div className='row m-10-hor'>
                <div className='col-12'>
                  <h1 className='text-center'>Create Collectible</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='container'>
          <div className='row'>
            <div className="col-md-6 offset-md-3">
                <p>Choose "Single" if you want your collectible to be one of a kind or "Multiple" if you want to sell one collectible times</p>
                <Link to="/createSingle" className="opt-create">
                    <img src="./img/misc/coll-single.png" alt=""/>
                    <h3>Single</h3>
                </Link>
                <Link to="/createMulti" className="opt-create">
                    <img src="./img/misc/coll-multiple.png" alt=""/>
                    <h3>Multiple</h3>
                </Link>
            </div>
          </div>
        </section>

       

        <Footer />
      </div>
   );
  }
}