import React, { 
  memo, 
  useState 
} from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { postContactForm } from '../../store/actions/thunks';

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

const Contact = () => {
  const useThunkDispatch = () => useDispatch();
  const dispatch = useThunkDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeName = (event) => {
    const { value } = event.target;
    setName(value);
  }
  const handleChangeEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
  }
  const handleChangePhone = (event) => {
    const { value } = event.target;
    setPhone(value);
  }
  const handleChangeMessage = (event) => {
    const { value } = event.target;
    setMessage(value);
  }

  const sendEmail = async (e) => {

    const success = document.getElementById("success");
    const button = document.getElementById("buttonsent");
    const failed = document.getElementById("failed");
    e.preventDefault();
    try {
      let form = {
        name,
        email,
        phone,
        message
      };

      await dispatch(postContactForm(form));
      
      success.classList.add('show');
      button.classList.add('show');
      failed.classList.remove('show');
    } catch (error) {
      console.log(error);
      failed.classList.add('show');
    }
  }

  return (
  <div>
  <GlobalStyles />

  <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-12 text-center">
              <h1>Contact Us</h1>
              <p>Anim pariatur cliche reprehenderit</p>
          </div>
        </div>
      </div>
    </div>
  </section>

      <section className='container'>
        <div className='row'>
          
          <div className='col-lg-8 mb-3'>
          <h3>Do you have any question?</h3>
            <div className="form-side">
              <form className="formcontact" onSubmit={sendEmail}>
                <input onChange={handleChangeName} value={name} type="text" className="form-control" name="user_name" placeholder="Your Name" required />
                <input onChange={handleChangeEmail} value={email} type="email" className="form-control" name="user_email" placeholder="Your Email" required />
                <input onChange={handleChangePhone} value={phone} type="text" className="form-control" name="user_phone" placeholder="Your Phone" required />
                <textarea onChange={handleChangeMessage} value={message} name="message" className="form-control" placeholder="Your Message" required />
                <div id='success' className='hide'>Your message has been sent...</div>
                <div id='failed' className='hide'>Message failed...</div>
                <input type='submit' id='buttonsent' value='Submit Now' className="btn btn-main color-2" />
              </form>
            </div>
          </div>

          <div className='col-md-4'>
           
           <div className="padding40 box-rounded mb30">
              <h3>US Office</h3>
              <address className="s1">
                <span><i className="id-color fa fa-map-marker fa-lg"></i>08 W 36th St, New York, NY 10001</span>
                <span><i className="id-color fa fa-phone fa-lg"></i>+1 333 9296</span>
                <span><i className="id-color fa fa-envelope-o fa-lg"></i><span className='btn'>contact@example.com</span></span>
                <span><i className="id-color fa fa-file-pdf-o fa-lg"></i><span className='btn'>Download Brochure</span></span>
              </address>
            </div>

            <div className="padding40 box-rounded mb30 text-light">
              <h3>AU Office</h3>
              <address className="s1">
                <span><i className="fa fa-map-marker fa-lg"></i>100 Mainstreet Center, Sydney</span>
                <span><i className="fa fa-phone fa-lg"></i>+61 333 9296</span>
                <span><i className="fa fa-envelope-o fa-lg"></i><span className='btn'>contact@example.com</span></span>
                <span><i className="fa fa-file-pdf-o fa-lg"></i><span className='btn'>Download Brochure</span></span>
              </address>
            </div>

          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
export default memo(Contact);