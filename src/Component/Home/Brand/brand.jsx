import React from 'react';
import "./brandStyle.css";
const Brand = () => {
    return (
       <section>
        <h3 className='text-center text-dark brand-h'>Compatible with vehicle brands</h3>
<div className="container my-5">
    <div className="row">
        <div className="col-md-2  my-3">
            <div className='brand' >
                <img src="./images/partner-new-1.png" className='w-100' alt="" />
            </div>
        </div>
        <div className="col-md-2  my-3">
            <div className='brand'>
                <img src="./images/partner-new-2.png" className='w-100' alt="" />
            </div>
        </div>
        <div className="col-md-2  my-3">
            <div className='brand'>
                <img src="./images/partner-new-3.png" className='w-100' alt="" />
            </div>
        </div>
        <div className="col-md-2  my-3">
            <div className='brand'>
                <img src="./images/partner-new-4.png" className='w-100' alt="" />
            </div>
        </div>
        <div className="col-md-2  my-3">
            <div className='brand'>
                <img src="./images/partner-new-5.png" className='w-100' alt="" />
            </div>
        </div>
        <div className="col-md-2  my-3">
            <div className='brand'>
                <img src="./images/partner-new-6.png" className='w-100' alt="" />
            </div>
        </div>
    </div>
</div>
       </section>
    );
};

export default Brand;