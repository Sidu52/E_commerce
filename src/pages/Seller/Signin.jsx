import React, { useState } from 'react';
import './Seller.scss';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'; // Update import

export default function Signin() {
    const [formData, setFormData] = useState({
        user: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const db = getFirestore();

        // Find seller by username
        const sellersCollectionRef = collection(db, 'seller');
        const querySnapshot = await getDocs(query(sellersCollectionRef, where('user', '==', formData.user)));

        if (!querySnapshot.empty) { // Check if the query result is not empty
            querySnapshot.forEach((doc) => {
                const sellerData = doc.data();
                if (sellerData.password === formData.password) {
                    // User exists, you can proceed with the login logic here
                    localStorage.setItem('sellerId', doc.id);
                    console.log('Seller found:', doc.id, '=>', sellerData);
                } else {
                    console.log('Incorrect password');
                }
            });
        } else {
            console.log('User not found');
        }

        setFormData({ user: '', password: '' });
    };

    return (
        <div className="registration-form">
            <h2>Login Account</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="user"
                    placeholder="Username"
                    value={formData.user}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
