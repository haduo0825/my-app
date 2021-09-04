import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Demo extends React.Component{
  constructor(props){
    super(props)

    this.myRef = React.createRef()
  }
  render(){
    return (
      <div>
        <input type="text" ref={this.myRef} />
        <button onClick={this.click}>点我出奇迹</button>
      </div>
    )
  }
  click = () => console.log(this)
}

ReactDOM.render(
  <Demo />,
  document.getElementById('root')
)
