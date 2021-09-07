import React from "react";

import './box.css';




const Box = ({prod,cart,setCart}) => {


    let cart_cntr;

    const addCart = (val) => {
        let backup = [...cart];
        backup.push(val);
        setCart(backup);
        cart_cntr = backup.length;
        console.log(cart_cntr)
        console.log(backup)

    };

    return(
        <div className="ProdBox" >


            <span className="title" >{prod.title && prod.title.substring(0,15)}</span>

            <img className="Img" src ={prod.url} />

            <button className="AddCart" onClick={() => addCart(prod)}>Sepete Ekle</button>


        </div>

    );
};

export default Box;