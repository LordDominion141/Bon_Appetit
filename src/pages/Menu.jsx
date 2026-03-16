import React from 'react';
import {useState} from "react";
import "./Menu.css";
import {ShoppingBasket, Search, ShoppingBag, Plus} from "lucide-react";
import { Link } from 'react-router-dom';

function MenuItem({ img, title, price, text }) {
    return (
        <div className="starter-box">
            <div className="starter-image" style={{ backgroundImage: `url(${img})` }}></div>
            <div className="starter-image-text">
                <div className="title-price">
                    <h3>{title}</h3>
                    <h4>{price}</h4>
                </div>
                <div className="starter-paragraph">{text}</div>
                <div className="starter-icon-wrap">
                    <div className="starter-icon"><Plus size={16}/></div>
                </div>
            </div>
        </div>
    );
}

function MenuSection({ title, list }) {
    return (
        <section className="starters-container">
            <div className="starter-label-content">
                <div className="starter-label">
                    <div className="label-line"></div>
                    <h3>{title}</h3>
                </div>
                <div className="starter-amount">
                    {list.length} ITEMS
                </div>
            </div>
            <div className="starter-image-content">
                {list.map(item => (
                    <MenuItem key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
}





function MenuHeader({ menuActive, setMenuActive }) {
    const menuType = [
        {id: "men1", label: "All"},
        {id: "men2", label: "STARTERS"},
        {id: "men3", label: "MAIN COURSE"},
        {id: "men4", label: "DESSERTS"},
        {id: "men5", label: "DRINKS"}
    ];

    return (
        <header className="menu-head-container">

            <div className="menu-head-content1">
                <div className="main-icon">
                    <ShoppingBasket size={24} />
                </div>
                <h2 className="main-title">BON APPÉTIT</h2>
                <div className="sub-icon">
                    <ShoppingBag size={21} />
                </div>
            </div>

            <div className="menu-head-content2">
                <Link className="my-link" to="/search">
                <div className="search-div">
                    <Search size={22} />
                    <input 
                        className="menu-search-bar" 
                        type="text" 
                        placeholder="Search for your favorite dish..." 
                    />

                </div>
                                    </Link>
            </div>

            <div className="menu-head-content3">
                <div className="menu-box-wrap">
                    {menuType.map(({ id, label }) => (
                        <div 
                            key={id}
                            className={`menu-box ${menuActive === id ? "active" : ""}`}
                            onClick={() => setMenuActive(id)}
                        >
                            {label}
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
}



export default function Menu() {
    
    const [menuActive, setMenuActive] = useState("men1");

    const starterList = [
        {id:"start1", title: "Tuna Tartare", price: "$18.00", text: "Yellowfin tuna, avocado, citrus ponzu, crispy sesame crackers.", img: "https://somuchfoodblog.com/wp-content/uploads/2022/12/tuna-tartare10.jpg"},
        {id:"start2", title: "Wagyu Carpaccio", price: "$22.00", text: "A5 Wagyu, truffle oil, shaved parmacan, wild arugula.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4Np5KEg7M76IZbKpv8x_4gtzSej-uFxpvwW7qYj-mqKpvbwEMyys8Yw&s=10"}
    ];

    const mainList = [
        {id:"main1", title: "Grilled Ribeye", price: "$45.00", text: "45-day aged beef, served with house-made truffle herb butter.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALtowJEZNal4RDV17nxRgYEhhwS21dAoDsRPOsG0Yngeu9fQxpFuYd1F5sjaJJ70mRxzNExhJN8Mb1Z3NNhi3jCij4sTfz6B0up_63yB-n13it7ufSrAVIsAGpAqTX9Swrdz_t3uOWSP0AaSgAJUpo50bwA4rxFGYmQ5qQchZyqz8bIDupcDc8ey3vbfU3wM0g-6F6eH0RQw1oSskBQJrDQBpStSkK1EAdtufk8uKskgKJ_zJ6mb2w3HAfvgLbphGk-Yx8IYll0DQ"},
        {id:"main2", title: "Herb Grilled Beef", price: "$40.00", text: "Enjoy Alongside Rare Sauce and fries.", img: "https://images.unsplash.com/photo-1657053460900-3a12f32b592f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {id:"main3", title: "Margherita Pizza", price: "$20.50", text: "Enjoy Wood-fired pizza with rare toppings.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9ZidVE8OQo2YtaRVCxEQU0sgHMe6PxjXk2CdcJq_MRAxCA21koff4gDy1hPPm6XhYhzEmvLYWNFGlZkbmDR0zr70nllKq5dhTbolhxmYXkK-iNKQ3-W_M0A2Rnm-NgC7Zvd1eonHlVqiPyh8T0BZB9NkzS04w-gcGMBjMu9b2xK4pCZyudnSLyWMVqUCLrBd1wbBp2f8STsHa5WSznax-zgI79q8tcjjHg1b3vJJQHUBvc185ELANMUsuPiOI6wmmg3fHYV9egMs"}
    ];




const dessertList = [
        {id:"des1", title: "Artisan Strawberry Tart", price: "$15.00", text: "A buttery shortbread crust filled with velvety pastry cream.", img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=800&auto=format&fit=crop"},
        {id:"des2", title: "Decadent Chocolate Brownie", price: "$20.50", text: "Rich, fudgy dark chocolate brownie topped with sea salt flakes.", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop"},
         {id:"des3", title: "Chocolate Lava", price: "$12.00", text: "Molten dark chocolate.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0gexawD2xqGdDLdWYW7Yb8Azc7hTtMkx1Hm_ubLh1Ukhjk9JafAPx4GY3bxvNgOySle22szKTdsfPRrNMOcS3XnvKdMuazYDFXjvkrgWDehSjUjkODMxv-tKIU4PZsD5WNCFP1rGF69YMcdviCmqw9h5Ec8Za_JHCB8IuBtovqElG2OQK7RdCUUPzLUvIQY7slZ0xbofAnebavHEVbxDgUu7Png0BXfJFP1Gxq9PwAdGiodCFTkqOXFncDjEnldOJkFAdQ4qlIKo"}
    ];





const drinksList = [
        {id:"dr1", title: "Tropical Citrus Spritz", price: "$12.00", text: "A refreshing, vibrant blend of blood orange and sparkling water.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"},
        {id:"dr2", title: "Iced Berry Infusion", price: "$10.00", text: "A cool, antioxidant-rich forest berry tea.", img: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=800&auto=format&fit=crop"}
    ];





    return (
        <>
            
            <MenuHeader menuActive={menuActive} setMenuActive={setMenuActive} />
            
            {(menuActive === "men1" || menuActive === "men2") && (
                <MenuSection title="Signature Starters" list={starterList} />
            )}
            
            {(menuActive === "men1" || menuActive === "men3") && (
                <MenuSection title="Main Course" list={mainList} />
            )}

            {(menuActive === "men1" || menuActive === "men4") && (
                <MenuSection title="Dessert" list={dessertList} />
            )}

            {(menuActive === "men1" || menuActive === "men5") && (
                <MenuSection title="Drinks" list={drinksList} />
            )}
        </>
    );
}