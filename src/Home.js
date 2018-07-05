import React, { Component } from 'react'

class Home extends Component {
		constructor() {
			super();
			this.ref = React.createRef();
			this.state = {
				marginLeft: null
			}
		}

		componentDidMount() {
			this.setState({marginLeft: this.ref.current.offsetWidth/2*-1})
		} 


		render() { 
			const styles = {
				marginLeft: this.state.marginLeft
			}

			return (
				<div style={styles} ref={this.ref} className={`${this.props.display} ${this.props.position}`}>
				 <h1>PsyBurr</h1>
				</div>
			)
  }
} 
export default Home
