import React, { Component } from 'react'

class About extends Component {
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

    componentDidUpdate() {
      if (this.state.marginLeft !== this.ref.current.offsetWidth/2*-1) {
        this.setState({marginLeft: this.ref.current.offsetWidth/2*-1}) 
      } 
    }

    render() { 
      const styles = {
        marginLeft: this.state.marginLeft
      }
      return ( 
        <div style={styles} ref={this.ref} className={`${this.props.display} ${this.props.position} section`}>
          <h1 style={{textAlign: 'center'}}>About</h1><br />
          Jeremy is a front end developer in New York City. He taught himself to code in college, and started building websites. He went on to work as a contractor for advertising companies, gaining wider exposure to the world of front-end development. He regularly pushes his limits, and is interested in the full stack. This site is written in React.
        </div>
      )
  }
} 

export default About


