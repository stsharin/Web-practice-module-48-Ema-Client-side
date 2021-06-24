import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    // sending data or request to add data
    const handleAddProduct = () => {
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <div>
            <button onClick={handleAddProduct}>Add Products</button>
        </div>
    );
};

export default Inventory;