import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { navigate } from '@reach/router';
import * as selectors from '../../store/selectors';
import { getBlogPosts } from "../../store/actions/thunks";
import api from "../../core/api";
import moment from "moment";

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

const News = () => {
  const navigateTo = (link) => {
      navigate(link);
  }

  const dispatch = useDispatch();
  const blogsState = useSelector(selectors.blogsState);
  const blogPosts = blogsState.data ? blogsState.data : [];

  useEffect(() => {
      dispatch(getBlogPosts());
  }, [dispatch]);
  
return (
  <div>
  <GlobalStyles/>

    <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
      <div className='mainbreadcumb'>
        <div className='container'>
          <div className='row m-10-hor'>
            <div className='col-12 text-center'>
              <h1>News</h1>
              <p>Anim pariatur cliche reprehenderit</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='container'>
      <div className="row">
        {blogPosts && blogPosts.map((blog, index) => (
          <div className="col-lg-4 col-md-6 mb30" key={index}>
            <div className="bloglist item">
                <div className="post-content">
                    <div className="post-image">
                        <img alt="" src={api.baseUrl + blog.cover.url} className="lazy"/>
                    </div>
                    <div className="post-text">
                        <span className="p-tagline">Tips &amp; Tricks</span>
                        <span className="p-date">{moment(blog.timestamp).format('L, LT')}</span>
                        <h4><span>{blog.title}<span></span></span></h4>
                        <p>{blog.content.substring(0, 134)}...</p>
                        <span onClick={() => navigateTo(`news/${blog.id}`)} className="btn-main">Read more</span>
                    </div>
                </div>
            </div>
          </div>
        ))}

          <div className="spacer-single"></div>
                  
          <ul className="pagination">
              <li><span className='a'>Prev</span></li>
              <li className="active"><span className='a'>1</span></li>
              <li><span className='a'>2</span></li>
              <li><span className='a'>3</span></li>
              <li><span className='a'>4</span></li>
              <li><span className='a'>5</span></li>
              <li><span className='a'>Next</span></li>
          </ul>
          
      </div>
    </section>

    <Footer />
  </div>
  )
};

export default memo(News);