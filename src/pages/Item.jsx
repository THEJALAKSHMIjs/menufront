import React from 'react';
import Header from '../components/Header';

function Item() {
  const item = {
    name: 'Sample Item',
    description: 'This is a sample description for the item.',
    price: 20,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg' 
  };

  return (
    <div className='bg container-fluid'>
      <Header />
      <div className='container mt-4'>
        <h6 className='text-primary text-center text-md-start px-md-5' style={{ color: '#0796EF', WebkitBoxReflect: 'below 5px linear-gradient(transparent, rgba(0,0,0,0.2))' }}>
          MENU &nbsp; &gt; &nbsp; {item.name.toUpperCase()}
        </h6>
        <div className='row align-items-center justify-content-center text-center'>
          <div className='col-12 col-md-6 d-flex justify-content-center'>
            <img 
              src={item.image} 
              alt={item.name} 
              className='img-fluid rounded shadow-lg' 
              style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0'>
            <div className='d-flex flex-column align-items-start w-100 p-3'>
              <h2 className='text-primary text-center text-md-start' style={{ color: '#0796EF', WebkitBoxReflect: 'below 5px linear-gradient(transparent, rgba(0,0,0,0.2))' }}>{item.name}</h2>
              <h5 className='text-primary text-center text-md-start' style={{ color: '#0796EF', WebkitBoxReflect: 'below 5px linear-gradient(transparent, rgba(0,0,0,0.2))' }}>${item.price}</h5>
              <p className='text-center text-md-start' style={{ fontSize: '15px', WebkitBoxReflect: 'below 5px linear-gradient(transparent, rgba(0,0,0,0.2))' }}>
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
