import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    // sending data or request to add data
    const handleAddProduct = () => {
        const product = {};
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }
    return (
        <div>
            <form action="">
                <p><span>Name</span><input type="text"></input></p>
                <p><span>Price</span><input type="text"></input></p>
                <p><span>Quantity</span><input type="text"></input></p>
                <p><span>Product Image </span><input type="file"></input></p>
                <button onClick={handleAddProduct}>Add Products</button>
            </form>

        </div>
    );
};

export default Inventory;