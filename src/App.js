import { Component } from 'react'
import Buttons from './components/Buttons'
import './App.css'

class App extends Component {
  state = {
    value: ''
  }

  onClickButton = number => {

    this.setState((prev) => ({ value: prev.value + number }))
  }

  onResult = () => {
    const { value } = this.state
    const result = eval(value)
    this.setState({ value: result })
  }

  onClearButton = () => {
    this.setState({ value: "" })
  }

  render() {
    const { value } = this.state
    return (
      <div className='div'>
        <h1>Caluculator</h1>
        <input type="text" value={value} />
        <Buttons onClickButton={this.onClickButton} onResult={this.onResult} onClearButton={this.onClearButton} />
      </div>
    )
  }
}

export default App;
