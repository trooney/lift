import React, {Component} from 'react'

class ValueBox extends Component {
  myFunc: React.PropTypes.func
  render() {
    return (
      <div className="input-box value-box">
        <label>{this.props.title}</label>
        <div>
          <span className="value">{this.props.value}</span>
        </div>
      </div>
    );
  }
}

export default ValueBox;