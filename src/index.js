import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './common/style/frame.less'
import {Button} from "antd";

class App extends Component{
  render() {
    return (
      <div className="app">
        <h1>This's a React</h1>
        <Button type='primary'>click me</Button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));


