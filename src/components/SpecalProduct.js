import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom';
export default function SpecalProduct() {
    return (
        <div className="col-4 mb-3">
            <div className="specal-product-card">
                <div className='specal-child d-flex justify-content-between'>
                    <div className='specal-image'>
                        <img src='https://cdn.tgdd.vn/Products/Images/54/227725/tai-nghe-chup-tai-bluetooth-sony-wh-1000xm4-avatar-1-600x600.jpg' alt='product_image'></img>
                    </div>
                    <div className='specal-product-content'>
                        <h5 className='brand'>Bluetooth Sony</h5>
                        <h6 className='title'>Tai nghe Bluetooth Chụp Tai Sony WH-1000XM4</h6>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className='price'>
                            <span className='red-p'>8.490.000₫</span>
                            &nbsp;
                            <strike>10.490.000₫</strike>
                        </p>
                        <div className='discount-till d-flex align-items-center gap-10'>
                            <p className='mb-0'>
                                <b>5days</b>
                            </p>
                            <div className='d-flex gap-10 align-items-center'>
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>
                            </div>

                        </div>
                        <div className="prod-count my-3">
                            <p>Product: 5</p>
                            <div class="progress"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100">
                                <div class="progress-bar" style={{ width: "25%" }}></div>
                            </div>
                        </div>
                        <Link className='button text-decoration-none'>Add to Cart</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
