import React from 'react'
import { Link } from 'react-router-dom'
import {BsInstagram, BsYoutube, BsFacebook} from 'react-icons/bs'
export default function Footer() {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row algin-items-center '>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <h2 className='mb-0 text-white'>Sign up for Newletters</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input type="text"
                  className="form-control py-2"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  Hn : Tổng cục V, <br /> Tân Triều, Thanh Trì <br /> PinCode: 123456s
                </address>
                <a href='tel:+84 86868686' className='mt-4 d-block mb-2 text-white text-decoration-none'>+84 86868686</a>
                <a href='mailto:dtanh200301@gmail.com' className='mt-4 d-block mb-2 text-white text-decoration-none'>dtanh200301@gmail.com</a>
                <div className='social_icons d-flex align-items-center gap-30 text-white fs-4'>
                  <BsInstagram />
                  <BsFacebook/>
                  <BsYoutube />
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column '>
                <Link className='text-white py-2 mb-1 text-decoration-none'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1 text-decoration-none'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1 text-decoration-none'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1 text-decoration-none'>Terms & Conditions</Link>
                <Link className='text-white py-2 mb-1 text-decoration-none'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column '>
              <Link className='text-white py-2 mb-1 text-decoration-none'>About us</Link>
              <Link className='text-white py-2 mb-1 text-decoration-none'>Contact</Link>
              <Link className='text-white py-2 mb-1 text-decoration-none'>Faq</Link>
            </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column '>
                <Link className='text-white py-2 mb-1 text-decoration-none'>Laptops</Link>
                <Link className='text-white py-2 mb-1 text-decoration-none'>Headphones</Link>
                <Link className='text-white py-2 mb-1 text-decoration-none'>Tablets</Link>
                <Link className='text-white py-2 mb-1 text-decoration-none'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}; Powerd by Đặng Tuấn Anh</p>
          </div>
        </div>
      </footer>
    </>
  )
}
