import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const BikeList = ({ bike }) => {
    const { _id, name, cc, price } = bike
    const [edit, setEdit] = useState(false)
    const [editedPrice, setEditedPrice] = useState(price)

    const deleteBike = id => {
        // console.log(id)
        fetch(`https://protected-citadel-90750.herokuapp.com/deleteBike/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                document.getElementById(id).innerHTML = ''
            })
    }

    const editBike = () => {
        if (edit) {
            const bikeData = { price: editedPrice }
            fetch(`https://protected-citadel-90750.herokuapp.com/updateBike/${_id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bikeData)
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {
                        setEdit(false)
                    }
                })
        }

        else { setEdit(true) }
    }
    return (
        <li id={_id} className="list-group-item">
            {name} - {cc} CC - BDT {edit ? <input onChange={e => setEditedPrice(parseInt(e.target.value))} type="text" defaultValue={editedPrice} /> : editedPrice}

            <button onClick={() => editBike(_id)} className="badge bg-warning rounded">{edit ? <>OK</> : <FontAwesomeIcon icon={faEdit} />}</button>
            <button onClick={() => deleteBike(_id)} className="badge bg-danger rounded"><FontAwesomeIcon icon={faTrashAlt} /></button>
        </li>
    );
};

export default BikeList;