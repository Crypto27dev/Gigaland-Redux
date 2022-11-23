import React from 'react';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
import Home from './pages/home';
import Home1 from './pages/home1';
import Home2 from './pages/home2';
import Explore from './pages/explore';
import Explore2 from './pages/explore2';
import Helpcenter from './pages/helpcenter';
// import Rangking from './pages/rangking';
import RankingRedux from './pages/RankingRedux';
import Colection from './pages/colection';
// import ItemDetail from './pages/ItemDetail';
import ItemDetailRedux from './pages/ItemDetailRedux';
import Author from './pages/Author';
import Wallet from './pages/wallet';
import Login from './pages/login';
import LoginTwo from './pages/loginTwo';
import Register from './pages/register';
import Price from './pages/price';
import Works from './pages/works';
import News from './pages/news';
import NewsSingle from './pages/newsSingle';
import Create from './pages/create';
import Create2 from './pages/create2';
import Create3 from './pages/create3';
import Createoption from './pages/createOptions';
import Auction from './pages/Auction';
import Activity from './pages/activity';
import Contact from './pages/contact';
import ElegantIcons from './pages/elegantIcons';
import EtlineIcons from './pages/etlineIcons';
import FontAwesomeIcons from './pages/fontAwesomeIcons';
import Accordion from './pages/accordion';
import Alerts from './pages/alerts';
import Progressbar from './pages/progressbar';
import Tabs from './pages/tabs';
import Minter from './pages/Minter';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0,0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);

const app= () => (
  <div className="wraper">
  <GlobalStyles />
    <Header/>
      <PosedRouter>
      <ScrollTop path="/">
        <Home exact path="/">
          <Redirect to="/home" />
        </Home>
        <Home1 path="/home1" />
        <Home2 path="/home2" />
        <Explore path="/explore" />
        <Explore2 path="/explore2" />
        <Helpcenter path="/helpcenter" />
        <RankingRedux path="/rangking" />
        <Colection path="/colection/:collectionId" />
        <ItemDetailRedux path="/ItemDetail/:nftId" />
        <Author path="/Author/:authorId" />
        <Wallet path="/wallet" />
        <Login path="/login" />
        <LoginTwo path="/loginTwo" />
        <Register path="/register" />
        <Price path="/price" />
        <Works path="/works" />
        <News path="/news" />
        <NewsSingle path="/news/1" />
        <Create path="/create" />
        <Create2 path="/createSingle" />
        <Create3 path="/createMulti" />
        <Createoption path="/createOption" />
        <Auction path="/Auction" />
        <Activity path="/activity" />
        <Contact path="/contact" />
        <ElegantIcons path="/elegantIcons" />
        <EtlineIcons path="/etlineIcons" />
        <FontAwesomeIcons path="/fontAwesomeIcons" />
        <Accordion path="/accordion" />
        <Alerts path="/alerts" />
        <Progressbar path="/progressbar" />
        <Tabs path="/tabs" />
        <Minter path="/mint" />
        </ScrollTop>
      </PosedRouter>
    <ScrollToTopBtn />
    
  </div>
);
export default app;