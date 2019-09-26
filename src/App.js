import img02 from './iphone-top.png';
import img03 from './iphone-2.png';
import img04 from './ipad.png';
import img05 from './iphone-low.png';
import img06 from './last-iphone.png';
import svg from './ghost.svg'
import './App.css';

import React, { Component } from 'react';
import Plx from "react-plx";

const exampleParallax1 = [
  {
    start: 350,
    end: 699,
    properties: [
      {
        startValue: 0,
        endValue: -12,
        property: "translateY",
        unit: "vh",
      },
    ]
  },
  {
    start: 1200,
    end: 1350,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      }
    ]
  }
]
const exampleParallax2 = [
  {
    start: 350,
    end: 699,
    properties: [
      {
        startValue: 0,
        endValue: -36,
        property: "translateY",
        unit: "vh",
      },
    ]
  },
  {
    start: 1000,
    end: 1150,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      }
    ]
  }
]
const exampleParallax3 = [
  {
    start: 350,
    end: 699,
    properties: [
      {
        startValue: 0,
        endValue: -66,
        property: "translateY",
        unit: "vh",
      },
    ]
  },
  {
    start: 900,
    end: 990,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      }
    ]
  }
]
const exampleParallax4 = [
  {
    start: 350,
    end: 699,
    properties: [
      {
        startValue: 0,
        endValue: -74,
        property: "translateY",
        unit: "vh",
      },
    ]
  },
  {
    start: 450,
    end: 450,
    properties: [
        {
            startValue: 0,
            endValue: 60,
            property: "rotate",
            unit: "deg"
          }
    ]
  },
  {
    start: 451,
    end: 699,
    properties: [
        {
            startValue: 60,
            endValue: 0,
            property: "rotate",
            unit: "deg"
          }
    ]
  },
  {
    start: 800,
    end: 885,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      }
    ]
  }
]
const exampleParallax5 = [
  {
    start: 350,
    end: 699,
    properties: [
      {
        startValue: 0,
        endValue: -95,
        property: "translateY",
        unit: "vh",
      },
    ]
  },
  {
    start: 450,
    end: 450,
    properties: [
        {
            startValue: 0,
            endValue: 45,
            property: "rotate",
            unit: "deg"
          }
    ]
  },
  {
    start: 451,
    end: 699,
    properties: [
        {
            startValue: 45,
            endValue: 0,
            property: "rotate",
            unit: "deg"
          }
    ]
  },
  {
    start: 700,
    end: 785,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      }
    ]
  }
]
const parallaxSvg = [
  {
    start: 350,
    end: 699,
    properties: [
      {
        startValue: 1,
        endValue: 2,
        property: "scale",
      },
      {
        startValue: 0,
        endValue: 50,
        property: "translateX",
        unit: "vw",
      },
      {
        startValue: 0,
        endValue: -50,
        property: "translateY",
        unit: "vh"
      }
    ]
  },
  {
    start: 700,
    end: 1100,
    properties: [
      {
        startValue: 2,
        endValue: 0,
        property: "scale",
      },
      {
        startValue: 50,
        endValue: -50,
        property: "translateX",
        unit: "vw",
      },
      {
        startValue: 0,
        endValue: 360,
        property: "rotate",
        unit: "deg",
      }
    ]
  }
]


export default class App extends Component {

  render() {

    return (
      <div>
        

        <div style={{ height: "100vh", backgroundColor: "red" }}>

        </div>


        <div style={{ height: "100vh", width: "100%", overflow: "hidden", position: "relative", backgroundColor: "black", zIndex:"1" }}>
        

          <div style={{ top: "100%", position: "relative"}} >
            
            <Plx parallaxData={parallaxSvg}>
            <img style={{ left: "15%", position:"absolute", height: "100px", width: "100px"}} src={svg}></img>
            </Plx>

            <Plx parallaxData={exampleParallax1}>
            <img class="teste" style={{ left: "60%", position: "absolute", height: "104px", width: "245px",}} src={img06}/>
            </Plx>

            <Plx parallaxData={exampleParallax2}>
            <img class="teste" style={{ left: "62.5%", position: "absolute", height: "220px", width: "180px",}} src={img05}/>
            </Plx>

            <Plx parallaxData={exampleParallax3}>
            <img class="teste" style={{ left: "60%", position: "absolute", height: "313px", width: "370px",}} src={img04}/>
            </Plx>

            <Plx parallaxData={exampleParallax4}>
            <img class="teste" style={{ left: "71%", position: "absolute", height: "156px", width: "195px",}} src={img03}/>
            </Plx>

            <Plx parallaxData={exampleParallax5}>
            <img class="teste" style={{ left: "72%", position: "absolute", height: "184px", width: "130px",}} src={img02}/> 
            </Plx>   
            </div>
        </div>
          
          <div style={{height: "300vh", backgroundColor: "darkblue",}}>
            </div>
      </div>
    )
  }
}

