// Import stuff from node_modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

// components
import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component {
  state = {
    news: JSON
  }

  render(){
    return (
      <div>
        <Header/>
        <NewsList news={this.state.news}>
          <h1>This is children of props!</h1>
        </NewsList>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))