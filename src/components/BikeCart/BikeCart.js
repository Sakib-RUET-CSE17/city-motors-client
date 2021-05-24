import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './BikeCart.css'

const BikeCart = () => {
    const { id } = useParams()
    const [bike, setBike] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5000/bike/${id}`)
            .then(res => res.json())
            .then(data => setBike(data))
    }, [id])

    const handleCheckout = () => {
        const orderDetails = { email: loggedInUser.email, bike: bike, orderTime: new Date() }
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Order Placed Successfully')
                }
            })
    }
    return (
        <div className="container">
            <div className="cart">
                <div className="col-md-12 col-lg-10 mx-auto classForEvent">
                    <div className="cart-item">
                        <div className="row">
                            <div className="col-md-7 center-item">
                                <h5>{bike.name}</h5>
                            </div>

                            <div className="col-md-5 center-item">
                                <div className="input-group number-spinner qty">
                                    <input type="text" className="form-control text-center" defaultValue="1" />
                                </div>
                                <h5>{bike.price}</h5>
                            </div>
                        </div>
                    </div>



                    <div className="cart-item">
                        <div className="row">

                            <div className="col-md-8">
                                <h5>Total:</h5>
                            </div>

                            <div className="col-md-4 status">
                                <h5>{bike.price}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 pt-4 pb-4">
                        <button onClick={handleCheckout} type="button" className="btn btn-success check-out">Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BikeCart;