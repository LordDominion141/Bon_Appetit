import React from 'react';
import {useState} from 'react';
import "./Search.css";
import {Search as MySearch} from "lucide-react";
import { ChevronLeft, X, Star } from "lucide-react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function SearchCard({id, img, title, price, text, rate}){
    return(
        <div className="search-card">
            <div className="img-cont"
            style={{
                backgroundImage: `url(${img})`
            }}>
                <div className="card-rating">
                    <Star size={10}/> {rate}
                </div>
            </div>
            <div className="text-cont">
                <div className="sub-cont1">
                    <h3 className="card-title">{title}</h3>
                    <h3 className="card-price">{price}</h3>
                </div>
                <div className="sub-cont2">
                    <p className="card-text">{text}</p>
                </div>
                <div className="sub-cont3">
                    <button className="add-btn">ADD TO CART</button>
                </div>
            </div>
        </div>
        )
}



export default function Search(){
    
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleBack = () => {
        if (window.history.length > 1 && window.history.state?.idx > 0) {
            navigate(-1);
        } else {
            navigate("/");
        }
    };
    
    
    const cards = [
{id:1, title: "Tuna Tartare", price: "$18.00", text: "Yellowfin tuna, avocado, citrus ponzu, crispy sesame crackers.", img: "https://somuchfoodblog.com/wp-content/uploads/2022/12/tuna-tartare10.jpg", rate: "4.5"},
{id:2, title: "Wagyu Carpaccio", price: "$22.00", text: "A5 Wagyu, truffle oil, shaved parmacan, wild arugula.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4Np5KEg7M76IZbKpv8x_4gtzSej-uFxpvwW7qYj-mqKpvbwEMyys8Yw&s=10", rate: "4.3"},
{id:3, title: "Grilled Ribeye", price: "$45.00", text: "45-day aged beef, served with house-made truffle herb butter.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALtowJEZNal4RDV17nxRgYEhhwS21dAoDsRPOsG0Yngeu9fQxpFuYd1F5sjaJJ70mRxzNExhJN8Mb1Z3NNhi3jCij4sTfz6B0up_63yB-n13it7ufSrAVIsAGpAqTX9Swrdz_t3uOWSP0AaSgAJUpo50bwA4rxFGYmQ5qQchZyqz8bIDupcDc8ey3vbfU3wM0g-6F6eH0RQw1oSskBQJrDQBpStSkK1EAdtufk8uKskgKJ_zJ6mb2w3HAfvgLbphGk-Yx8IYll0DQ", rate: "5.0"},
{id:4, title: "Herb Grilled Beef", price: "$40.00", text: "Enjoy Alongside Rare Sauce and fries.", img: "https://images.unsplash.com/photo-1657053460900-3a12f32b592f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rate: "4.5"},
{id:5, title: "Margherita Pizza", price: "$20.50", text: "Enjoy Wood-fired pizza with rare toppings.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9ZidVE8OQo2YtaRVCxEQU0sgHMe6PxjXk2CdcJq_MRAxCA21koff4gDy1hPPm6XhYhzEmvLYWNFGlZkbmDR0zr70nllKq5dhTbolhxmYXkK-iNKQ3-W_M0A2Rnm-NgC7Zvd1eonHlVqiPyh8T0BZB9NkzS04w-gcGMBjMu9b2xK4pCZyudnSLyWMVqUCLrBd1wbBp2f8STsHa5WSznax-zgI79q8tcjjHg1b3vJJQHUBvc185ELANMUsuPiOI6wmmg3fHYV9egMs", rate: "4.7"},
{id:6, title: "Artisan Strawberry Tart", price: "$15.00", text: "A buttery shortbread crust filled with velvety pastry cream.", img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=800&auto=format&fit=crop", rate: "4.9"},
{id:7, title: "Decadent Chocolate Brownie", price: "$20.50", text: "Rich, fudgy dark chocolate brownie topped with sea salt flakes.", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop", rate: "4.8"},
{id:8, title: "Chocolate Lava", price: "$12.00", text: "Molten dark chocolate.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0gexawD2xqGdDLdWYW7Yb8Azc7hTtMkx1Hm_ubLh1Ukhjk9JafAPx4GY3bxvNgOySle22szKTdsfPRrNMOcS3XnvKdMuazYDFXjvkrgWDehSjUjkODMxv-tKIU4PZsD5WNCFP1rGF69YMcdviCmqw9h5Ec8Za_JHCB8IuBtovqElG2OQK7RdCUUPzLUvIQY7slZ0xbofAnebavHEVbxDgUu7Png0BXfJFP1Gxq9PwAdGiodCFTkqOXFncDjEnldOJkFAdQ4qlIKo", rate: "4.7"},
{id:9, title: "Tropical Citrus Spritz", price: "$12.00", text: "A refreshing, vibrant blend of blood orange and sparkling water.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop", rate: "4.9"},
{id:10, title: "Iced Berry Infusion", price: "$10.00", text: "A cool, antioxidant-rich forest berry tea.", img: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=800&auto=format&fit=crop", rate: "5.0"}
        ]
    

        
    const filteredItems = cards
  .filter((card) => {
    const search = searchTerm.toLowerCase();
    return (
      card.title.toLowerCase().includes(search) || 
      card.text.toLowerCase().includes(search)
    );
  })
  .sort((a, b) => {
    const search = searchTerm.toLowerCase();
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();
    const aStarts = aTitle.startsWith(search);
    const bStarts = bTitle.startsWith(search);
    if (aStarts && !bStarts) return -1;
    if (!aStarts && bStarts) return 1;
    const aIndex = aTitle.indexOf(search);
    const bIndex = bTitle.indexOf(search);

    if (aIndex !== bIndex) {
      return aIndex - bIndex;
    }
    return aTitle.localeCompare(bTitle);
  });
  
  

    return(<>
        <div className="search-bar-container">
                
     <button className="back-button" onClick={handleBack}><ChevronLeft size={20}/></button>
    
        
       <div className="searcher">
           <MySearch size={20}/>
            <input className="search-box"
        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        
                      {(searchTerm.length > 0) && (<button
              
      className="clear-button"
      onClick={()=>setSearchTerm("")}><X size={2}/></button>)}  
        </div>
        
        
        </div>
        
        
     
     <section className="card-section">

        
        {searchTerm.length > 0? 
        filteredItems.length === 0? <p>Results not found!</p>:
        
               filteredItems.map((card)=> (
         <SearchCard key={card.id} {...card} />
        )): <p>Search for your favorite dishes...</p>
        }
        
       
     </section>
     
     
        
    </>)
}