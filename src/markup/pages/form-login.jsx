import React, {Component} from "react";

// Import Images
import logo from "../../images/logo.png";

class FormLogin extends Component {
  render() {
    return (
      <>
        <div className='section-area account-wraper2'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-xl-5 col-lg-6 col-md-8'>
                <div className='appointment-form form-wraper'>
                  <div className='logo'>
                    <img
                      src={logo}
                      alt=''
                    />
                  </div>
                  <form action='#'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Username'
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                      />
                    </div>
                    <div className='form-group'>
                      <a
                        href='#'
                        type='button'
                        className='btn mb-30 btn-lg btn-primary w-100'
                      >
                        login
                      </a>
                      <a
                        href='#'
                        data-toggle='tab'
                      >
                        Forgot Password
                      </a>
                    </div>
                    <div className='text-center mt-40'>
                      <p className='mt-0'>Dont have any account?</p>
                      <a
                        className='btn btn-lg btn-secondary w-100'
                        data-toggle='tab'
                        href='#'
                      >
                        Register
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FormLogin;
