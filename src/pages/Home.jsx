import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import '../pages/Home.css'
import Frame from '../assets/Frame.png'
import Frame1 from '../assets/Frame1.png'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../assets/Logo.png'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { SERVER_URL } from "../api/ServerUrl";

function Home() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
          try {
            const response = await fetch(`${SERVER_URL}/menus`);
            const data = await response.json();
            console.log(data);
            setMenu(data)
            console.log(menu.length);
            
            
            if (data.success) {
                console.log(data);
                
              setMenu(data.menu);
            }
          } catch (error) {
            console.error("Error fetching product:", error);
          }
        };

        fetchMenu();
    }, []);

    return (
        <>
            <Header />
            <div className='start' style={{ overflowX: 'hidden' }}>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <h1 className='menu mt-5'>MENU</h1>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 d-flex align-items-center">
                            <p>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
            <div className='sec' style={{ overflowX: 'hidden' }}>
                <div className='d-flex justify-content-center gap-3'>
                    <button className='btn-custom mt-3'>Food</button>
                    <button className='btn-custom mt-3'>Drink</button>
                    <button className='btn-custom mt-3'>Brunch</button>
                    <Link to={'/Addproduct'}><button className='btn mt-3 text-success'>Add item</button></Link>
                </div>
            </div>
            <div className='third' style={{ overflowX: 'hidden' }}>
                <div className="row">
                    <div className="col-md-1 d-none d-md-block">
                        <img src={Frame} alt="no image" style={{ height: '70vh' }} />
                    </div>
                    <div className="col-md-10">
                        <div className='mt-5' style={{ border: '1px solid #857878', borderRadius: '10px' }}>
                            <h3 className='bru d-flex justify-content-center co'>——— MENU ITEMS ———</h3>
                            <div className='row d-flex justify-content-between'>
                                {menu.length > 0 ? (
                                    menu.map((menu, index) => (
                                        <div className="col-12 col-md-6 mb-4 text-center" key={index}>
                                            <div className='mt-3' style={{ color: 'white' }}>
                                                <h6 style={{ color: 'white', marginBottom: '0' }}>{menu.name}</h6>
                                                <p>{menu.description}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className='text-center'>No products available</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 d-none d-md-block">
                        <img src={Frame1} alt="no image" style={{ height: '70vh' }} />
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <Footer />
            </div>
        </>
    )
}

export default Home;
