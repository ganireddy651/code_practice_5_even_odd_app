// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onIncrease = () => {
    this.setState(() => ({
      number: Math.ceil(Math.random() * 100),
    }))
  }

  getText = () => {
    const {number} = this.state
    console.log(number)

    return number % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const text = this.getText()
    // const number = this.getNumber()
    const {number} = this.state

    return (
      <div className="even-odd-bg-container">
        <div className="even-odd-card-container">
          <div className="card-items">
            <h1 className="heading">Count {number} </h1>
            <div className="card-bottom-items">
              <p className="count-para">Count is {text}</p>
              <button
                onClick={this.onIncrease}
                type="button"
                className="button"
              >
                Increment
              </button>
              <p className="para">
                *Increase By Random Number Between 0 to 100
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
