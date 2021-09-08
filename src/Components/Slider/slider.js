import React from "react";

import './slider.css'

import {services} from "../../Utils/utils"; //taking the data from api url

import Box from "../Box/box";



const Slider = ({cart,setCart}) => {
    
    
    //all the data from api will be stored in here (initial state is [0,1,2,3,4] for showing the proper images firstly in the HTML return part)
    const [allData, setAllData] = React.useState([0,1,2,3,4]);
    
    //indexor element to show proper images (indexor element will be updated with next,prev buttons)
    const [indexor, setIndexor] = React.useState(0);
    
    //fetching the data from api (w/ no dependincies), (I've took the first 50 of 5000 data but it can be changed w/ .slice(x,y))
    React.useEffect(() => {
        fetch(`${services.apiUrl}`).then(result => result.json()).then(data => setAllData(data.slice(0,50)));

    },);


    //next button's 'onclick' func. it will update the indexor element by adding 5
    const right = () => {

        if(indexor+5<=49)
        {
            setIndexor(indexor+5)
        }

    };
    
    //prev button's 'onclick' func. it will subtract 5
    const left  = () => {

        if(indexor>=5)
        {
            setIndexor(indexor-5);
        }

    };



    return (

        <div className="Slider">

            <!-- prev button will be dissapear when the first 5 img is on screen, style have been taking from the internet -->
            <button className="button" onClick={() => left()} disabled={indexor === 0}>&#11160;</button>
            

            <!-- Calling the Box component that needs to be work together with slider component, fetched data that stored in 'allData' will be indexing w/ indexor element -->
            <!-- calling  the cart and setcart functions (react states) -->
            <Box prod = {allData[indexor]} cart = {cart} setCart={setCart}/>
            <Box prod = {allData[indexor + 1]} cart = {cart} setCart={setCart}/>
            <Box prod = {allData[indexor + 2]} cart = {cart} setCart={setCart}/>
            <Box prod = {allData[indexor + 3]} cart = {cart} setCart={setCart}/>
            <Box prod = {allData[indexor + 4]} cart = {cart} setCart={setCart}/>
            
                
            <!-- next button will be dissapear when the last 5 img is on screen, style have been taking from the internet -->
            <button className="button" onClick={() => right()} disabled={indexor === 45}>&#11162;</button>
            
            <!--showing the number of products that user added in her/his cart -->
            <span className="cart">{cart.length}</span>



        </div>
    );
}

export default Slider;
