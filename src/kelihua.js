import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 函数的柯里化
class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      username: '',
      password: ''
    }
  }
  saveData = (dataType) => {
    return (event) => {
      console.log(dataType,event.target.value)
      this.setState({
        
        
      })
    }
  }

  render() {
    return (
      <div>
        username: <input type="text" onChange={this.saveData("username")} name="username" /><br />
        password: <input type="text" onChange={this.saveData("password")} name="password" />

        <p>{this.state.username}</p>
        <button onClick={this.click}>点我出奇迹</button>
      </div>
    )
  }
  
}

ReactDOM.render(
  <Demo />,
  document.getElementById('root')
)
