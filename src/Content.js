import React, { Component } from 'react'

class Content extends Component {
		render() { 
			<div key="home" className={`${state} ${direction}`}> </div>
			<div key="about" className={`${state} ${direction}`}> </div>
			<div key="endeavors" className={`${state} ${direction}`}> </div>
			<div key="contact" className={`${state} ${direction}`}> </div> 
  }
} 

class Body extends Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <Content sections={this.props.sections} />
      </div>
    )
  } 
}

export default Body
