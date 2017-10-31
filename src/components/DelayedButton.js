

import React from 'react';

class DelayedButton extends React.Component {
  makeDelay(event){
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }
  render(){
    return(
      <button onClick={this.makeDelay.bind(this)}>Delay</button>
    )
  }
}

export default DelayedButton;
