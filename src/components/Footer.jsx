import React from 'react';

function Footer() {
  return (
    <div className='d-flex justify-content-between align-items-center px-3 flex-wrap'>
      {/* Show only on larger screens */}
      <p className='m-0 d-none d-md-block'>© 2024 Deepnetsoft Solutions. All rights reserved</p>

      {/* Show only on smaller screens */}
      <p className='m-0 d-block d-md-none'>© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.</p>

      <div className='ms-auto d-flex'>
        <button className='btn'>Terms & Conditions</button>
        <button className='btn'>Privacy Policy</button>
      </div>
    </div>
  );
}

export default Footer;
