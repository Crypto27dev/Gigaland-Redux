import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import { header } from 'react-bootstrap';
import { Link } from '@reach/router';
import useOnclickOutside from "react-cool-onclickoutside";


setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const NavLink = props => (
  <Link 
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);



const Header= function() {

    const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu1, setOpenMenu1] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);
    const [openMenu3, setOpenMenu3] = React.useState(false);
    const handleBtnClick = () => {
      setOpenMenu(!openMenu);
    };
    const handleBtnClick1 = () => {
      setOpenMenu1(!openMenu1);
    };
    const handleBtnClick2 = () => {
      setOpenMenu2(!openMenu2);
    };
    const handleBtnClick3 = () => {
      setOpenMenu3(!openMenu3);
    };
    const closeMenu = () => {
      setOpenMenu(false);
    };
    const closeMenu1 = () => {
      setOpenMenu1(false);
    };
    const closeMenu2 = () => {
      setOpenMenu2(false);
    };
    const closeMenu3 = () => {
      setOpenMenu3(false);
    };

    const ref = useOnclickOutside(() => {
      closeMenu();
    });
    const ref1 = useOnclickOutside(() => {
      closeMenu1();
    });
    const ref2 = useOnclickOutside(() => {
      closeMenu2();
    });
    const ref3 = useOnclickOutside(() => {
      closeMenu3();
    });
    

    const [showmenu, btn_icon] = useState(false);
    const [showpop, btn_icon_pop] = useState(false);
    const [shownot, btn_icon_not] = useState(false);
    const closePop = () => {
      btn_icon_pop(false);
    };
    const closeNot = () => {
      btn_icon_not(false);
    };
    const refpop = useOnclickOutside(() => {
      closePop();
    });
    const refpopnot = useOnclickOutside(() => {
      closeNot();
    });

    useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
        btn_icon(false);
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          totop.classList.add("show");
          
        } else {
          header.classList.remove("sticky");
          totop.classList.remove("show");
        } if (window.pageYOffset > sticky) {
          closeMenu();
        }
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);
    return (
    <header id="myHeader" className='navbar white'>
     <div className='container'>
       <div className='row w-100-nav'>
          <div className='logo px-0'>
              <div className='navbar-title navbar-item'>
                <NavLink to="/">
                <img
                    src="/img/logo.png"
                    className="img-fluid d-block"
                    alt="#"
                  />
                  <img
                    src="/img/logo-2.png"
                    className="img-fluid d-3"
                    alt="#"
                  />
                  <img
                    src="/img/logo-3.png"
                    className="img-fluid d-4"
                    alt="#"
                  />
                  <img
                    src="/img/logo-light.png"
                    className="img-fluid d-none"
                    alt="#"
                  />
                </NavLink>
              </div>
          </div>

          <div className='search'>
            <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
          </div>
                    
              <BreakpointProvider>
                <Breakpoint l down>
                  {showmenu && 
                  <div className='menu'>
                    <div className='navbar-item'>
                      <div ref={ref}>
                        <div className="dropdown-custom dropdown-toggle btn" 
                          onClick={handleBtnClick}
                          >
                          Home
                        </div>
                        {openMenu && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu}>
                              <NavLink to="/homeGrey" onClick={() => btn_icon(!showmenu)}>Homepage Grey</NavLink>
                              <NavLink to="/" onClick={() => btn_icon(!showmenu)}>Homepage</NavLink>
                              <NavLink to="/home1" onClick={() => btn_icon(!showmenu)}>Homepage 1</NavLink>
                              <NavLink to="/home1Grey" onClick={() => btn_icon(!showmenu)}>Homepage 1 Grey</NavLink>
                              <NavLink to="/home2" onClick={() => btn_icon(!showmenu)}>Homepage 2</NavLink>
                              <NavLink to="/home2Grey" onClick={() => btn_icon(!showmenu)}>Homepage 2 Grey</NavLink>
                              <NavLink to="/home3" onClick={() => btn_icon(!showmenu)}>Homepage 3</NavLink>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref1}>
                        <div className="dropdown-custom dropdown-toggle btn" 
                          onClick={handleBtnClick1}
                          >
                          Explore
                        </div>
                        {openMenu1 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu1}>
                              <NavLink to="/explore" onClick={() => btn_icon(!showmenu)}>Explore</NavLink>
                              <NavLink to="/explore2" onClick={() => btn_icon(!showmenu)}>Explore 2</NavLink>
                              <NavLink to="/rangking" onClick={() => btn_icon(!showmenu)}>Rangking</NavLink>
                              <NavLink to="/colection/1" onClick={() => btn_icon(!showmenu)}>Collection</NavLink>
                              <NavLink to="/ItemDetail/1" onClick={() => btn_icon(!showmenu)}>Items Details</NavLink>
                              <NavLink to="/ItemDetailGrey/1" onClick={() => btn_icon(!showmenu)}>Items Details Grey</NavLink>
                              <NavLink to="/Auction" onClick={() => btn_icon(!showmenu)}>Live Auction</NavLink>
                              <NavLink to="/AuctionGrey" onClick={() => btn_icon(!showmenu)}>Live Auction Grey</NavLink>
                              <NavLink to="/helpcenter" onClick={() => btn_icon(!showmenu)}>Help Center</NavLink>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref2}>
                        <div className="dropdown-custom dropdown-toggle btn" 
                          onClick={handleBtnClick2}
                          >
                          Pages
                        </div>
                        {openMenu2 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu2}>
                              <NavLink to="/Author/1" onClick={() => btn_icon(!showmenu)}>Author</NavLink>
                              <NavLink to="/AuthorGrey/1" onClick={() => btn_icon(!showmenu)}>Author Grey</NavLink>
                              <NavLink to="/wallet" onClick={() => btn_icon(!showmenu)}>Wallet</NavLink>
                              <NavLink to="/create" onClick={() => btn_icon(!showmenu)}>Create</NavLink>
                              <NavLink to="/create2" onClick={() => btn_icon(!showmenu)}>Create 2</NavLink>
                              <NavLink to="/createOptions" onClick={() => btn_icon(!showmenu)}>Create options</NavLink>
                              <NavLink to="/mint" onClick={() => btn_icon(!showmenu)}>Nft Minting</NavLink>
                              <NavLink to="/minter" onClick={() => btn_icon(!showmenu)}>Nft Minting Grey</NavLink>
                              <NavLink to="/news" onClick={() => btn_icon(!showmenu)}>News</NavLink>
                              <NavLink to="/works" onClick={() => btn_icon(!showmenu)}>Gallery</NavLink>
                              <NavLink to="/login" onClick={() => btn_icon(!showmenu)}>login</NavLink>
                              <NavLink to="/loginTwo" onClick={() => btn_icon(!showmenu)}>login 2</NavLink>
                              <NavLink to="/register" onClick={() => btn_icon(!showmenu)}>Register</NavLink>
                              <NavLink to="/contact" onClick={() => btn_icon(!showmenu)}>Contact Us</NavLink>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/activity" onClick={() => btn_icon(!showmenu)}>
                        Activity
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref3}>
                        <div className="dropdown-custom dropdown-toggle btn" 
                          onClick={handleBtnClick3}
                          >
                          Element
                        </div>
                        {openMenu3 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu3}>
                              <NavLink to="/elegantIcons" onClick={() => btn_icon(!showmenu)}>Elegant Icon</NavLink>
                              <NavLink to="/etlineIcons" onClick={() => btn_icon(!showmenu)}>Etline Icon</NavLink>
                              <NavLink to="/fontAwesomeIcons" onClick={() => btn_icon(!showmenu)}>Font Awesome Icon</NavLink>
                              <NavLink to="/accordion" onClick={() => btn_icon(!showmenu)}>Accordion</NavLink>
                              <NavLink to="/alerts" onClick={() => btn_icon(!showmenu)}>Alerts</NavLink>
                              <NavLink to="/price" onClick={() => btn_icon(!showmenu)}>Pricing Table</NavLink>
                              <NavLink to="/progressbar" onClick={() => btn_icon(!showmenu)}>Progress bar</NavLink>
                              <NavLink to="/tabs" onClick={() => btn_icon(!showmenu)}>Tabs</NavLink>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  }
                </Breakpoint>

                <Breakpoint xl>
                  <div className='menu'>
                    <div className='navbar-item'>
                        <div ref={ref}>
                          <div className="dropdown-custom dropdown-toggle btn" 
                             onMouseEnter={handleBtnClick} onMouseLeave={closeMenu}>
                            Home
                            <span className='lines'></span>
                            {openMenu && (
                            <div className='item-dropdown'>
                              <div className="dropdown" onClick={closeMenu}>
                                <NavLink to="/homeGrey">Homepage Grey</NavLink>
                                <NavLink to="/">Homepage</NavLink>
                                <NavLink to="/home1">Homepage 1</NavLink>
                                <NavLink to="/home1Grey">Homepage 1 Grey</NavLink>
                                <NavLink to="/home2">Homepage 2</NavLink>
                                <NavLink to="/home2Grey">Homepage 2 Grey</NavLink>
                                <NavLink to="/home3">Homepage 3</NavLink>
                              </div>
                            </div>
                          )}
                          </div>
                          
                        </div>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref1}>
                          <div className="dropdown-custom dropdown-toggle btn" 
                             onMouseEnter={handleBtnClick1} onMouseLeave={closeMenu1}>
                            Explore
                            <span className='lines'></span>
                            {openMenu1 && (
                            <div className='item-dropdown'>
                              <div className="dropdown" onClick={closeMenu1}>
                              <NavLink to="/explore">Explore</NavLink>
                              <NavLink to="/exploreGrey">Explore Grey</NavLink>
                              <NavLink to="/explore2">Explore 2</NavLink>
                              <NavLink to="/explore2Grey">Explore 2 Grey</NavLink>
                              <NavLink to="/rangking">Rangking</NavLink>
                              <NavLink to="/rangkingGrey">Rangking Grey</NavLink>
                              <NavLink to="/colection/1">Collection</NavLink>
                              <NavLink to="/colectionGrey/1">Collection Grey</NavLink>
                              <NavLink to="/ItemDetail/1">Items Details</NavLink>
                              <NavLink to="/ItemDetailGrey/1">Items Details Grey</NavLink>
                              <NavLink to="/Auction">Live Auction</NavLink>
                              <NavLink to="/AuctionGrey">Live Auction Grey</NavLink>
                              <NavLink to="/helpcenter">Help Center</NavLink>
                              <NavLink to="/helpcenterGrey">Help Center Grey</NavLink>
                              </div>
                            </div>
                          )}
                          </div>
                          
                        </div>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref2}>
                          <div className="dropdown-custom dropdown-toggle btn" 
                             onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>
                            Pages
                            <span className='lines'></span>
                            {openMenu2 && (
                            <div className='item-dropdown'>
                              <div className="dropdown" onClick={closeMenu2}>
                              <NavLink to="/Author/1">Author</NavLink>
                              <NavLink to="/AuthorGrey/1">Author Grey</NavLink>
                              <NavLink to="/wallet">Wallet</NavLink>
                              <NavLink to="/create">Create</NavLink>
                              <NavLink to="/createGrey">Create Grey</NavLink>
                              <NavLink to="/create2">Create 2</NavLink>
                              <NavLink to="/createOptions">Create Option</NavLink>
                              <NavLink to="/mint">Nft Minting</NavLink>
                              <NavLink to="/minter">Nft Minting Grey</NavLink>
                              <NavLink to="/news">News</NavLink>
                              <NavLink to="/works">Gallery</NavLink>
                              <NavLink to="/login">login</NavLink>
                              <NavLink to="/loginTwo">login 2</NavLink>
                              <NavLink to="/register">Register</NavLink>
                              <NavLink to="/contact">Contact Us</NavLink>
                              </div>
                            </div>
                          )}
                          </div>
                        </div>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/activity">
                      Activity
                      <span className='lines'></span>
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref3}>
                          <div className="dropdown-custom dropdown-toggle btn" 
                             onMouseEnter={handleBtnClick3} onMouseLeave={closeMenu3}>
                            Elements
                            <span className='lines'></span>
                            {openMenu3 && (
                            <div className='item-dropdown'>
                              <div className="dropdown" onClick={closeMenu3}>
                              <NavLink to="/elegantIcons">Elegant Icon</NavLink>
                              <NavLink to="/etlineIcons">Etline Icon</NavLink>
                              <NavLink to="/fontAwesomeIcons">Font Awesome Icon</NavLink>
                              <NavLink to="/accordion">Accordion</NavLink>
                              <NavLink to="/alerts">Alerts</NavLink>
                              <NavLink to="/price">Pricing Table</NavLink>
                              <NavLink to="/progressbar">Progess Bar</NavLink>
                              <NavLink to="/tabs">Tabs</NavLink>
                              </div>
                            </div>
                          )}
                          </div>
                        </div>
                    </div>
                  </div>
                </Breakpoint>
              </BreakpointProvider>

              <div className='mainside'>
                <div className='connect-wal'>
                  <NavLink to="/wallet">Connect Wallet</NavLink>
                </div>
                <div className="logout">
                  <NavLink to="/createOptions">Create</NavLink>
                  <div id="de-click-menu-notification" className="de-menu-notification" onClick={() => btn_icon_not(!shownot)} ref={refpopnot}>
                      <div className="d-count">8</div>
                      <i className="fa fa-bell"></i>
                      {shownot && 
                        <div className="popshow">
                          <div className="de-flex">
                              <h4>Notifications</h4>
                              <span className="viewaall">Show all</span>
                          </div>
                          <ul>
                            <li>
                                <div className="mainnot">
                                    <img className="lazy" src="../../img/author/author-2.jpg" alt=""/>>
                                    <div className="d-desc">
                                        <span className="d-name"><b>Mamie Barnett</b> started following you</span>
                                        <span className="d-time">1 hour ago</span>
                                    </div>
                                </div>  
                            </li>
                            <li>
                                <div className="mainnot">
                                    <img className="lazy" src="../../img/author/author-3.jpg" alt=""/>>
                                    <div className="d-desc">
                                        <span className="d-name"><b>Nicholas Daniels</b> liked your item</span>
                                        <span className="d-time">2 hours ago</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="mainnot">
                                    <img className="lazy" src="../../img/author/author-4.jpg" alt=""/>>
                                    <div className="d-desc">
                                        <span className="d-name"><b>Lori Hart</b> started following you</span>
                                        <span className="d-time">18 hours ago</span>
                                    </div>
                                </div>    
                            </li>
                            <li>
                                <div className="mainnot">
                                    <img className="lazy" src="../../img/author/author-5.jpg" alt=""/>>
                                    <div className="d-desc">
                                        <span className="d-name"><b>Jimmy Wright</b> liked your item</span>
                                        <span className="d-time">1 day ago</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="mainnot">
                                    <img className="lazy" src="../../img/author/author-6.jpg" alt=""/>>
                                    <div className="d-desc">
                                        <span className="d-name"><b>Karla Sharp</b> started following you</span>
                                        <span className="d-time">3 days ago</span>
                                    </div>
                                </div>    
                            </li>
                        </ul>
                        </div>
                        }
                  </div>
                  <div id="de-click-menu-profile" className="de-menu-profile" onClick={() => btn_icon_pop(!showpop)} ref={refpop}>                           
                      <img src="../../img/author_single/author_thumbnail.jpg" alt=""/>
                      {showpop && 
                        <div className="popshow">
                          <div className="d-name">
                              <h4>Monica Lucas</h4>
                              <span className="name" onClick={()=> window.open("", "_self")}>Set display name</span>
                          </div>
                          <div className="d-balance">
                              <h4>Balance</h4>
                              12.858 ETH
                          </div>
                          <div className="d-wallet">
                              <h4>My Wallet</h4>
                              <span id="wallet" className="d-wallet-address">DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME</span>
                              <button id="btn_copy" title="Copy Text">Copy</button>
                          </div>
                          <div className="d-line"></div>
                          <ul className="de-submenu-profile">
                            <li>
                              <span>
                                <i className="fa fa-user"></i> My profile
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-pencil"></i> Edit profile
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-sign-out"></i> Sign out
                              </span>
                            </li>
                          </ul>
                        </div>
                      }
                  </div>
                </div>
              </div>
                  
      </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>     
    </header>
    );
}
export default Header;