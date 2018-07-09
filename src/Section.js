import React, { Component } from 'react'
import Home from './Home.js'
import About from './About.js'
import Portfolio from './Portfolio.js'
import Contact from './Contact.js'

const components = {
  Home: Home,
  About: About,
  Portfolio: Portfolio,
  Contact: Contact
} 

class Section extends Component { 
          
    renderSection(Name) { 

      const ComponentName = components[Name];
      const display = this.props.sections[Name].display;
      const position = this.props.sections[Name].position;

      return (
        <div>
          <ComponentName key={Name} clientWidth={this.props.clientWidth} position={position} display={display} /> 
        </div>
      ) 

    } 

    render() { 

      return (
        <div>
          {this.renderSection("Home")}
          {this.renderSection("About")}
          {this.renderSection("Contact")} 
          {this.renderSection("Portfolio")}
        </div>
      )
    } 
} 

export default Section
