import React, { Component } from 'react'

class Portfolio extends Component {
			constructor() {
			super();
			this.ref = React.createRef();
			this.state = { marginLeft: null }
			this.setMargin = this.setMargin.bind(this);
		}

		setMargin() { 
				this.setState({marginLeft: this.ref.current.offsetWidth}) 
		}

		componentDidMount() {
			this.setMargin();
			window.addEventListener("resize", this.setMargin);
		} 

		componentDidUpdate() {
			if (this.state.marginLeft !== this.ref.current.offsetWidth) {
				this.setState({marginLeft: this.ref.current.offsetWidth}) 
			} 
		}

		render() { 
			const styles = {
				marginLeft: this.state.marginLeft/2*-1+"px"
			}	
			return (
			<div style={styles} ref={this.ref} className={`${this.props.display} ${this.props.position} section`}> 
						<h1 style={{textAlign: 'center'}}>Portfolio</h1>
					<div> 
						
					The first video features earlier work for students, non-profits, and artists. There, he gained experience design, animation, and photography.  
					</div><br /><br />
					<video className="video" controls>
						<source src="./videos/part-1.webm" type="video/webm" />	
					</video><br /><br />
<div> 
						This second video features recent experiental work. The first clip is a canvas-drawing SMS photo app for touchscreen kiosks. The next two are augmented reality experiences running on a custom operating system. 
					</div><br /><br />

					<video className="video" controls>
						<source src="./videos/part-2.webm" type="video/webm" />	
					</video> 
				</div>
			)
  }
} 

export default Portfolio






