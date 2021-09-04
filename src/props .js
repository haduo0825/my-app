import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Weather extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      weather:this.props.weather
    }
  }
  render(){
    return <h1>it is {this.props.weather}</h1>
  }
}

ReactDOM.render(
  <Weather weather='sadsadasd' />,
  document.getElementById('root')
)
