import React, {Component} from "react";

// Images
import Logo from "../../images/logo.png";
import footerBg from "../../images/background/footer.jpg";
import ptImg1 from "../../images/shap/wave-blue.png";
import ptImg2 from "../../images/shap/circle-dots.png";
import ptImg3 from "../../images/shap/plus-blue.png";
import ptImg4 from "../../images/shap/wave-blue.png";

// Social Images
import facebook from "../../images/social/facebook.png";
import twitter from "../../images/social/twitter.png";
import instagram from "../../images/social/instagram.png";
import linkedin from "../../images/social/linkedin.png";

class aboutSection extends Component {
  render() {
    return (
      <>
        <footer
          className='footer'
          style={{backgroundImage: "url(" + footerBg + ")"}}
        >
          <div className='footer-top'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6'>
                  <div className='widget widget_info'>
                    <div className='footer-logo'>
                      <a href='#'>
                        <img
                          src={Logo}
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='ft-contact'>
                      <p>
                        If you or a loved one could use our professional support, it might be time
                        to get in touch. One of our home care coordinators will be happy to discuss
                        a plan that’s most suitable for you.
                      </p>
                      <div className='contact-bx'>
                        <div className='icon'>
                          <i className='fas fa-phone-alt'></i>
                        </div>
                        <div className='contact-number'>
                          <span>Contact Us</span>
                          <h4 className='number'>+1-416-493-1793</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-6'>
                  <div className='widget footer_widget ml-50'>
                    <h3 className='footer-title'>Quick Links</h3>
                    <ul>
                      <li>
                        <a href='#'>
                          <span>About Us</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span>Services</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span>Booking</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span>blogs</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6'>
                  <div className='widget widget_form'>
                    <h3 className='footer-title'>Contact</h3>
                    <form className='subscribe-form subscription-form mb-30'>
                      <div className='ajax-message'></div>
                      <div className='input-group'>
                        <input
                          name='email'
                          required='required'
                          className='form-control'
                          placeholder='Email Address'
                          type='email'
                        />
                      </div>
                      <button
                        name='submit'
                        value='Submit'
                        type='submit'
                        className='btn btn-secondary shadow w-100'
                      >
                        Subscribe Now
                      </button>
                    </form>
                    <div className='footer-social-link'>
                      <ul>
                        <li>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://www.facebook.com/'
                          >
                            <img
                              src={facebook}
                              alt=''
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://twitter.com/'
                          >
                            <img
                              src={twitter}
                              alt=''
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://www.instagram.com/'
                          >
                            <img
                              src={instagram}
                              alt=''
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://www.linkedin.com/'
                          >
                            <img
                              src={linkedin}
                              alt=''
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='footer-bottom'>
              <div className='row'>
                <div className='col-12 text-center'>
                  <p className='copyright-text'>
                    Copyright © 2023 Design & Developed by{" "}
                    <a
                      href='#'
                      rel='noreferrer'
                      target='_blank'
                      className='text-secondary'
                    >
                      Codebin
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className='pt-img1 animate-wave'
            src={ptImg1}
            alt=''
          />
          <img
            className='pt-img2 animate1'
            src={ptImg2}
            alt=''
          />
          <img
            className='pt-img3 animate-rotate'
            src={ptImg3}
            alt=''
          />
          <img
            className='pt-img4 animate-wave'
            src={ptImg4}
            alt=''
          />
        </footer>
      </>
    );
  }
}

export default aboutSection;
