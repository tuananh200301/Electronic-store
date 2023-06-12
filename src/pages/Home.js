import React from 'react'
import Marquee from "react-fast-marquee";
import ProductsCard from '../components/ProductsCard';
import SpecalProduct from '../components/SpecalProduct';
import Barcode from 'react-barcode';
export default function Home() {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner postition-relative p-3'>
                <img src='https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/note-12-mo-ban-003-sliding-new-004444.png'
                  className='img-fluid rounded-3'
                  alt='main-banner' />
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10'>
                <div className='small-banner position-relative'>
                  <img src='https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/s23-right-th3.jpg'
                    className='img-fluid rounded-3'
                    alt='main-banner' />
                </div>
                <div className='small-banner position-relative'>
                  <img src='https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/ipad-right-banner-th4.png'
                    className='img-fluid rounded-3'
                    alt='main-banner' />
                </div>
                <div className='small-banner position-relative'>
                  <img src='https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/asus-vivolaptop-normal-right-003.jpg'
                    className='img-fluid rounded-3'
                    alt='main-banner' />
                </div>
                <div className='small-banner position-relative'>
                  <img src='https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/oppo-sliding-new-moban.png'
                    className='img-fluid rounded-3'
                    alt='main-banner' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='servies d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-10'>
                  <i className="fa far fa-shipping-fast fa-lg"></i>
                  <div>
                    <h6>Miễn phí vận chuyển</h6>
                    <p className='mb-0'>Từ tất cả các đơn hàng trên 1.000.000đ</p>
                    <Barcode value="1060"/>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <i className="fa far fa-gift fa-lg"></i>
                  <div>
                    <h6>Ưu đãi bất ngờ hàng ngày</h6>
                    <p className='mb-0'>Tiết kiệm tới 25%</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <i className="fa far fa-headset fa-lg"></i>
                  <div>
                    <h6>Hỗ trợ 24/7</h6>
                    <p className='mb-0'>Mua sắm với một chuyên gia</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <i className="fa far fa-percent fa-lg"></i>
                  <div>
                    <h6>Giá cả phải chăng</h6>
                    <p className='mb-0'>Nhận giá rẻ bất ngờ</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <i className="far fa-credit-card fa-lg"></i>
                  <div>
                    <h6>Thanh toán an toàn</h6>
                    <p className='mb-0'>Thanh toán được bảo vệ 100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Phone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='https://cdn.tgdd.vn/Products/Images/42/264060/samsung-galaxy-s23-600x600.jpg' alt='phone'
                    style={{ width: '70px', height: '70px' }}
                  ></img>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Laptop</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='https://cdn.tgdd.vn/Products/Images/44/285962/hp-240-g8-i3-6l1a1pa-thumb-600x600.jpg' alt='laptop'
                    style={{ width: '70x', height: '70px' }}
                  ></img>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Tablet</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='https://cdn.tgdd.vn/Products/Images/522/294103/iPad-Gen-10-Pink-thumb-1-600x600.jpg' alt='tablet'
                    style={{ width: '70px', height: '70px' }}
                  ></img>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smartwatch</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='https://cdn.didongviet.vn/pub/media/catalog/product//d/o/dong-ho-the-thao-thong-minh-huawei-gt-3-42mm-day-cao-su-didongviet_1.jpg' alt='smartwatch'
                    style={{ width: '70px', height: '70px' }}
                  ></img>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Wristwatch</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='https://cdn.tgdd.vn/Products/Images/7264/287019/citizen-nj0150-81l-nam-thumb-600x600.jpg' alt='wristwatch'
                    style={{ width: '70px', height: '70px' }}
                  ></img>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>PC</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='https://cdn.tgdd.vn/Products/Images/5698/251975/hp-aio-22-df1019d-i5-1135g7-4gb-512gb-215-fullhd-600x600.jpg' alt='pc'
                    style={{ width: '70px', height: '70px' }}
                  ></img>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Bluetooth Headphone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/w/mwp22_av2_1_1_2_1.jpg' alt='bluetoothheadphone'
                    style={{ width: '70px', height: '70px' }}
                  ></img>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Earphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='https://cdn.nguyenkimmall.com/images/thumbnails/600/336/detailed/776/10050898-tai-nghe-chup-tai-philips-tah4105bk-00-den-1.jpg' alt='earphones'
                    style={{ width: '90px', height: '70px' }}
                  ></img>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Bộ sưu tập nổi bật</h3>
            </div>
            <ProductsCard />
          </div>
        </div>
      </section>
      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
            <h3 className='section-heading'>Giảm giá nhiều hơn Thanh toán trực tuyến</h3>
            <div className="col-4">
              <div className="famous-card">
                <img src='https://cdn.tgdd.vn/2023/03/banner/380x200px-380x200-8.png' alt=''></img>
              </div>
            </div>
            <div className="col-4">
              <div className="famous-card">
                <img src='https://cdn.tgdd.vn/2023/03/banner/380x200px-380x200-7.png' alt=''></img>
              </div>
            </div>
            <div className="col-4">
              <div className="famous-card">
                <img src='https://cdn.tgdd.vn/2022/12/banner/380x200-380x200-1.webp' alt=''></img>
              </div>
            </div>

          </div>
        </div>

      </section>
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Sản phẩm đặc biệt</h3>
            </div>
            <SpecalProduct />
            <SpecalProduct />
            <SpecalProduct />
          </div>
        </div>
      </section>
      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Sản phẩm phổ biến</h3>
            </div>
            <ProductsCard />
          </div>
        </div>
      </section>
      <section className='marquee-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wapper'>
                <Marquee className='d-flex'>
                  <div className='mx4 w-25'>
                    <img src='https://cdn11.dienmaycholon.vn/filewebdmclnew/public//userupload/images/Samsung-Logo.jpg' alt='brand' style={{ width: '100px', height: '50px' }}></img>
                  </div>
                  <div className='mx4 w-25'>
                    <img src='https://cdn11.dienmaycholon.vn/filewebdmclnew/public//userupload/images/LG_LOGO_NEW.jpg' alt='brand' style={{ width: '130px', height: '50px' }}></img>
                  </div>
                  <div className='mx4 w-25'>
                    <img src='https://inkythuatso.com/uploads/thumbnails/800/2021/10/logo-apple-inkythuatso-01-28-13-22-07.jpg' alt='brand' style={{ width: '50px', height: '50px' }}></img>
                  </div>
                  <div className='mx4 w-25'>
                    <img src='https://www.freepnglogos.com/uploads/dell-png-logo/dell-png-logo-0.png' alt='brand' style={{ width: '50px', height: '50px' }}></img>
                  </div>
                  <div className='mx4 w-25'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/500px-Lenovo_logo_2015.svg.png' alt='brand' style={{ width: '100px', height: '50px' }}></img>
                  </div>
                  <div className='mx4 w-25'>
                    <img src='https://www.freepnglogos.com/uploads/logo-asus-png/brand-asus-company-logo-black-14.png' alt='brand' style={{ width: '100px', height: '50px' }}></img>
                  </div>
                  <div className='mx4 w-25'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR3sbGA8NQDCNMqmQzP78QKeYL_ym5ukAxlA&usqp=CAU' alt='brand' style={{ width: '100px', height: '50px' }}></img>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
