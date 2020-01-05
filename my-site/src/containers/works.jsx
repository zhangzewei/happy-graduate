import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class WorksWrapper extends React.Component {
  constructor() {
    super();
    this.list = [{
      year: '2016',
      events: [
        {
          date: '3月 - 5月',
          event: 'TestBirds 实习',
        },
        {
          date: '7月 - 12月',
          event: '知道创宇 实习',
        }
      ],
    },
    {
      year: '2017',
      events: [
        {
          date: '1月 - 3月',
          event: '知道创宇 实习',
        },
        {
          date: '7月',
          event: '成都大学 毕业',
        },
        {
          date: '7月 - 12月',
          event: '知道创宇 任职前端工程师',
        }
      ],
    },
    {
      year: '2018',
      events: [
        {
          date: '1月 - 4月',
          event: '知道创宇 任职前端工程师',
        },
        {
          date: '4月 - 12月',
          event: 'ThoughtWorks 任职前端工程师',
        }
      ],
    },
    {
      year: '2019',
      events: [
        {
          date: '全年',
          event: 'ThoughtWorks 任职前端工程师',
        }
      ],
    },
    {
      year: '2020',
      events: [
        {
          date: '未来可期',
        }
      ],
    }];
    this.state = {
      showList: [],
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.list.length) {
        this.setState(oldStates => {
          const oldList = oldStates.showList;
          oldList.push(this.list.shift());
          return { showList: oldList }
        });
      } else {
        clearInterval(this.timer);
        this.timer = null;
      }
    }, 500);
  }

  renderEvents = events => events.map(e => (
    <li className="work" key={`events-${e.date}`}>
      <div className="dot-wrapper">
        <div className="dot" />
        <div className="date">{e.date}</div>
      </div>
      <div className="card">{e.event}</div>
    </li>
  ));

  render() {
    const { showList } = this.state;
    return <div className="wroks">
        <ReactCSSTransitionGroup
          transitionName="workanimate"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={0}
        >
          {showList.map((l) => {
            return (
              <div className="year-wrapper" key={`year-${l.year}`}>
                <h3>{l.year}</h3>
                <ul className="works-wrapper">{this.renderEvents(l.events)}</ul>
              </div>
            );
          })}
        </ReactCSSTransitionGroup>
      </div>;
  }
}

export default WorksWrapper;
