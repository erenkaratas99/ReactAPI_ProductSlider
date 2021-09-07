import React from "react";





import Slider from '../Components/Slider/slider'

const MainComponent = () => {


  const [cart, setCart] = React.useState([]);



  return (
      <>
        <div className="main">
          <Slider cart={cart} setCart={setCart}/>

        </div>
      </>

  );
}


export default MainComponent;
