import React from 'react';

import { TextBox, ValueBox, Calculator } from './components/index.js';
import Calculators from './services/Calculators';
import Sanitizers from './services/Sanitizers';

class BMI extends Calculator {

  constructor(props) {
    super(props)

    this.state = {
      weight:75,
      height:180
    }

    this.handlers = {
      weight: val => Sanitizers.number(val, 0, 400),
      height: val => Sanitizers.number(val, 0, 300)
    }

    this.handleChange = this.handleChange.bind(this)
  }

  calculate() {
    return Calculators.calculateBMI(this.state.height, this.state.weight)
  }

  render() {
    return (
      <section className="lift-calculator">
        <div className="input-col">
            <TextBox title="Weight (kg)" name="weight" value={this.state.weight} changeHandler={this.handleChange} isFocused={true} />
            <TextBox title="Height (cm)" name="height" value={this.state.height} changeHandler={this.handleChange} />
        </div>
        <div className="output-col">
          <ValueBox title="Body Mass Index" value={this.calculate()} />
        </div>
      </section>
    );
  }

}

export default BMI;
