// Import stuff from node_modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

// components
import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component {
  state = {
    news: JSON,
    filtered: []
  }

  getKeyword = (event) => {
    let keyword = event.target.value
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keyword) > -1
    });
    this.setState({
      filtered // equal to => filtered:filtered
    })
  }

  render(){
    const center = {
      textAlign: 'center'
    }
    let newsFiltered = this.state.filtered;
    let newsWhole = this.state.news;

    return (
      <div>
        <Header keywords={this.getKeyword}/>
        <NewsList news={newsFiltered.length === 0 ? newsWhole : newsFiltered}>
          <h1 style={center}>This is children of props with inline style</h1>
        </NewsList>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
