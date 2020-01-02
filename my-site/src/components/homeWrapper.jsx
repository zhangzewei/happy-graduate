import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HomePageImg from  '../images/desk1.jpg';

class HomeWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.timmer = null;
  }
  
  componentDidMount() {
    this.setState({
      show: true,
    });
  }

  clickPage = (page) => {
    const { changeCurrentPage } = this.props;
    this.setState({ show: false });
    this.timmer = setTimeout(() => {
      changeCurrentPage(page);
      clearTimeout(this.timmer);
      this.timmer = null;
    }, 100);
  }

  renderHomePage = () => (
    <div className="home-content">
      <div className="wrapper-item image-wrapper" style={{ backgroundImage: `url(${HomePageImg})` }} />
      <div className="wrapper-item content-wrapper">
        <button onClick={() => { this.clickPage('work')}}>work</button>
        <button onClick={() => { this.clickPage('about')}}>about</button>
      </div>
    </div>
  );

  render() {
    const { show } = this.state;
    return <>
      <ReactCSSTransitionGroup
        transitionName="home"
        transitionEnterTimeout={250}
        transitionLeaveTimeout={200}
        className="container-wrapper"
      >
        {show ? this.renderHomePage() : null}
        </ReactCSSTransitionGroup>
      </>;
  }
}

export default HomeWrapper;
