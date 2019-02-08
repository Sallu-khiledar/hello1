import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./index.css";
export class Demo extends Component {
  render() {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false} >
        <div style={styleimg}>
            <img src="https://i.kym-cdn.com/entries/icons/mobile/000/028/004/mafmeme2.jpg" alt=" " style={stimg}/>
           
            <p className="legend" style={sty} >meme 1</p>
        
        </div>
        <div style={styleimg}> 
            <img src="https://pics.me.me/this-is-how-mafia-works-lv-35-boss-lv-1-39539704.png" alt=" " style={stimg} />
            <p className="legend" style={sty}> meme 2</p>
        </div>
        <div style={styleimg}>
        <div>
            <img src="https://i.kym-cdn.com/entries/icons/mobile/000/009/740/DoULift.jpg" alt=" " style={stimg}/>
           </div>
           <div>
            <p className="legend" style={sty}>meme 3</p>
            </div>
        </div>
        </Carousel>
    )
  }
}

const sty={
    position:'relative',
    top:'8px',
    width:'80%'

}

const styleimg=
{
    
        
        padding : '5px',
        width:'50%',
        
        
      
      
        
      
}

const stimg=
{
    width:'200%',
    height:'300px',
    layout:'liquid',
    borderradius:'15px',
    
}

export default Demo