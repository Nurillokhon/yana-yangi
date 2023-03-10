import React from 'react';
import './katalog.css'
const Katalog = () => {
    return (
        <div className='container text-center'>
            <h2 className='fw-bold my-5' id='cotolog'>Katalog</h2>
            <div className='row cat'>
                <div className='card col p-4 m-3 shadow fw-bold text-secondary'>Kitoblar</div>
                <div className='card col p-4 m-3 shadow fw-bold text-secondary'>Electronniy kitob</div>
                <div className='card col p-4 m-3 shadow fw-bold text-secondary'>Audio kitob</div>
            </div>
            <div className='row cat'>
                <div className='card col p-4 m-3 shadow fw-bold text-secondary'>Kitoblar</div>
                <div className='card col p-4 m-3 shadow fw-bold text-secondary'>Electronniy kitob</div>
                <div className='card col p-4 m-3 shadow fw-bold text-secondary'>Audio kitob</div>
            </div>
            <div className='row cat'>
                <div className='card col p-4 m-3 shadow fw-bold text-secondary'>Kitoblar</div>
                <div className='card col p-4 m-3 shadow fw-bold text-secondary'>Electronniy kitob</div>
                <div className='card col p-4 m-3 shadow fw-bold text-secondary'>Audio kitob</div>
            </div>
        </div>
    );
}

export default Katalog;
