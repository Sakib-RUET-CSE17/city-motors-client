import React from 'react';
import { useHistory } from 'react-router';

const BikeCard = ({ bike }) => {
    const { imageURL, name, cc, price } = bike
    const history = useHistory()

    const handleBuyNow = id => {
        history.push(`/bikeCart/${id}`)
    }
    return (
        <div id={bike._id} className="col">
            <div className="card h-100">
                <img src={imageURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{cc} CC</p>
                </div>
                <div className="card-footer bg-success">
                    <span className='me-5 pe-5'>Tk {price}</span>
                    {/* <button className='btn btn-primary ms-5 ps-1'>Buy Now</button> */}
                    <button onClick={() => handleBuyNow(bike._id)} className='btn btn-primary ms-5 ps-1'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BikeCard;