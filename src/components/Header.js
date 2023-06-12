import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

export default function Header() {
    const iconStyle = { color: '#ffffff' };
    return (
        <>
            <header className="header-top-strip py-3">
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'>Miễn phí vận chuyển trên 1.000.000đ & hoàn hàng free</p>
                        </div>
                        <div className='col-6'>
                            <p className='text-white mb-0'>Hootline:
                                <a className='text-white' href='tel:+84 86868686'>
                                    +84 86868686
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-upper py-3'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <h2>
                                <Link to="http://localhost:3005" className='text-white text-decoration-none'>Shuyn</Link>
                            </h2>
                        </div>
                        <div className='col-5'>
                            <div className="input-group">
                                <input type="text" className="form-control py-2" placeholder="Search......" aria-label="Enter product here" aria-describedby="basic-addon2" />
                                <span className="input-group-text py-3" id="basic-addon2">
                                    <BsSearch className='fs-6' />
                                </span>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='header-upper-links d-flex align-items-center justify-content-end' >
                                <div className='position-relative' style={{"margin-right":"30px"}}>
                                    <Link to="/cart" className="d-flex align-items-center gap-10 text-white text-decoration-none">
                                        <i className="fa fa-shopping-cart fa-lg" style={iconStyle}></i>
                                        <p className='mb-0'> $ 500</p>
                                        <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>0</span>
                                    </Link>
                                </div>
                                <div>
                                <Link className='d-flex align-items-center gap-10 text-white text-decoration-none'>
                                        <i className="fa fa-solid fa-user fa-lg"></i>
                                        <p className='mb-0' >
                                            Log in <br /> My Account
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-bottom py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='nenu-bottom d-flex align-items-center gap-30'>
                                <div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0" 
                                        type="button"
                                        id="dropdownMenuButtonl"
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false">
                                            DANH MỤC
                                        </button>
                                        <ul className="dropdown-menu" aria-label='dropdownMenuButtonl'>
                                            <li><Link className="dropdown-item text-white" to="">Điện Thoại</Link></li>
                                            <li><Link className="dropdown-item text-white" to="">Laptop</Link></li>
                                            <li><Link className="dropdown-item text-white" to="">Tai nghe</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-15 text-decoration-none' style={{"font-size":"16px"}}>
                                        <NavLink className="text-decoration-none" to="http://localhost:3005">Home</NavLink>
                                        <NavLink className="text-decoration-none" to="/store">Store</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
