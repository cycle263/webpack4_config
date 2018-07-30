import React from 'react';
import { NavLink } from 'react-router-dom';
import { base } from '../assets/datas/app.json';
import Loadable from 'react-loadable';
import map from 'imagesPath/map.jpg'; // images 为别名config中的alias
import file from 'imagesPath/img.png';
import './app.less';

const LoadEchart = Loadable({
  loader: () => import(/* "lodash" */ "lodash"),
  loading: 'Loading...'
});

class First extends React.Component {
  constructor(props) {
    super(props);
  }

  generateList() {
    return base.map(item => <p key={item.name}>{item.name}: {item.age}</p>);
  }

  render() {
    return (
      <div>
        <ul className="footer">
          <li><NavLink exact to="/" activeStyle={{ color: '#4dc060' }}>首页</NavLink></li>
          <li><NavLink to="/first" activeStyle={{ color: '#4dc060' }}>First</NavLink></li>
        </ul>
        <div className="test">Hello, First!</div>
        {this.generateList()}
        {LoadEchart}
      </div>
    )
  }
}

export default First;