import React from 'react';
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
    return (
      <div>
        <div className="test">Hello, app!<img src={file} alt="file" /></div>
        <img src={map} alt="gif" />
        {this.generateList()}
      </div>
    )
  }
}

export default App;