import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// getSnapshotBeforeUpdate
class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      username: '',
      password: '',
      number: 0,
      newsArr: []
    }
  }

  getSnapshotBeforeUpdate() {
    console.log('snpshot')
    return this.refs.list.scrollHeight
  }

  componentDidMount() {
    setInterval(() => {
      const {newsArr} = this.state
      const news = "news" + (newsArr.length + 1)
      this.setState({
        newsArr: [news, ...newsArr]
      })
    },1000)
  }

  componentWillUnmount() {
    console.log('will mount')
  }

  componentDidUpdate(preProps, preState, height) {
    console.log('did update')
    this.refs.list.scrollTop += this.refs.list.scrollHeight - height 
  }

  shouldComponentUpdate(){
    console.log('should update')
    return true
  }

  render() {
    console.log('render')
    return (
      <div className="list" ref="list">
        {
          this.state.newsArr.map((n,index) => (
            <li key={index} className="news">{n}</li>
          ))
        }
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
