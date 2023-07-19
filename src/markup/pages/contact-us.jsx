import React, {Component} from "react";
import {Link} from "react-router-dom";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import pic1 from "../../images/about/pic-1.jpg";
import animateWave from "../../images/shap/wave-blue.png";
import animate2 from "../../images/shap/circle-dots.png";
import animateRotate from "../../images/shap/plus-blue.png";

class ContactUs extends Component {
  render() {
    return (
      <>
        <div className='page-content bg-white'>
          <div className='banner-wraper'>
            <div
              className='contact-banner p-4'
              style={{backgroundImage: "url(" + bnrImg1 + ")"}}
            >
              <div className='container'>
                <section className=''>
                  <div className='contact-wraper'>
                    <div className='row'>
                      <div className='col-lg-6 mb-30'>
                        <form className='form-wraper contact-form ajax-form'>
                          <div className='ajax-message'></div>
                          <div className='row'>
                            <div className='form-group col-md-12'>
                              <input
                                name='name'
                                type='text'
                                required
                                className='form-control'
                                placeholder='Your Name'
                              />
                            </div>
                            <div className='form-group col-md-12'>
                              <input
                                name='email'
                                type='email'
                                required
                                className='form-control'
                                placeholder='Email'
                              />
                            </div>
                            <div className='form-group col-md-12'>
                              <input
                                name='phone'
                                type='text'
                                required
                                className='form-control'
                                placeholder='Phone Numbers'
                              />
                            </div>
                            <div className='form-group col-md-12'>
                              <select className='form-select form-control'>
                                <option defaultValue='Selecty Department'>
                                  Selecty Department
                                </option>
                                <option defaultValue='1'>One</option>
                                <option defaultValue='2'>Two</option>
                                <option defaultValue='3'>Three</option>
                              </select>
                            </div>
                            <div className='form-group col-md-12'>
                              <textarea
                                name='message'
                                required
                                className='form-control'
                                placeholder='Type Message'
                              ></textarea>
                            </div>
                            <div className='col-lg-12'>
                              <button
                                name='submit'
                                type='submit'
                                defaultValue='Submit'
                                className='btn w-100 btn-secondary btn-lg'
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className='col-lg-6 mb-30'>
                        <div
                          className='contact-info ovpr-dark'
                          style={{backgroundImage: "url(" + pic1 + ")"}}
                        >
                          <div className='info-inner'>
                            <h4 className='title mb-24'>Contact Us</h4>
                            <h6 className='text-white mb-30'>
                              If you or a loved one could use our professional support, it might be
                              time to get in touch. One of our home care coordinators will be happy
                              to discuss a plan that’s most suitable for you.
                            </h6>
                            <div className='icon-box'>
                              <h6 className='title'>
                                <i className='ti-map-alt'></i>Location
                              </h6>
                              <p>
                                3155 Eglinton Ave. East, Scarborough, Ontario, Canada M1J 2G2
                                <br></br>
                                Intersection of Markham and Eglinton
                              </p>
                            </div>
                            <div className='icon-box'>
                              <h6 className='title'>
                                <i className='ti-id-badge'></i>Email &amp; Phone
                              </h6>
                              <Link
                                to='#'
                                className='text-white'
                              >
                                admin@ezcarenursingagency.com
                              </Link>
                              <p>(+1) 416-493-1793</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <img
                className='pt-img1 animate-wave'
                src={animateWave}
                alt=''
              />
              <img
                className='pt-img2 animate2'
                src={animate2}
                alt=''
              />
              <img
                className='pt-img3 animate-rotate'
                src={animateRotate}
                alt=''
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUs;
