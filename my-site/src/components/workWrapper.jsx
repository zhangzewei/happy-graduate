import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import WorkImage from  '../images/desk2.jpg';

class WorkWrapper extends React.Component {
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
          {show ? <div className="image-wrapper" style={{ backgroundImage: `url(${WorkImage})` }} /> : null}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName="workcontent"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={200}
          className="wrapper-item"
        >
          {show ? <div className="content-wrapper">
            <button onClick={this.clickBack}>home</button>
            <div>{currPage}</div>
          </div> : null}
        </ReactCSSTransitionGroup>
      </div>;
  }
}

export default WorkWrapper;
