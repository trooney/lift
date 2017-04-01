import React, {Component} from 'react'

class TextBox extends Component {
  constructor(props) {
    super(props)

    const value = this.props.value || ''
    this.state = { value }

    this.changeHandler = this.changeHandler.bind(this)
  }
  componentDidMount() {
    if (this.props.isFocused === true) {
      this.inputElement.focus()
    }
  }
  changeHandler(event) {
    const value = event.target.value
    this.setState({ value })
    this.props.changeHandler(event)
  }
  render() {
    return (
      <div className="input-box text-box">
        <label>{this.props.title}</label>
        <div>
          <input 
            ref={ input => this.inputElement = input }
            name={this.props.name} 
            onChange={this.changeHandler}
            onPaste={this.changeHandler}
            value={this.state.value} 
            type="text" 
            maxLength="3"
            pattern="[0-9]*"
            inputMode="numeric"
          />
        </div>
      </div>
    );
  }
}

TextBox.propTypes = {
  changeHandler: React.PropTypes.func,
};

export default TextBox;