import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Pages } from '../App.jsx';
import WorkImage from  '../images/desk2.jpg';
import BlogImage from  '../images/desk3.jpg';
import AboutImage from  '../images/sunset1.jpg';
import Blogs from '../containers/blogs.jsx';

const ImagesMapping = {
  work: WorkImage,
  about: AboutImage,
  blog: BlogImage
}

class SecondWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      currPage: props.currPage
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currPage: nextProps.currPage
    });
  }
  
  componentDidMount() {
    this.setState({
      show: true,
    });
    this.timer = null;
  }

  clickBack = () => {
    const { changeCurrentPage } = this.props;
    this.setState({ show: false });
    this.timer = setTimeout(() => {
      changeCurrentPage('home');
      clearTimeout(this.timmer);
      this.timmer = null;
    }, 100);
  }

  renderRightContent = page => {
    switch(page) {
      case Pages.blog:
        return <Blogs />;
      default:
        return null;
    }
  }
  
  render() {
    const { show } = this.state;
    const { currPage } = this.props;
    return <div className="container-wrapper">
        <ReactCSSTransitionGroup
          transitionName="workimg"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={200}
          className="wrapper-item"
        >
          {show ? <div className="image-wrapper" style={{ backgroundImage: `url(${ImagesMapping[currPage]})` }} /> : null}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName="workcontent"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={200}
          className="wrapper-item"
        >
          {show ? <div className="content-wrapper">
            <div className="right-content">
              <button className="nav-button" onClick={this.clickBack}>返回主页</button>
              {this.renderRightContent(currPage)}
            </div>
          </div> : null}
        </ReactCSSTransitionGroup>
      </div>;
  }
}

export default SecondWrapper;
