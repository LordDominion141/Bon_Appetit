import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
    Bell,
    Search,
    Utensils,
    Soup,
    GlassWater,
    Leaf,
    IceCream,
    Wine,
    ShoppingCart,
    Star,
    Home as LucideHomeIcon,
    User,
    ClipboardList,
    ShoppingBasket
} from "lucide-react";
import { useLocation } from "react-router-dom";



export function NavBar(){
    const location = useLocation();
    
    
    const navContent = [
        {id:"1", icons: LucideHomeIcon, label:"HOME", path: "/"},
        {id:"2", icons: Search, label:"SEARCH", path: "/search"},
        {id:"3", icons: ShoppingBasket, path: "/menu"},
        {id:"4", icons: ClipboardList, label:"ORDERS", path: "/orders"},
        {id:"5", icons: User, label:"PROFILE", path: "/profile"},
    ];
    
    return (
        <nav className="nav">
            {navContent.map(({ id, icons: Icons, label, path }) => {
                
                const isActive = location.pathname === path;

                
                return (
                    <Link 
                        key={id} 
                        to={path} 
                        className={`nav-content ${id === "3" ? "center" : ""} ${isActive ? "focus" : ""}`}
                    >
                        <Icons size={18} />
                        {label && <p>{label}</p>}
                    </Link>
                );
            })}
        </nav>
    );
}



