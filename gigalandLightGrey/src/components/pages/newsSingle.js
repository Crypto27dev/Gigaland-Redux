import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import * as selectors from '../../store/selectors';
import { getBlogPosts, getRecentPosts, getBlogComments, getBlogTags } from "../../store/actions/thunks";
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

const NewsSingle = ({ postId }) => {

    const dispatch = useDispatch();
    const blogsState = useSelector(selectors.blogsState);
    const recentPostsState = useSelector(selectors.recentPostsState);
    const tagsState = useSelector(selectors.tagsState);
    const commentsState = useSelector(selectors.commentsState);

    const blogPosts = blogsState.data ? blogsState.data : {};
    const recentPosts = recentPostsState.data ? recentPostsState.data : [];
    const tags = tagsState.data ? tagsState.data : [];
    const comments = commentsState.data ? commentsState.data.comments : [];
    const commentCount = commentsState.data ? commentsState.data.counts : 0;


    useEffect(() => {
        dispatch(getBlogPosts(postId));
        dispatch(getRecentPosts());
        dispatch(getBlogTags(postId));
        dispatch(getBlogComments(postId));
    }, [dispatch, postId]);

    return (
        <div>
        <GlobalStyles/>

            <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'../img/background/subheader.jpg'})`}}>
                <div className='mainbreadcumb'>
                  <div className='container'>
                    <div className='row m-10-hor'>
                      <div className='col-12 text-center'>
                        <h1>{blogPosts.title}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
			<section aria-label="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="blog-read">
                                {blogPosts && blogPosts.cover &&
                                    <img alt="" src={api.baseUrl + blogPosts.cover.url} className="img-fullwidth rounded" />
                                }

                                <div className="post-text">
                                    <p>{blogPosts.content}</p>
                                    <span className="post-date">{moment(blogPosts.timestamp).format('MMMM D, yyyy')}</span>
                                    <span className="post-comment">{commentCount}</span>
                                    <span className="post-like">{blogPosts.likes}</span>

                                </div>

                            </div>

                            <div className="spacer-single"></div>

                            <div id="blog-comment">
                                <h4>Comments ({commentCount})</h4>

                                <div className="spacer-half"></div>

                                <ol>
                                    {comments && comments.map( (comment, index) => (
                                        <li key={index}>
                                            <div className="avatar">
                                                <img src={api.baseUrl + comment.avatar} alt="" width="70px" /></div>
                                            <div className="comment-info">
                                                <span className="c_name">{comment.username}</span>
                                                <span className="c_date id-color">{moment(comment.timestamp).format('MMMM D yyyy, h:m A')}</span>
                                                <span className="c_reply"><a href="/news">Reply</a></span>
                                                <div className="clearfix"></div>
                                            </div>

                                            <div className="comment">{comment.comment}</div>
                                            {(comment.replies && comment.replies.length !== 0) &&
                                                <ol>
                                                    {comment.replies.map( (reply, replyIndex) => (
                                                        <li key={replyIndex}>
                                                            <div className="avatar">
                                                                <img src={api.baseUrl + reply.avatar} alt="" width="70px" /></div>
                                                                <div className="comment-info">
                                                                    <span className="c_name">{reply.username}</span>
                                                                    <span className="c_date id-color">{moment(reply.timestamp).format('MMMM D yyyy, h:m A')}</span>
                                                                    <span className="c_reply"><a href="/news">Reply</a></span>
                                                                    <div className="clearfix"></div>
                                                                </div>
                                                            <div className="comment">{reply.comment}</div>
                                                        </li>
                                                    ))}
                                                </ol>
                                            }
                                        </li>
                                    ))}
                                </ol>

                                <div className="spacer-single"></div>

                                <div id="comment-form-wrapper">
                                    <h4>Leave a Comment</h4>
                                    <div className="comment_form_holder">
                                        <form id="contact_form" name="form1" className="form-border" method="post" action="#">

                                            <label>Name</label>
                                            <input type="text" name="name" id="name" className="form-control" />

                                            <label>Email <span className="req">*</span></label>
                                            <input type="text" name="email" id="email" className="form-control" />
                                            <div id="error_email" className="error">Please check your email</div>

                                            <label>Message <span className="req">*</span></label>
                                            <textarea cols="10" rows="10" name="message" id="message" className="form-control"></textarea>
                                            <div id="error_message" className="error">Please check your message</div>
                                            <div id="mail_success" className="success">Thank you. Your message has been sent.</div>
                                            <div id="mail_failed" className="error">Error, email not sent</div>

                                            <p id="btnsubmit">
                                                <input type="submit" id="send" value="Send" className="btn btn-main" /></p>



                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div id="sidebar" className="col-md-4">
                            <div className="widget widget-post">
                                <h4>Recent Posts</h4>
                                <div className="small-border"></div>
                                <ul>
                                    {recentPosts && recentPosts.map( (post, index) => (
                                        <li key={index}><span className="date">{moment(post.timestamp).format('D MMM')}</span><a href="/news">{post.title}</a></li>
                                    ))}
                                </ul>
                            </div>

                            <div className="widget widget-text">
                                <h4>About Us</h4>
                                <div className="small-border"></div>
                                {blogPosts.author && blogPosts.author.about}
                            </div>
                            <div className="widget widget_tags">
                                <h4>Tags</h4>
                                <div className="small-border"></div>
                                <ul>
                                    {tags && tags.map( (tag, index) => (
                                        <li key={index}><a href="#link">{tag.name}</a></li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default memo(NewsSingle);