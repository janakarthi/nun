import React from 'react';
import "./portfolio.css";
import {products} from "../../data";

const Portfolio = ()=>{
        return (
            <div className="pl" >
                <div className="pl-texts">
                    <h1 className="pl-title">Create & Inspire </h1>
                    <p className="pl-description">We are prepare your ideas. Its comming soon</p>
                </div>
                <div className="pl-list">
                    {products.map((item) =>(
                        
                        <div className="p">
                <div className="p-browser">
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                </div>
                <a href={item.link} target="_blank" rel="noreferrer"> 
                    <img src={item.img} alt="" className="p-img" />
                </a>
            </div>
                        
                    ))}
                   
                    
                    
                </div>
            </div>
        )
    }

export default Portfolio;
