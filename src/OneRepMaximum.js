import React from 'react';

import { TextBox, ValueBox, Calculator } from './components/index.js';
import Calculators from './services/Calculators';
import Sanitizers from './services/Sanitizers';

class OneRM extends Calculator {

  constructor(props) {
    super(props)

    this.state = {
      reps:10,
      weight:100
    }

    this.handlers = {
      reps: val => Sanitizers.number(val, 0, 10),
      weight: val => Sanitizers.number(val, 0, 200)
    }

    this.handleChange = this.handleChange.bind(this)
  }
  
  calculate() {
    return Calculators.calculateOneRM(this.state.reps, this.state.weight)
  }

  render() {
    return (
      <section className="lift-calculator">
        <div className="input-col">
          <TextBox title="Reps" name="reps" value={this.state.reps} changeHandler={this.handleChange} isFocused={true} />
          <TextBox title="Weight (kg)" name="weight" value={this.state.weight} changeHandler={this.handleChange} />
        </div>
        <div className="output-col">          
          <ValueBox title="One Rep Max (kg)" value={this.calculate()} />
        </div>
      </section>
    );
  }
  
}

export default OneRM;
