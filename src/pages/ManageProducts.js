import React, { useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });

    const handleAddProduct = () => {
        if (!newProduct.name || !newProduct.price) {
            alert('Please fill in all fields.');
            return;
        }
        setProducts([...products, { ...newProduct, id: Date.now() }]);
        setNewProduct({ name: '', description: '', price: '' });
    };

    const handleDeleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div>
            <h2>Manage Products</h2>
            <div>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                <button onClick={handleAddProduct}>Add Product</button>
            </div>

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageProducts;