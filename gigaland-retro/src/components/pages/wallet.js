import React from 'react';
import Wallet from '../components/wallet';
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

const wallet= () => (
<div>
<GlobalStyles/>
  <section className='jumbotron breadcumb no-bg' >
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row m-10-hor'>
          <div className='col-12'>
            <h1 className='text-center'>Wallet</h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container'>
    <Wallet/>
  </section>

  <Footer />
</div>

);
export default wallet;