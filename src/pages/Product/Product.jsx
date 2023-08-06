import React, { useState, useEffect } from 'react'
import './Product.scss'
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { IoStarSharp } from 'react-icons/io5';
import { TbTruckDelivery, TbPigMoney, TbReplaceFilled, TbTruckReturn, TbBrandMyOppo } from 'react-icons/tb';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Product() {
    const { id } = useParams(); // Fetch the product ID from the URL
    const [product, setProduct] = useState([]);
    const [MainImages, setMainImages] = useState("");

    const offer = [
        {
            heading: "No Const EMI",
            data: "No Cost EMI Upto ₹179.80 EMI interest savings on Amazon Pay ICICI Bank Credit Cards, Bajaj Finserv EMI cardsUpto ₹179.80 EMI interest savings on Amazon Pay ICICI…"
        },
        {
            heading: "Bank Offer",
            data: "10% Instant Discount up to INR 1250 on SBI Credit Card Non-EMI Trxn. Min purchase value INR 5000"
        },
        {
            heading: "Caseback",
            data: "Amazon Pay Rewards - Earn Rs. 100 cashback when you shop for Rs.1000 or more using UPI Collect your offer here"
        },
    ]
    useEffect(() => {
        const fetchProductData = async () => {
            const db = getFirestore();
            const productRef = doc(db, 'product', id);
            try {
                const productSnapshot = await getDoc(productRef);
                if (productSnapshot.exists()) {
                    const productData = productSnapshot.data();
                    setProduct(productData); // Assuming images is an array of image URLs
                    setMainImages(productData.imgUrl[0])
                } else {
                    console.log('Product not found');
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProductData();
    }, [id]);

    // Calculate the discount percentage
    const discount = Math.floor((product.discount / 100) * product.price);
    const sellingprice = product.price - discount;
    return (
        <>
            <Header />
            <div className="item_main">
                <div className="img_cotainer">
                    {product.imgUrl && product.imgUrl.map((image, index) => (
                        <img src={image} key={index} onClick={((e) => setMainImages(image))} />
                    ))}

                </div>
                <div className="big_img_container">
                    <img src={MainImages} />
                </div>
                <div className="data_container">
                    <h3>{product.name}</h3>
                    <div className='raiting'>
                        <p>Rating:
                            {Array.from({ length: 5 }, (_, index) => (
                                <IoStarSharp style={{ color: index < 3 ? "yellow" : "gray" }} key={index} />
                            ))}
                        </p>
                        <p>6,111 ratings</p>
                        <hr />
                        <p>190 questions</p>

                    </div>
                    <hr />
                    <p className='discount'><p style={{ color: "red" }}>-{product.discount}%</p> ₹{sellingprice}</p>
                    <p style={{ color: "gray", textDecoration: "line-through" }}>MRP Price: {product.price}</p>
                    <hr />
                    <div className="offer_box">
                        {offer.map((data, index) => (
                            <div key={index}>
                                <h3>{data.heading}</h3>
                                <p>{data.data}</p>
                            </div>
                        ))}

                    </div>
                    <hr />
                    <div className="serviece">
                        <span>
                            <TbTruckDelivery />
                            <p>Free Delivery</p>
                        </span>
                        <span>
                            <TbPigMoney />
                            <p>Pay on Delivery</p>
                        </span>
                        <span>
                            <TbReplaceFilled />
                            <p>Replacement</p>
                        </span>
                        <span>
                            <TbTruckReturn />
                            <p>7 day Return Policy</p>
                        </span>
                        <span>
                            <TbBrandMyOppo />
                            <p>Top Brand</p>
                        </span>
                    </div>

                    <hr />
                    <div className="decription">
                        <h3>About this item</h3>
                        <div>
                            {product.description}
                        </div>
                    </div>
                    <div className='button_contianer'>
                        <button className='buynow'>Buy Now</button>
                        <button className='addtocart'>Add to Cart</button>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}
