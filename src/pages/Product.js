import React, { useState } from 'react';
import ProductsCard from '../components/ProductsCard';
import { productdata } from '../reducers/product';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import {Link} from 'react-router-dom'
export default function Product(props) {
    console.log(productdata);
    const [orderProduct] = useState(true)
    const { id } = useParams();
    const product = productdata.find((item) => item.id === Number(id));
    const colors = [
        { name: 'Black', value: '#000000' },
        { name: 'White', value: '#FFFFFF' },
        { name: 'Red', value: '#FF0000' },
        { name: 'Green', value: '#008000' },
        { name: 'Blue', value: '#0000FF' },
        // thêm các màu khác nếu cần
      ];
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
      };
    
    return (
        <>
            <div className='main-product-wrapper py-5 home-wrapper-2'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className='product-image'>
                                <img src={product.url} alt='product_image'></img>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className='title'>{product.title}</h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className="d-flex align-items-center">
                                        <p className='price'>{product.price}</p>
                                        &nbsp;
                                        <strike>{product.price_trc}</strike>
                                        
                                    </div>
                                   
                                    <div className='d-flex align-items-center gap-10 '>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0 t-review'>(5 đánh giá)</p>
                                    </div>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Type :</h3>
                                        <p className='product-data'>{product.name}</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Brand :</h3>
                                        <p className='product-data'>{product.brand}</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Availabity :</h3>
                                        <p className='product-data'>{product.avilabity} trong kho</p>
                                    </div>
                                    <div className='d-flex gap-10 flex-column my-2'>
                                        <h3 className='product-heading'>Color :</h3>
                                        <div className="color-container d-flex flex-wrap">
                                        {colors.map((color) => (
                                          <div key={color.name} className="color-item d-flex flex-column align-items-center">
                                            <div className="color-box" style={{ backgroundColor: color.value }}></div>
                                            <p className='product-data' style={{ color: "black"}}>{color.name}</p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                    <div className='d-flex gap-10 flex-column my-2'>
                                        <h3 className='product-heading'>Quantity :</h3>
                                        <div className=''>
                                            <input 
                                                type="number"
                                                name=""
                                                min={1}
                                                max={10}
                                                className="form-control"
                                                style={{with: "30px"}}
                                                id=""
                                            />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-center-items justify-center-content align-items-center text-center gap-30'>
                                        <Link to="/checkout" className='button custom-button border-0 text-decoration-none'>Thêm vào giỏ hàng</Link>
                                        <Link to="/checkout" className='button custom-button border-0 text-decoration-none'>Mua hàng</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='description-wrapper py-5 home-wrapper-2'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Thông tin sản phẩm</h4>
                            <div className="product-description bg-white p-3">
                                <p>{expanded ? product.des : product.des.slice(0, 300).replace(/\\n/g, "<br />") + (product.des.length > 300 ? '...' : '')}</p>
                            </div>
                            <button className='button' onClick={handleClick}>{expanded ? 'Thu gọn' : 'Xem thêm'}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='reviews-wrapper py-5 home-wrapper-2'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4 className='mb-2'>Đánh giá</h4>
                            <div className='review-inner-wrapper'>
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <div className='d-flex align-items-center gap-10 '>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>5 đánh giá</p>
                                        </div>
                                    </div>
                                    <div>
                                        {orderProduct && (
                                            <div>
                                                <a className='text-dark text-decoration-underline' href='d'>Viết đánh giá</a>
                                            </div>

                                        )}
                                    </div>
                                </div>
                                <div className="review-form py-4">
                                    <h4>Viết bình luận</h4>
                                    <form action='' className='d-flex flex-column gap-15'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            edit={true}
                                            activeColor="#ffd700"
                                        />
                                        <div>
                                            <textarea style={{ width: '100%', height: "100px" }} placeholder="Nhập bình luận của bạn">
                                            </textarea>
                                        </div>
                                        <button className='button border-0'>Gửi</button>
                                    </form>
                                </div>
                                <div className='reviews'>
                                    <div className="review">
                                        <div className='d-flex gap-10 algin-items-center' >
                                            <h6 className='mb-0'>Tran Van Giang</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='mt-3'>sản phẩm rất tốt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='popular-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Các sản phẩm tương tự</h3>
                        </div>
                        <ProductsCard />
                    </div>
                </div>
            </section>
        </>
    );
}

