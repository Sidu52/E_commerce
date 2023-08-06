import React, { useState, useEffect } from 'react';
import './Home.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SlideShow from '../../components/SlideShow/SlideShow';
import Card4x4 from '../../components/4x4Card/Card4x4';
import Scrollcard from '../../components/scrollcard/Scrollcard';
import { db } from "../../firebase";
import { collection, onSnapshot } from 'firebase/firestore';

export default function Home() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "product"), (snapShot) => {
            const data = snapShot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            setProduct(data);
        });
        return () => unsub();
    }, []);

    // Function to filter products based on category and subcategory
    function filterProducts(categories, subcategories) {
        return product.filter(item =>
            categories.includes(item.category) && subcategories.includes(item.subcategory)
        );
    }
    // Function to filter products based on discount
    function filterProductsByDiscount(discount) {
        return product.filter(item =>
            item.discount >= 50
        );
    }

    function filtersProducts(data) {
        return product.filter(item => item.category == data)
    }

    return (
        <>
            <Header />
            <div className='home'>
                <SlideShow />

                <div className='card_container'>
                    {/* //take data from product */}
                    <Card4x4
                        heading="Smartphones that suit your budget"
                        data={filterProducts(
                            ["Electronics"],
                            ["Smartphones"]
                        )} />
                    <Card4x4
                        heading="50% - 80% off | Men's fashion"
                        data={filterProducts(
                            ["Fashion"],
                            ["Men's Clothing",
                                "Women's Clothing",
                                "Shoes",
                                "Bags",
                                "Accessories",])} />
                    <Card4x4
                        heading="Up to 70% off | Home, kitchen & outdoors"
                        data={filterProducts(
                            ["Home & Furniture"],
                            ["Kitchen & Dining"]
                        )} />
                    <div className="ad">
                        <img src="https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif" />
                        <h3>Hello Buyer</h3>
                    </div>
                </div>
                <div className='card_container'>
                    <div className="ad extraAdStryle" >
                        <h3 style={{ fontSize: "2rem " }}>Starting ₹129 | Monitors, storage, accessories & more</h3>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/aa23/pdacc/gw/unrec/PC_CC_379x304._SY304_CB599426206_.jpg" />
                    </div>
                    <Card4x4
                        data={filterProducts(
                            ["Electronics"],
                            ["Smartphones"]
                        )} />
                    <div className="ad extraAdStryle" >
                        <h3 style={{ fontSize: "1.5rem " }}>Up to 35% off on medicines</h3>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/AUG23/PC_CC_379x304_AUGART._SY304_CB599354219_.jpg" />
                    </div>
                    <Card4x4
                        data={filterProducts(
                            ["Fashion"],
                            ["Men's Clothing",
                                "Women's Clothing",
                                "Shoes",
                                "Bags",
                                "Accessories",])}
                    />
                </div>
                <Scrollcard heading="Best Discount offer" data={filterProductsByDiscount(product.discount)} value={true} />
                <Scrollcard heading="Funiture For Decorate Home" data={filtersProducts("Home & Furniture")} value={false} />
                <Scrollcard heading="Today fashion" data={filtersProducts("Fashion")} value={false} />
                <Scrollcard heading="Electronic Market" data={filtersProducts("Electronics")} value={true} />

                <div className='card_container'>
                    <Card4x4
                        data={filterProducts(
                            ["Home & Furniture"],
                            ["Kitchen & Dining"]
                        )} />
                    <Card4x4
                        data={filterProducts(
                            ["Fashion"],
                            ["Men's Clothing",
                                "Women's Clothing",
                                "Shoes",
                                "Bags",
                                "Accessories",])}
                    />
                    <div className="ad" style={{ height: "auto" }}>
                        <h3>Hip Hop India |Watch Now Only on miniTV</h3>
                        <img src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" />
                    </div>
                    <Card4x4
                        data={filterProducts(
                            ["Home & Furniture"],
                            ["Furniture",
                                "Home Decor",
                                "Kitchen & Dining",
                                "Bedding & Linens",
                                "Storage & Organization",])}
                    />
                </div>
                <Scrollcard value={false} />
                <div className='card_container'>
                    <Card4x4
                        data={filterProducts(
                            ["Home & Furniture"],
                            ["Furniture",
                                "Home Decor",
                                "Kitchen & Dining",
                                "Bedding & Linens",
                                "Storage & Organization",])}

                    />
                    <div className="ad" style={{ height: "auto" }}>
                        <h3>Hip Hop India |Watch Now Only on miniTV</h3>
                        <img src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" />
                    </div>
                    <div className="ad" style={{ height: "auto" }}>
                        <h3>Hip Hop India |Watch Now Only on miniTV</h3>
                        <img src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" />
                    </div>
                    <Card4x4
                        data={filterProducts(
                            ["Home & Furniture"],
                            ["Furniture",
                                "Home Decor",
                                "Kitchen & Dining",
                                "Bedding & Linens",
                                "Storage & Organization",])}

                    />
                </div>
                <Scrollcard value={false} />
                <div className='backtotop'>
                    <a href="#">Back to top</a>

                </div>
            </div>
            <Footer />
        </>
    );
}
