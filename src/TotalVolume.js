import React from 'react';

import { TextBox, ValueBox, Calculator } from './components/index.js';
import Tracking from './services/Tracking';
import Sanitizers from './services/Sanitizers';

class OneRM extends Calculator {

  constructor(props) {
    super(props)

    this.state = {
      items: [ 
        { reps: 8, weight: 25 }
      ]
    }
  }

  componentWillMount() {
    Tracking.track()
  }

  handleChange(index : int, event) {
    const items = this.state.items

    items[index][event.target.name] = event.target.name === 'reps'
      ? Sanitizers.number(event.target.value, 0, 32)
      : Sanitizers.number(event.target.value, 0, 150)

    this.setState({ items });
  }

  handleAdd() {
    const items = this.state.items
    const newItem = Object.assign({}, items[items.length-1])
    items.push(newItem)

    this.setState({ items })
  }

  handleRemove() {
    const items = this.state.items
    items.splice(0, 1)

    this.setState({ items })
  }

  calculate() {
    return this.state.items.reduce((acc, cur) => {
      return acc + (cur.reps * cur.weight)
    }, 0)
  }

  render() {
    let inputs = this.state.items.map((row, i) => {
      return (
        <div key={i} className="weird-wrapper">
          <TextBox title="Reps" name="reps" value={row.reps} changeHandler={this.handleChange.bind(this, i)} isFocused={ i === 0 }/>
          <TextBox title="Weight (kg)" name="weight" value={row.weight} changeHandler={this.handleChange.bind(this, i)} />
        </div>
      )
    })
    function removeControl() {
      if (this.state.items.length > 1) {
        return (<span onClick={this.handleRemove.bind(this)} className="control">-</span>)
      }
    }
    function addControl() {
      if (this.state.items.length < 8) {
        return (<span onClick={this.handleAdd.bind(this)} className="control">+</span>)
      }
    }

    return (
      <section className="lift-calculator">
        <div className="input-col">
          {inputs}
          <div className="controls">
            {addControl.bind(this)()}
            {removeControl.bind(this)()}
          </div>
        </div>
        <div className="output-col">
          <ValueBox title="total volume (kg)" value={this.calculate()} />
        </div>
      </section>
    );

  }

}

export default OneRM;
