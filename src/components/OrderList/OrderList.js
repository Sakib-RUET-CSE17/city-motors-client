import React from 'react';

const OrderList = ({ order }) => {
    const { orderTime, bike } = order
    const { name, cc, price } = bike

    return (
        <li className="list-group-item">
            {new Date(orderTime).toLocaleString()} {'->'} {name} - {cc} CC - BDT {price}
        </li>
    );
};

export default OrderList;