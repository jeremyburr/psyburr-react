import React, { Component } from 'react'

class Contact extends Component {
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
          Email: jeremy.burr73@gmail.com<br />
          GitHub: <a className="github" href="https://github.com/jeremyburr">https://github.com/jeremyburr</a>
        </div>
      )
  }
} 

export default Contact
