import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderList from '../OrderList/OrderList';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setLoading(false)
            })
    }, [loggedInUser])
    return (
        <div className='container'>
            <h2 className="text-center bg-info">Orders</h2>
            {loading && <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            <ul className="list-group">
                {
                    orders.map(order => <OrderList order={order}></OrderList>)
                }
            </ul>
        </div>
    );
};

export default Orders;