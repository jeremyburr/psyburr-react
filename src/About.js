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
          Jeremy is a self-taught software engineer. This site is <a className="source" href="https://github.com/jeremyburr/psyburr-react">written in React.</a>
        </div>
      )
  }
} 

export default About


