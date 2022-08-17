import React from 'react'
import './servise.css'

function Servise() {
    return (
        <section className='section3 text-white'>

                <div className=' servise-container text-center'>
                    <div className='col-md-3'>
                        <i className="fa-solid fa-calendar-days mb-2 "></i>
                        <h5 className='title-icon'>Calender</h5>
                    </div>
                    <div className='col-md-3'>
                        <i className="fa-solid fa-clock mb-2"></i>
                        <h5 className='title-icon'>Hours</h5>

                    </div>
                    <div className='col-md-3'>
                        <i className="fa-solid fa-ticket mb-2"></i>
                        <h5 className='title-icon'>Tickets</h5>

                    </div>
                    <div className='col-md-3'>
                        <i className="fa-solid fa-shop mb-2"></i>
                        <h5 className='title-icon'>Shop</h5>

                        
                    </div>
                </div>
            


        </section>
    )
}

export default Servise