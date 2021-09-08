import React from "react";

import './box.css';


const Box = ({prod,cart,setCart}) => {

    //global cart counter element that I used to count the array elements that have been added in to shopping cart by user
    let cart_cntr;

    const addCart = (val) => {
        
        //copying the real cart data (React state) and creating a backup (temp) data
        let backup = [...cart];
        
        //pushing the added product into backup data
        backup.push(val);
        
        //setting the updated (product-added) data into react state (cart)
        setCart(backup);
        
        //counting the number of elements in the cart
        cart_cntr = backup.length;
        
        //printing them into console log (the data can be used in variety of applications later)
        console.log(cart_cntr)
        console.log(backup)

    };

    return(
        
        //html part of the JSX
        <div className="ProdBox" >


            <span className="title" >{prod.title && prod.title.substring(0,15)}</span>

            <img className="Img" src ={prod.url} />

            <button className="AddCart" onClick={() => addCart(prod)}>Sepete Ekle</button>


        </div>

    );
};

export default Box;
