import React, { useEffect, useState } from 'react';
import BikeList from '../BikeList/BikeList';

const ManageBike = () => {
    const [bikes, setBikes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://protected-citadel-90750.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => {
                setBikes(data)
                // console.log('load done')
                setLoading(false)
            })
    }, [])
    return (
        <div className='container'>
            {loading && <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            <ul className="list-group">
                {
                    bikes.map(bike => <BikeList bike={bike}></BikeList>)
                }
            </ul>
        </div>
    );
};

export default ManageBike;