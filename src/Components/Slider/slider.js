import React from "react";

import './slider.css'

import {services} from "../../Utils/utils";

import Box from "../Box/box";





const Slider = ({cart,setCart}) => {

    const [allData, setAllData] = React.useState([0,1,2,3,4]);

    const [indexor, setIndexor] = React.useState(0);

    React.useEffect(() => {
        fetch(`${services.apiUrl}`).then(result => result.json()).then(data => setAllData(data.slice(0,50)));

    },);



    const right = () => {

        if(indexor+5<=49)
        {
            setIndexor(indexor+5)
        }

    };

    const left  = () => {

        if(indexor>=5)
        {
            setIndexor(indexor-5);
        }

    };



    return (

        <div className="Slider">


            <button className="button" onClick={() => left()} disabled={indexor === 0}>&#11160;</button>

            <Box prod = {allData[indexor]} cart = {cart} setCart={setCart}/>
            <Box prod = {allData[indexor + 1]} cart = {cart} setCart={setCart}/>
            <Box prod = {allData[indexor + 2]} cart = {cart} setCart={setCart}/>
            <Box prod = {allData[indexor + 3]} cart = {cart} setCart={setCart}/>
            <Box prod = {allData[indexor + 4]} cart = {cart} setCart={setCart}/>

            <button className="button" onClick={() => right()} disabled={indexor === 45}>&#11162;</button>

            <span className="cart">{cart.length}</span>



        </div>
    );
}

export default Slider;