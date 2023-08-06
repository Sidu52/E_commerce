import React, { useState } from 'react';
import axios from 'axios';
import './Product.scss';
import { product_categories } from '../../contact/data'
import { db } from "../../firebase";
import { collection, doc, setDoc } from 'firebase/firestore';

const Product = () => {
    const sellerId = localStorage.getItem('sellerId');
    const [product, setProduct] = useState({
        name: '',
        category: '',
        subcategory: '',
        description: '',
        price: '',
        discount: '',
        imgUrl: [],
    });

    const handleImageUpload = async e => {
        const selectedFiles = Array.from(e.target.files);
        const uploadedUrls = [];

        if (sellerId) {
            for (const file of selectedFiles) {
                // Upload image to Cloudinary
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', 'd30kumvm');
                formData.append('folder', 'ecommerce');

                const response = await fetch('https://api.cloudinary.com/v1_1/dukpzrn7a/image/upload', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();
                uploadedUrls.push(data.secure_url);
            }
        }
        setProduct({ ...product, imgUrl: uploadedUrls })
    }



    const handleAddProduct = async (event) => {
        event.preventDefault();
        if (sellerId) {
            const docRef = doc(collection(db, "product"));

            await setDoc(docRef, {
                name: product.name,
                category: product.category,
                subcategory: product.subcategory,
                description: product.description,
                price: product.price,
                imgUrl: product.imgUrl,
                discount: product.discount,
                seller: sellerId,
            });
        } else {
            console.log("Seller not Login")
        }

        setProduct({
            name: '',
            category: '',
            subcategory: '',
            description: '',
            price: '',
            discount: '',
            imgUrl: [],
        })

    }

    return (
        <div className="product-page">
            <h2>Add a New Product</h2>
            <div className="product-form">
                <input type="file" multiple
                    // onChange={e => setProduct({ ...product, imgUrl: e.target.files[0] })} 
                    onChange={e => handleImageUpload(e)}
                />
                <input type="text" placeholder="Product Name" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
                <label htmlFor="Category">Choose a Category:</label>
                <select name="Category" onChange={(e) => setProduct({ ...product, category: e.target.value })}>
                    {product_categories.map((category, index) => (
                        <option key={index} value={category.category}>{category.category}</option>
                    ))}
                </select>

                {product.category && (
                    <div>
                        <label htmlFor="Subcategory">Select a Subcategory:</label>
                        <select name="Subcategory" onChange={(e) => setProduct({ ...product, subcategory: e.target.value })}>
                            {product_categories
                                .find(category => category.category === product.category)
                                .subcategories.map((subcategory, index) => (
                                    <option key={index} value={subcategory}>
                                        {subcategory}
                                    </option>
                                ))}
                        </select>
                    </div>
                )}

                <input type="number" placeholder="Price" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />
                <input type="number" placeholder="Discount" value={product.discount} onChange={(e) => setProduct({ ...product, discount: e.target.value })} />
                <input type="article" placeholder="Product description" value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} />
                <button onClick={handleAddProduct}>Add Product</button>
            </div>
        </div>
    );
};

export default Product;
