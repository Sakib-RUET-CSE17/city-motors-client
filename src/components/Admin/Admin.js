import React, { useState } from 'react';
import AddBike from '../AddBike/AddBike';
import ManageBike from '../ManageBike/ManageBike';

const Admin = () => {
    const [showAddBike, setShowAddBike] = useState(true)
    const [showManage, setShowManage] = useState(false)

    const handleManage = () => {
        setShowAddBike(false)
        setShowManage(true)
    }

    const handleAddBike = () => {
        setShowAddBike(true)
        setShowManage(false)
    }
    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-2 bg-primary">
                    <button onClick={handleManage} className="btn btn-dark mt-5">Manage Bike</button>
                    <button onClick={handleAddBike} className="btn btn-dark mt-5">Add Bike</button>
                </div>
                <div className="col-md-10 bg-success">
                    {
                        showAddBike && <AddBike></AddBike>
                    }
                    {
                        showManage && <ManageBike></ManageBike>
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;