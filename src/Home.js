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
        marginLeft: this.state.marginLeft,
        fontWeight: "normal" 
      }

      return (
        <div style={styles} ref={this.ref} className={`${this.props.display} ${this.props.position}`}>
          <h1>Welcome to PsyBurr Space</h1>
          <h3 style={{textAlign: "center"}}>Jeremy Burr's Programming Website</h3>
        </div>
      )
  }
} 
export default Home
