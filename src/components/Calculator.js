import { Component } from 'react';

import Tracking from '../services/Tracking';

class Calculator extends Component {

  constructor(props) {
    super(props)

    this.handlers = {}
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    console.log('Calculator.componentWillMount')
    Tracking.track()
  }

  handleChange(event) {
    const name = event.target.name || event.target.getAttribute('name')
    const value = event.target.value || event.target.getAttribute('value')

    if (!parseFloat(value)) {
      return;
    }

    if (this.handlers[name]) {
      this.setState({ [name] : this.handlers[name](value) })
    } else {
      console.error('handler does not exist')
    }
    
  }

  calculate() {
    return 0
  }
}

export default Calculator;