import React, { Component } from 'react' 
class Face extends Component {
  render() { 
    const baseLength = this.props.orientation === "portrait" ? this.props.clientWidth : this.props.clientHeight 
    let faceHeight = this.props.section === "Home" ? baseLength / 6 : baseLength / 18;

    const faceTransforms = {
      left: 'rotateX(270deg) rotateY(180deg) rotateZ(0deg)',
      right: 'rotateX(0deg) rotateY(180deg) rotateZ(0deg)',
      top: 'rotateX(0deg) rotateY(270deg) rotateZ(0deg)',
      bottom: 'rotateX(0deg) rotateY(90deg) rotateZ(0deg)',
      front: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
      back: 'rotateX(270deg) rotateY(0deg) rotateZ(0deg)',
    }
       
    const faceStyle = {
      height: faceHeight + 'px',
      width: faceHeight + 'px',
      transform: faceTransforms[this.props.position]+' translateZ('+faceHeight/2+'px)', 
    }

    return (
      <div style={faceStyle} className={`face ${this.props.position} ${this.props.sections}`}>
        {/*{this.props.position}*/}
      </div>
    )
  } 
}
class Cube extends Component {
  renderFace(position) {
    return (
      <Face orientation={this.props.orientation} position={position} section={this.props.section} sections={this.props.sections} clientWidth = {this.props.clientWidth} clientHeight = {this.props.clientHeight} />
    )
  } 

  render() { 

    const baseLength = this.props.orientation === "portrait" ? this.props.clientWidth : this.props.clientHeight 
    let cubeHeight = this.props.section === "Home" ? baseLength / 6 : baseLength / 18;


    const cubeStyle = {
      height: cubeHeight + 'px',
      width: cubeHeight + 'px',
      marginLeft: '-'+cubeHeight/2+'px',
      marginTop: '-'+cubeHeight/2+'px',
      transformOrigin: cubeHeight/2+'px '+cubeHeight/2+'px',
    }


    return (
      <div> 
        <div style={cubeStyle} className={`cube ${this.props.section} ${this.props.orientation}`}>
          {this.renderFace("left")}
          {this.renderFace("right")}
          {this.renderFace("top")}
          {this.renderFace("bottom")}
          {this.renderFace("front")}
          {this.renderFace("back")}
        </div>
      </div>
    )
  }
}

export default Cube
