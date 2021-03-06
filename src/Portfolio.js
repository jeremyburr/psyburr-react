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
			console.log(this.props.clientHeight);
      const styles = {
        marginLeft: this.state.marginLeft/2*-1+"px"
      }  
			const video2Styles = {
				maxHeight: this.props.clientHeight * .80
			}
      return (
      <div style={styles} ref={this.ref} className={`${this.props.display} ${this.props.position} section`}> 
            <h1 style={{textAlign: 'center'}}>Portfolio</h1>
          <div> 
            
          The first video features earlier work in microwebsites, animation, design, and photography.
          </div><br /><br />
          <video className="video" controls>
            <source src="./videos/part_1.mp4" type="video/mp4" />  
          </video><br /><br />
<div> 
            This second video features later experiential work. The first clip is a canvas-drawing photo application. The remaining are accelerometer-driven augmented reality experiences.
          </div><br /><br />

          <video style={video2Styles} className="video" controls>
						<source src="./videos/part_2.mp4" type="video/mp4" />  
          </video> 
        </div>
      )
  }
} 

export default Portfolio






