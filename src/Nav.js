import React, { Component } from 'react'

class Nav extends Component {
	constructor() {
		super();
	  this.state =  {
			marginLeft: null
		}
		this.aboutRef = React.createRef();
		this.portfolioRef = React.createRef();
		this.contactRef = React.createRef();
		this.setMargins = this.setMargins.bind(this);
	}

		setMargins() {
				const aboutMargin = this.state.aboutMargin !== this.aboutRef.current.offsetWidth/2*-1;
				const portfolioMargin = this.state.portfolioMargin !== this.portfolioRef.current.offsetWidth/2*-1;
				const contactMargin = this.state.contactMargin !== this.contactRef.current.offsetWidth/2*-1;

			if (aboutMargin && portfolioMargin && contactMargin) {
				this.setState({
				aboutRef: this.aboutRef.current.offsetWidth/2*-1,
				portfolioRef: this.portfolioRef.current.offsetWidth/2*-1,
				contactRef: this.contactRef.current.offsetWidth/2*-1
				}) 
			}
		}

		componentDidMount() {
			this.setState({
				aboutMargin: this.aboutRef.current.offsetWidth/2*-1,
				portfolioMargin: this.portfolioRef.current.offsetWidth/2*-1,
				contactMargin: this.contactRef.current.offsetWidth/2*-1
			})
			window.addEventListener("resize", this.setMargins);
		} 

  render() {

		const aboutMargin = {
			marginLeft: this.state.aboutMargin 
		}
		const portfolioMargin = {
			marginLeft: this.state.portfolioMargin 
		}
		const contactMargin = {
			marginLeft: this.state.contactMargin 
		} 

    return ( 
      <div className="links">
        <a ref={this.aboutRef} style={aboutMargin} className="link link-about" onClick={() => this.props.onClick("About")}>About</a>
        <a ref={this.portfolioRef} style={portfolioMargin} className="link link-portfolio middle" onClick={() => this.props.onClick("Portfolio")}>Portfolio</a>
        <a ref={this.contactRef} style={contactMargin} className="link link-contact" onClick={() => this.props.onClick("Contact")}>Contact</a>
      </div>
    )
  }
}

export default Nav
