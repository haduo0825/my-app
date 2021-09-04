import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// diff 算法
class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  getSnapshotBeforeUpdate() {
    console.log('snpshot')
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date()
      })
    },1000)
  }

  componentWillUnmount() {
    console.log('will mount')
  }

  componentDidUpdate(preProps, preState, height) {
    console.log('did update')
  }

  shouldComponentUpdate(){
    console.log('should update')
    return true
  }  

  render() {
    console.log('render')
    return (
      <div>
        <input type="text" />
        <span>
          it is {this.state.date.toLocaleTimeString()} now!
          <input type="text" />
        </span>
      </div>
    )
  }

  add = () => {
    this.setState({
      number: this.state.number + 1
    })
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('root')
)
