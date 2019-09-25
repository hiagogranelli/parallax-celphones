import img02 from './iphone-top.png'
import img03 from './iphone-2.png'
import img04 from './ipad.png'
import img05 from './iphone-low.png'
import img06 from './last-iphone.png'
import logo from './logo.png'
import './App.css'

import React, { Component } from 'react'



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollTop1: 0,
      scrollTop2: 0,
      scrollTop3: 0,
      scrollTop4: 0,
      scrollTop5: 0,
      scrollLeft: 0,
      scrollLeft1: 0,
    }
  }



  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 0 && window.scrollY <= 699) {
        let scrollTop1 = -(window.scrollY / 1.08);
        this.setState({
          scrollTop1: scrollTop1
        })
      }
    })
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 0 && window.scrollY <= 699) {
        let scrollTop2 = -(window.scrollY / 1.35);
        this.setState({
          scrollTop2: scrollTop2
        })
      }
    })
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 0 && window.scrollY <= 699) {
        let scrollTop3 = -(window.scrollY / 1.5);
        this.setState({
          scrollTop3: scrollTop3
        })
      }
    })
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 0 && window.scrollY <= 699) {
        let scrollTop4 = -(window.scrollY / 2.8);
        this.setState({
          scrollTop4: scrollTop4
        })
      }
    })
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 0 && window.scrollY <= 699) {
        let scrollTop5 = -(window.scrollY / 9);
        this.setState({
          scrollTop5: scrollTop5
        })
      }

    })
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 0 && window.scrollY <= 699) {
        let scrollLeft = (window.scrollY / 2);
        this.setState({
          scrollLeft: scrollLeft
        })
      }

    })
    document.addEventListener("scroll", () => {
      
      if (window.scrollY >= 0 && window.scrollY <= 699) {
        let scrollLeft1 = (window.scrollY / 1.18);
        this.setState({
          scrollLeft1: scrollLeft1
        })
      }
    })
    
  }

  render() {

    return (
      <div>
        <header style={{ display: "block", position: "fixed", top: "0", left: "0", width: "100%", background: "black", height: "75px", padding: "10px", color: "white", textAlign: "left", textTransform: "uppercase", zIndex: "2", }}>
          <ul style={{ display: "flex", justifyContent: "flex-end", marginRight: "55px", alignContent: "center", listStyleType: "none" }}>
            <li style={{ marginLeft: "25px" }}>
              01. LOREM
              </li>
            <li style={{ marginLeft: "25px" }}>
              02. LOREM
              </li>
            <li style={{ marginLeft: "25px", backgroundColor:"#dd0039" }}>
              03. LOREM
              </li>
            <li style={{ marginLeft: "25px" }}>
              04. LOREM
              </li>
          </ul>
          
        </header>
        

        <div style={{ height: "100vh", backgroundColor: "red" }}>

        </div>


        <div style={{ height: "100vh", width: "100%", overflow: "hidden", position: "relative", backgroundColor: "black", zIndex:"1" }}>

          <div>
            
              <p style={{ margin: "100px -350px 100px 435px", backgroundColor: "#dd0039", color: "white", fontSize: "20px", padding: "10px 0 10px 15px", position:"relative", right:this.state.scrollLeft}}>Lorem Ipsum</p>


            <img class="teste" style={{
              left: "60%", position: "absolute", height: "104px", width: "245px",
              top: window.innerHeight + this.state.scrollTop5
            }} src={img06}></img>

            <img class="teste" style={{
              left: "62.5%", position: "absolute", height: "220px", width: "180px",
              top: window.innerHeight + this.state.scrollTop4
            }} src={img05}></img>


            <img class="teste" style={{
              left: "60%", position: "absolute", height: "313px", width: "370px",
              top: window.innerHeight + this.state.scrollTop3
            }} src={img04}></img>

            <img class="teste" style={{
              left: "71%", position: "absolute", height: "156px", width: "195px",
              top: window.innerHeight + this.state.scrollTop2
            }} src={img03}></img>

            <img class="teste" style={{
              left: "72%", position: "absolute", height: "184px", width: "130px",
              top: window.innerHeight + this.state.scrollTop1,
            }} src={img02}></img>


            <div>
                <h1 style={{ margin: "100px 0px 100px -500px", fontSize:"44px", color: "white", position:"relative", left:this.state.scrollLeft1 }}>
                  Lorem ipsum<br/>
                  dolor sit amet.
              </h1>
            </div>
            <div>

                <h2 style={{ margin: "100px 0px 100px -500px", color: "white", position:"relative", left:this.state.scrollLeft1 }}>
                  Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,<br /> sed do eiusmod tempor<br /> incididunt ut labore et dolore<br /> magna aliqua.
              </h2>
            </div>
            
          </div>
          <a>
          </a>
        </div>
          <div style={{height: "100vh"}}/>
      </div>
    )
  }
}

