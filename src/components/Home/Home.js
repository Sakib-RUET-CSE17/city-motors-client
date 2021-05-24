import React, { useEffect, useState } from 'react';
import BikeCard from '../BikeCard/BikeCard';

const Home = () => {
    const [bikes,setBikes]=useState([])
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
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    bikes.map(bike=><BikeCard bike={bike}></BikeCard>)
                }
            </div>
        </div>
    );
};

export default Home;