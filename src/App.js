import React, { Component } from 'react'
import update from 'immutability-helper'
import Section from './Section'
import Cube from './Cube'
import Nav from './Nav'
import Stars from './Stars'
import './index.css'
import './Cube.css'

// position (or display) need not be in state?

class App extends Component {
  constructor() {
    super();
    this.state = {
      sections: {
         Home: { 
          index: 0,
          position: "center", 
          display: "on"
       },
         About: { 
          index: 1, 
          position: "off-right", 
          display: "off" 
        },
         Portfolio: { 
          index: 2, 
          position: "off-right", 
          display: "off" 
        },
         Contact: { 
          index: 3, 
          position: "off-right", 
          display: "off"  
         } 
      },
      order: ["Home","About","Portfolio","Contact"],
      section: "Home",
      clientHeight: null,
      clientWidth: null,
      orientation: null
    }
    this.updateDimensions = this.updateDimensions.bind(this);
    this.onClick = this.onClick.bind(this);
  } 
  updateDimensions() {
    const clientHeight = document.documentElement.clientHeight;
    const clientWidth = document.documentElement.clientWidth;
    const orientation = clientWidth < clientHeight ? "portrait" : "landscape";
    this.setState({clientHeight, clientWidth, orientation}); 
  }

  onClick(section) { 
    let from = this.state.sections[this.state.section].index;
    let to = this.state.sections[section].index; 
    let difference = from - to; 
    if (difference === 0) return; 
    const forward = difference < 0 ? true : false; 
    let timeout = 0; 
    from = forward ? from + 1 : from - 1; 
    for (let i = from; forward ? i <= to : i >= to ; forward ? i++ : i--) { 
      setTimeout(()=>{ 
        const offSection = this.state.section;
        const nextSection = this.state.order[i];
        const newSections = update(this.state.sections, { 
          [nextSection]: {display: {$set: "on"}, },
          [this.state.section]: {position: {$set: forward ? "off-left" : "off-right"}}
        }); 
        setTimeout(()=> {
        const newSections1 = update(this.state.sections, { 
          [offSection]: {display: {$set: "off"} }
        }); 
        this.setState({sections: newSections1});
        }, 1000)
        this.setState({
          section: nextSection,
          sections: newSections,
         });

       setTimeout(()=>{
        const newDisplay = update(this.state.sections, {
          [nextSection]: {position: {$set: "center"}}
        }); 
        this.setState({
          sections: newDisplay
        }); 
        
       }, 1); 
      },timeout+=500)
    } 
  } 

  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentDidUpdate() {
    console.log(this.state);
  } 

  render() {
    return (
    <div> 
      <Nav orientation={this.state.orientation} onClick={this.onClick} section={this.state.section} />
      <Cube orientation={this.state.orientation} section={this.state.section} clientHeight={this.state.clientHeight} clientWidth={this.state.clientWidth} />
      <Section clientWidth={this.state.clientWidth} sections={this.state.sections} section={this.state.section} />
      <Stars />
    </div>
    );
  }
} 

export default App; 
