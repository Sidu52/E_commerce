import React, { useState } from 'react';
import './Seller.scss';
import { db } from "../../firebase";
import { collection, doc, setDoc } from 'firebase/firestore';



export default function Seller() {
    const [formData, setFormData] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        conformPassword: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (formData.password === formData.conformPassword) {
            const docRef = doc(collection(db, "seller"));
            await setDoc(docRef, {
                user: formData.userName,
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password
            });
            setFormData({ userName: '', firstName: '', lastName: '', email: '', password: '', conformPassword: '', })
        }
        console.log("Password not match");
    };

    return (
        <div className="registration-form">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="userName"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
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
                <input
                    type="password"
                    name="conformPassword"
                    placeholder="Conform Password"
                    value={formData.conformPassword}
                    onChange={handleInputChange}
                    required
                />
                {/* Other input fields for last name, email, password, confirmPassword */}
                <button type="submit">Register</button>
            </form>
        </div>
    );
}