

import React from 'react';

class CoordinatesButton extends React.Component {
  whereIsTheMouse(event){
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }
  render(){
    return(
      <button onClick={this.whereIsTheMouse.bind(this)}>Coordinates</button>
    )
  }
}

export default CoordinatesButton;
