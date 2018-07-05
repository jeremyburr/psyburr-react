import React, { Component } from 'react'

class Content extends Component {
	  render() { 
			switch (this.props.sections) {
				case "home":
					return (
							<h2>
								PsyBurr
							</h2>
					) 
				case "about":
					return (
						<h2>
							About 
						</h2>
					)
				case "endeavors":
					return (
						<h2>
							Endeavors
						</h2>
					)
				case "contact":
				return (
					<h2>
						Contact
					</h2>
				) 
				default:
					return (
						<h2>
							Psyburr
						</h2>
					)
			} 
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
