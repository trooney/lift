import React, {Component} from 'react'

class GenderBox extends Component {
  render() {
    return (
      <div className="input-box gender-box">
        <label>{this.props.title}</label>
        <div>
          <span 
            name={this.props.name} 
            value="F" 
            onClick={this.props.changeHandler}
            className={`${this.props.value === 'F' ? 'active' : ''} value`}
          >F</span>
          <span className="separator">/</span>
          <span 
            name={this.props.name} 
            value="M" 
            onClick={this.props.changeHandler}
            className={`${this.props.value === 'M' ? 'active' : ''} value`}
          >M</span>
        </div>
      </div>
    );
  }
}

GenderBox.propTypes = {
  changeHandler: React.PropTypes.func,
};

export default GenderBox;