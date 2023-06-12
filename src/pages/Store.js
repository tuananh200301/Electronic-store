import React, { useState } from 'react'
import ProductsCard from '../components/ProductsCard';

export default function Store() {
  const [prices, setPrices] = useState({
    under1m: false,
    oneToFiveM: false,
    fiveToTenM: false,
    over10m: false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setPrices(prevState => ({
      ...Object.fromEntries(Object.entries(prevState).map(([k, v]) => [k, false])),
      [name]: checked
    }));
  }
  return (
    <>
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className='filter-title'>Danh mục</h3>
                <div>
                  <ul className='ps-0'>
                    <li>Phone</li>
                    <li>Laptop</li>
                    <li>Tablet</li>
                    <li>Smartwatch</li>
                    <li>Wristwatch</li>
                    <li>PC</li>
                    <li>Blutooth Headphone</li>
                    <li>Earphone</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Giá</h3>
                <div>
                <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  name='under1m'
                  checked={prices.under1m}
                  onChange={handleCheckboxChange}
                />
                <label className='form-check-label' htmlFor='defaultCheck1'>
                  Dưới 1 triệu
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  name='oneToFiveM'
                  checked={prices.oneToFiveM}
                  onChange={handleCheckboxChange}
                />
                <label className='form-check-label' htmlFor='defaultCheck2'>
                  Từ 1 triệu đến 5 triệu
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  name='fiveToTenM'
                  checked={prices.fiveToTenM}
                  onChange={handleCheckboxChange}
                />
                <label className='form-check-label' htmlFor='defaultCheck3'>
                  Từ 5 triệu đến 10 triệu
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  name='over10m'
                  checked={prices.over10m}
                  onChange={handleCheckboxChange}
                />
                <label className='form-check-label' htmlFor='defaultCheck4'>
                  Trên 10 triệu
                </label>
              </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className='d-flex justify-content-between algin-items-center'>
                  <div className='d-flex algin-items-center justify-content-center gap-10'>
                    <p className='mb-0 d-block' style={{"width":"170px"}}>Sắp xếp theo:</p>
                    <select class="form-select" aria-label="Default select example">
                      <option value="1">Từ thấp đến cao</option>
                      <option value="2">Từ cao đến thấp</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="product-list pd-5" style={{ display: 'flex', flexWrap: 'wrap' }}>
                <ProductsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
