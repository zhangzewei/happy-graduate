import React from 'react';
import HomeWrapper from  './components/homeWrapper.jsx';
import SecondWrapper from './components/secondWrapper.jsx';
import './App.css';

export const Pages = {
  home: 'home',
  work: 'work',
  about: 'about',
  blog: 'blog'
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currPage: null
    };
  }
  
  componentDidMount() {
    this.setState({
      currPage: Pages.about
    });
  }

  changeCurrentPage = currPage => this.setState({ currPage });

  renderContent = () => {
    const { currPage } = this.state;
    const props = {
      changeCurrentPage: this.changeCurrentPage,
      currPage
    }
    if (currPage === Pages.home) {
      return <HomeWrapper {...props}/>;
    }
    return <SecondWrapper {...props} />;
  }

  render() {
    return <div className="App">{this.renderContent()}</div>;
  }
}

export default App;
