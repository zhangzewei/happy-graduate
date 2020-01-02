import React from 'react';
import HomeWrapper from  './components/homeWrapper.jsx';
import WorkWrapper from './components/workWrapper.jsx';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.pages = {
      home: 'home',
      work: 'work',
      about: 'about'
    }
    this.state = {
      currPage: null
    };
  }
  
  componentDidMount() {
    this.setState({
      currPage: this.pages.home
    });
  }

  changeCurrentPage = currPage => this.setState({ currPage });

  renderContent = () => {
    const { currPage } = this.state;
    const props = {
      changeCurrentPage: this.changeCurrentPage,
      currPage
    }
    if (currPage === this.pages.home) {
      return <HomeWrapper {...props}/>;
    }
    return <WorkWrapper {...props} />;
  }

  render() {
    return <div className="App">{this.renderContent()}</div>;
  }
}

export default App;
