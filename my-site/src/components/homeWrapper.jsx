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
        <div className="home-page">
          <div className="my-name">MARKZZW</div>
          <ul className="nav">
            <li className="nav-button" onClick={() => { this.clickPage('work')}}>我的足迹</li>
            <li className="nav-button" onClick={() => { this.clickPage('about')}}>我的样子</li>
            <li className="nav-button" onClick={() => { this.clickPage('blog')}}>我的博客</li>
          </ul>
          <ul className="links">
            <li className="link-item"><a href="https://github.com/zhangzewei" target="_blank" className="link">GitHub</a></li>
            <li className="link-item"><a href="https://juejin.im/user/58ac4ed51b69e6006c159ca8" target="_blank" className="link">掘金</a></li>
          </ul>
          <ul className="contacts">
            <li className="contact-item">E-mail: lanamarkzzw@foxmail.com</li>
          </ul>
        </div>
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
