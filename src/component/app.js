import React from 'react';
import { base } from '../assets/datas/app.json';
import map from '../assets/images/map.jpg'
import './app.less';

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  generateList() {
    return base.map(item => <p key={item.name}>{item.name}: {item.age}</p>);
  }

  render() {
    return (
      <div>
        <div className="test">Hello, app!</div>
        <img src={map} alt="gif" />
        {this.generateList()}
      </div>
    )
  }
}

export default App;