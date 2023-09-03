import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import logo from './../../../assets/images/logo-erfansalamat.png';
//import './../../../assets/css/style.css'
//import './../../../assets/css/feather.css'
//import './../../../assets/css/themify-icons.css'
//import './../../../assets/css/vendor.bundle.base.css'
//import { NavLink } from 'react-router-dom';
//import Navbar from './../../navbar';

class SignIN extends Component {
    state = {  } 
    render() { 
        return (
            <>
  <div className="container-scroller">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
        <div className="row flex-grow">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="auth-form-transparent text-left p-3">
              <div className="brand-logo">
                <img src={logo} alt="logo"/>
              </div>
              <h4>اپلیکیشن عرفان سلامت</h4>
              <h6 className="font-weight-light">ورود به داشبورد</h6>
              <form className="pt-3">
                <div className="form-group">
                  <label for="exampleInputEmail">نام کاربری</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="ti-user text-primary"></i>
                      </span>
                    </div>
                    <input type="text" className="form-control form-control-sm border-left-0" id="exampleInputEmail" placeholder="نام کاربری" />
                  </div>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword">رمز عبور</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="ti-lock text-primary"></i>
                      </span>
                    </div>
                    <input type="password" className="form-control form-control-sm border-left-0" id="exampleInputPassword" placeholder="رمز عبور"/>                        
                  </div>
                </div>
                <div className="my-3">
                  <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/admin">ورود</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 login-half-bg d-flex flex-row">
            <p className="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2023  All rights reserved.</p>
          </div>
        </div>
      </div>

    </div>

  </div>
            
            </>
        );
    }
}
 
export default SignIN;
