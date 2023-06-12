import React, { useState, useEffect } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';


export default function Cart() {
    const [quantity, setQuantity] = useState(1); // số lượng sản phẩm
    const [price] = useState(27190000); // giá tiền của sản phẩm
    const [total, setTotal] = useState(price); // tổng giá tiền
    const [cartTotal, setCartTotal] = useState(total); // Khởi tạo biến state để tính tổng giá trị giỏ hàng

    useEffect(() => {
        setTotal(price * quantity);
    }, [price, quantity]);

    useEffect(() => {
        // Tính lại tổng giá trị giỏ hàng khi total thay đổi
        setCartTotal(prevCartTotal => prevCartTotal + total);
    }, [total]);

    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value);
        const oldTotal = price * quantity;
        setQuantity(value);
        setTotal(price * value);
        setCartTotal(prevCartTotal => prevCartTotal - oldTotal + price * value * (1 - quantity / value));
      };
    
  return (
    <>
        <section className='cart-wrapper home-wrapper-2 py-5'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                            <h4 className='cart-col-1'>Sản phẩm</h4>
                            <h4 className='cart-col-2'>Giá</h4>
                            <h4 className='cart-col-3'>Số lượng</h4>
                            <h4 className='cart-col-4'>Tổng</h4>
                        </div>
                        <div className="cart-header cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                            <div className='cart-col-1 gap-15 d-flex algin-items-center'>
                                <div className=''>
                                    <img src='https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-den-thumb-200x200.jpg' alt=''></img>
                                </div>
                                <div className=''>
                                    <h5 className='title'>IPhone 14 Pro Max 128GB</h5>
                                    <p className='color'>Màu sắc: Đen</p>
                                    <p className='size'>Size: max</p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className='price '>{price}đ</h5>
                            </div>
                            <div className='cart-col-3 '>
                                <div>
                                <input className='form-control' 
                                    type='number' name='' min={1} max={10} 
                                    id='' 
                                    value={quantity} 
                                    onChange={handleQuantityChange} 
                                />
                                </div>
                               
                            </div>
                            <div className='cart-col-4 d-flex align-items-center gap-15'>
                                <h5 className='total'>{total}đ</h5>
                                <button className="button-delete" type="button">
                                    <AiFillDelete />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-2 mt-4">
                        <div className='d-flex justify-content-between align-items-baseline'>
                            <Link to="http://localhost:3005" className='button text-decoration-none'>Tiếp tục mua sắm</Link>
                            <div>
                                <h4>Tổng tiền: {cartTotal}đ </h4>
                                <Link to="/checkout" className='button text-decoration-none'>Thanh toán</Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
