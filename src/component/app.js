import React from 'react';
import { NavLink } from 'react-router-dom';
import { base } from '../assets/datas/app.json';
import map from 'imagesPath/map.jpg'; // images 为别名config中的alias
import file from 'imagesPath/img.png';
import './app.less';

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  generateList() {
    return base.map(item => <p key={item.name}>{item.name}: {item.age}</p>);
  }

  render() {
    console.log(`${process.env.NODE_ENV}`);
    return (
      <div>
        <ul className="footer">
          <li><NavLink exact to="/" activeStyle={{ color: '#4dc060' }}>首页</NavLink></li>
          <li><NavLink to="/first" activeStyle={{ color: '#4dc060' }}>First</NavLink></li>
        </ul>
        <div className="test">Hello, app!<img src={file} alt="file" /></div>
        <img src={map} alt="gif" />
        {this.generateList()}
      </div>
    )
  }
}

export default App;