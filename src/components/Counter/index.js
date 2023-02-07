import './index.css'

import {Component} from 'react'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  onDecrease = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }
  render() {
    constccbp start RJSCP83UDS {count} = this.state
    return (
      <div>
        <h1>Counter Application</h1>
        <p>{count}</p>
        <button onClick={this.onIncrement}>Increase</button>
        <button onClick={this.onDecrease}>Decrease</button>
      </div>
    )
  }
}
export default Counter