function Popular(){
    
    const prodArray = [
        
    {id:"1", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuA9ZidVE8OQo2YtaRVCxEQU0sgHMe6PxjXk2CdcJq_MRAxCA21koff4gDy1hPPm6XhYhzEmvLYWNFGlZkbmDR0zr70nllKq5dhTbolhxmYXkK-iNKQ3-W_M0A2Rnm-NgC7Zvd1eonHlVqiPyh8T0BZB9NkzS04w-gcGMBjMu9b2xK4pCZyudnSLyWMVqUCLrBd1wbBp2f8STsHa5WSznax-zgI79q8tcjjHg1b3vJJQHUBvc185ELANMUsuPiOI6wmmg3fHYV9egMs", label:"Margherita Pizza", subLabel:"Wood-fired perfection", price:"$20.50", rating:"4.9"},
    {id:"2", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuCwmxyKMdQnHyb5EZ08SQ6IC8SpZ4TXD2Ddw4AUUs2YhidsS1tGAYKo7DwzDzJkX6MdSBeUiYvx2gsL_hGUTQfMoMpy3zmmG5HMZ4IEJwXBAiOdr-v-s_uBCAk4BGdL8jWlWqRbDFeXGXUJ3httKIk_54n9wId1McGGnjR2KfvQk9NFekPQYUr3y0lo5kbglXOOzMTQfZvgRBzNiNgGG3fYGVbugqM4KKry4A8xEdi2XVknukN3PmVH0JZ7eW4EW-I92FkzQVewBTs", label:"Salmon Poke Bowl", subLabel:"Fresh Atlantic Salmon", price:"$22.00", rating:"4.8"},
    {id:"3", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuC0gexawD2xqGdDLdWYW7Yb8Azc7hTtMkx1Hm_ubLh1Ukhjk9JafAPx4GY3bxvNgOySle22szKTdsfPRrNMOcS3XnvKdMuazYDFXjvkrgWDehSjUjkODMxv-tKIU4PZsD5WNCFP1rGF69YMcdviCmqw9h5Ec8Za_JHCB8IuBtovqElG2OQK7RdCUUPzLUvIQY7slZ0xbofAnebavHEVbxDgUu7Png0BXfJFP1Gxq9PwAdGiodCFTkqOXFncDjEnldOJkFAdQ4qlIKo", label:"Chocolate Lava", subLabel:"Molten Dark Chocolate", price:"$12.00", rating:"5.0"},
    
        ]
    
    
    return(
    <section className="popular-container">
        <div className="pop-text">
            <h3>Most Popular </h3> <p>View More</p>
        </div>
        <div className="item-container">
            
            
            
            {prodArray.map(({id, label, subLabel, price, rating, img}) => (
            
        <div key={id} className="product-container"> 
            <div className="product-content1" style={{
                backgroundImage: `url(${img})`
                
            }}>
            </div>
            
            <div className="product-content2">
                <div className="sub-prod-content1">
                    <div className="prod-text">
                        <h5>{label}</h5> <p>{subLabel}</p>
                    </div>
                    <h3>{price}</h3>
                </div>
                <div className="sub-prod-content2">
                   
                    <div className="rating">
                      <Star size={10}/> <p> {rating}</p>
                       </div>
                        <div className="cart-icon">
                            <ShoppingCart size={18}/>
                        </div>
                    
                </div>
            </div>
            
            </div>
            
            
           )) }
            
            
            
        </div>
    </section>
    )
}


function ChefsFeatuted() {
const [startX, setStartX] = useState(0);
const [index, setIndex] = useState(0);

let currentX = 0;
    
    const myDots = [
        {id: "1"},
        {id: "2"},
        {id: "3"}
        ]
        
    const myList = [
{id: "box1", title: "Premium Selection", h3: "Wagyu Ribeye Steak", p: "Aged for 45 days, served with truffle butter.", price: "$45.00",
im: "https://lh3.googleusercontent.com/aida-public/AB6AXuALtowJEZNal4RDV17nxRgYEhhwS21dAoDsRPOsG0Yngeu9fQxpFuYd1F5sjaJJ70mRxzNExhJN8Mb1Z3NNhi3jCij4sTfz6B0up_63yB-n13it7ufSrAVIsAGpAqTX9Swrdz_t3uOWSP0AaSgAJUpo50bwA4rxFGYmQ5qQchZyqz8bIDupcDc8ey3vbfU3wM0g-6F6eH0RQw1oSskBQJrDQBpStSkK1EAdtufk8uKskgKJ_zJ6mb2w3HAfvgLbphGk-Yx8IYll0DQ"},

{id: "box2", title: "Premium Selection", h3: "Herb Butter Grilled Beef", p: "Enjoy Alongside Rare Sauce.", price: "$40.00",
im: "https://images.unsplash.com/photo-1657053460900-3a12f32b592f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{id: "box3", title: "Premium Selection", h3: "Herb‑Tossed Octopus", p: "Ocean's Delight..", price: "$49.00",
im: "https://images.unsplash.com/photo-1709971351870-9b8613d2b5bf?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
        ]
        
function handleSwipe(){

const distance = currentX - startX;

if(distance > 60 && index > 0){
setIndex(prev => prev - 1);
}

if(distance < -60 && index < myList.length - 1){
setIndex(prev => prev + 1);
}
    
}
    return(
    <section className="chef-container">
    <div className="chef-text-content">
    <h3>Chef's Featured</h3> 
    <div className="dots">
        
     {myDots.map((dot, i)=>(
<div
key={dot.id}
className="dot"
style={{
backgroundColor: index === i ? "#eebd2b" : ""
}}
></div>
))}
    </div>
     </div>
     
     
     <div className="slider">
         
     <div className="chef-img-wrap"
onTouchStart={(e)=> setStartX(e.touches[0].clientX)}
onTouchMove={(e)=> currentX = e.touches[0].clientX}
onTouchEnd={handleSwipe}

style={{
transform: `translateX(-${index * 100}%)`
}}>
         
         
   {myList.map(({
       id, title, h3, p, price, im
   }) =>(
   <div key={id} className="chef-img-content"
   style={{
       backgroundImage: `url(${im})`
   }}>
        <div className="sub-content1">
        <div className="title">{title}</div> 
                <h3>{h3}</h3> <p>{p}</p>
            </div>
            <div className="sub-content2">
                <div className="price"><b>{price}</b></div>
            </div>
     
    </div>))}
    
    </div>
    </div>
        </section>)
    
}

function Category() {

    const [category,
        setCategory] = useState(null);
    const variety = [{
        id: "ball-1",
        label: "Italian",
        icon: Utensils
    },
        {
            id: "ball-2",
            label: "Japanese",
            icon: Soup
        },
        {
            id: "ball-3",
            label: "Mexican",
            icon: GlassWater
        },
        {
            id: "ball-4",
            label: "Vegan",
            icon: Leaf
        },
        {
            id: "ball-5",
            label: "Dessert",
            icon: IceCream
        },
        {
            id: "ball-6",
            label: "Drink",
            icon: Wine
        }]

    return(<>
        <section>

            <div className="category-wrap">
                <div className="category-content">
                    <h3>Categories</h3> <p>
                        VIEW ALL
                    </p>
                </div>
            </div>


            <div className="variety-container">
                <div className="variety-content">
                    {variety.map(({
                        id, label, icon: Icon
                    }) => (
                        <div key={id} className="category-item"
                            onClick={()=> setCategory(id)}>
                            <div className={`icon-ball ${category === id? "active": ""}`}>
                                <Icon size={20} />
                            </div>
                            <p className={`label ${category === id? "bold": ""}`}>
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    </>
    )
}

function MySearch() {
    const [isSearchActive,
        setIsSearchActive] = useState(false);

    return(<>
        <main className="main">
            <div className="search-container">
                <Link className="my-link" to="/search"><div className={`search-wrap ${isSearchActive? "active": ""}`}>
                    <Search className="search-icon" size={22} />
                    <input className="search-bar" placeholder="Find your favorite dish or cuisine..."
                    onFocus={()=> setIsSearchActive(true)}
                    onBlur={()=> setIsSearchActive(false)} />

            </div>
            </Link>
        </div>
    </main>
    </>)
}


function Header( {
brandName, brandSub, logoUrl, showNotification
}) {
const [isBellActive,
setIsBellActive] = useState(false);
return(<>
<div className="header-container">
<header className="header-content">

<div className="logo-group">
<div className="logo-box">
<img className="logo-img"src={logoUrl} alt="Logo" />
</div>
<div className="brand-text-container">
<h1>{brandName}</h1>
<p className="brand-sub">
{brandSub}
</p>
</div>
</div>

{showNotification && (<button className="notification-btn"
onClick={()=>setIsBellActive(!isBellActive)} aria-pressed={isBellActive}>

<Bell size={22}
fill={ isBellActive? "#eebd2b": "none"
}
style={ { color: "#eebd2b" }} />
</button>)}
</header>
</div>
<div className="spacer"></div>
</>
)
}

function Home() {
    return (
        <div className="home-wrapper"> {/* Added a wrapper div */}
            <Header
                brandName="Bon Appétit"
                brandSub="Exquisite Dining"
                logoUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAd8pg8l6JRC4pnRK5t4m0A_TdO0Pl-BkMz3RFoHYsHRpVhijEjiHZ2W7sxo73tOs7vKT4ncJ07rW9dmBX1rppKAPCsiUG60Z03sewS0anMHYxddv-i5EAm3wIEVgTv1WFbR-KUkK73BLStSOYo9hP0CMhbce4aXz265_7-0ZD8LAPD7qeJRiekVSzHK9zoTmvMnngG50iXx6b3c9ENV6DYvVMxTLcGwilirZbJjXuEyLxr-uxGsHl2CJJe7vcuWQPZ0kRob6T22oE"
                showNotification={true}
            />
            <MySearch />
            <Category />
            <ChefsFeatuted/>
            <Popular/>
        </div>
    );
}

export default Home;