import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ColumnNewRedux from '../components/ColumnNewRedux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import * as selectors from '../../store/selectors';
import { fetchHotCollections } from "../../store/actions/thunks";
import api from "../../core/api";

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

const Colection= function({ collectionId = 1 }) {
const [openMenu, setOpenMenu] = React.useState(true);
const [openMenu1, setOpenMenu1] = React.useState(false);
const handleBtnClick = () => {
  setOpenMenu(!openMenu);
  setOpenMenu1(false);
  document.getElementById("Mainbtn").classList.add("active");
  document.getElementById("Mainbtn1").classList.remove("active");
};
const handleBtnClick1 = () => {
  setOpenMenu1(!openMenu1);
  setOpenMenu(false);
  document.getElementById("Mainbtn1").classList.add("active");
  document.getElementById("Mainbtn").classList.remove("active");
};

const dispatch = useDispatch();
const hotCollectionsState = useSelector(selectors.hotCollectionsState);
const hotCollections = hotCollectionsState.data ? hotCollectionsState.data[0] : {};

useEffect(() => {
    dispatch(fetchHotCollections(collectionId));
}, [dispatch, collectionId]);

return (
<div className="greyscheme">
<GlobalStyles/>
  { hotCollections.author &&  hotCollections.author.banner &&
      <section id='profile_banner' className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${api.baseUrl + hotCollections.author.banner.url})`}}>
        <div className='mainbreadcumb'>
        </div>
      </section>
    }

  <section className='container d_coll no-top no-bottom'>
    <div className='row'>
      <div className="col-md-12">
         <div className="d_profile">
                  <div className="profile_avatar">
                  { hotCollections.author &&  hotCollections.author.avatar &&
                    <div className="d_profile_img">
                      <img src={api.baseUrl + hotCollections.author.avatar.url} alt=""/>
                      <i className="fa fa-check"></i>
                    </div>
                  }
                      <div className="profile_name">
                          <h4>
                            { hotCollections.name }                                                          
                              <div className="clearfix"></div>
                              { hotCollections.author &&  hotCollections.author.wallet &&
                                <span id="wallet" className="profile_wallet">{ hotCollections.author.wallet }</span>
                              }
                              <button id="btn_copy" title="Copy Text">Copy</button>
                          </h4>
                      </div>
                  </div>

          </div>
      </div>
    </div>
  </section>

  <section className='container no-top'>
        <div className='row'>
          <div className='col-lg-12'>
              <div className="items_filter">
                <ul className="de_nav">
                    <li id='Mainbtn' className="active"><span onClick={handleBtnClick}>On Sale</span></li>
                    <li id='Mainbtn1' className=""><span onClick={handleBtnClick1}>Owned</span></li>
                </ul>
            </div>
          </div>
        </div>
      {openMenu && (  
        <div id='zero1' className='onStep fadeIn'>
          <ColumnNewRedux shuffle showLoadMore={false} authorId={hotCollections.author ? hotCollections.author.id : 1} />
        </div>
      )}
      {openMenu1 && ( 
        <div id='zero2' className='onStep fadeIn'>
         <ColumnNewRedux shuffle showLoadMore={false}/>
        </div>
      )}
      </section>


  <Footer />
</div>
);
}
export default memo(Colection);