import React from "react";
import { render } from "react-dom";
import Carousel from "./Demo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./Header"



const App = () => (

    
  <div style={styleimg} >
   <Header />
    <Carousel />
  </div>
);

const styleimg=
{
    
      
        width:'50%',
        height:'50px',
        margin:'0 auto',
      
        
      
      
        
      
}


render(<App />, document.getElementById("root"));
