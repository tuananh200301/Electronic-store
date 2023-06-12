import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { productdata } from '../reducers/product';

export default function ProductsCard() {
    console.log(productdata);
    return (
        <>
        {productdata.map((productdata) => (
            <div className='abc col-2' style={{ marginBottom: '15px' }} key={productdata.id}>
                    <Link to={`/product/${productdata.id}`} className='product-card position-relative text-decoration-none'>
                        <div className='product-image'>
                            <img src={productdata.url} alt='product_image'></img>
                        </div>
                        <div className='product-details'>
                            <h6 className='brand'>Havels</h6>
                            <h5 className='product-title'>
                                {productdata.title}
                            </h5>
                            <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className='price'>8.490.000₫ </p>
                        </div>
                        <div className='action-bar postion-absolute'>
                            <div className='d-flex flex-column'>
                                <Link>
                                    <i className="fa far fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}
