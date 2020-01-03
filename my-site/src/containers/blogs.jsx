import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class BlogsWrapper extends React.Component {
  constructor() {
    super();
    this.list = [
      {
        title: 'Antd 中的 Trigger 是什么？',
        link: 'https://juejin.im/post/5e0a1f7b6fb9a016526ed1b5',
        from: '掘金'
      },
      {
        title: 'Angular + rxJS 的数据流向实例与讲解',
        link: 'https://juejin.im/post/5e01c09be51d4558270f03ab',
        from: '掘金'
      },
      {
        title: '你真的知道 React Portal 吗？',
        link: 'https://juejin.im/post/5dfb7327e51d455802162cf9',
        from: '掘金'
      },
      {
        title: 'Antd 是怎么使用 React 制作 notification 组件的',
        link: 'https://juejin.im/post/5dfa551bf265da33e347f565',
        from: '掘金'
      },
      {
        title: '模态框与单例、简单工厂、发布订阅',
        link: 'https://juejin.im/post/5be95b6ee51d456f94124f0f',
        from: '掘金'
      },
      {
        title: '学习笔记 | Feature Toggle',
        link: 'https://juejin.im/post/5b29c3caf265da59622aac7d',
        from: '掘金'
      },
      {
        title: '读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章',
        link: 'https://juejin.im/post/5a8fcce95188257a6e404498',
        from: '掘金'
      },
      {
        title: '记一次简单的CSRF攻击实验',
        link: 'https://juejin.im/post/5a6c19e96fb9a01ca87233d3',
        from: '掘金'
      },
      {
        title: 'antd源码解读（10）- notification',
        link: 'https://juejin.im/post/5a5b6d3c51882573473db9af',
        from: '掘金'
      },
      {
        title: 'antd源码解读（9）- Form',
        link: 'https://juejin.im/post/5a23f734f265da431280bcbe',
        from: '掘金'
      },
      {
        title: '使用 Typescript 踩 react-redux 的坑',
        link: 'https://juejin.im/post/5a0827d46fb9a0451c39e096',
        from: '掘金'
      },
      {
        title: 'antd源码解读（8.2）- 番外篇 Trigger 之 index.js 完整篇',
        link: 'https://juejin.im/post/5a01e475f265da432f308936',
        from: '掘金'
      },
      {
        title: 'antd源码解读（8.1）- 番外篇 Trigger 之 index.js 头部',
        link: 'https://juejin.im/post/59f5fe86f265da43143ff846',
        from: '掘金'
      },
      {
        title: 'antd源码解读（8）- Dropdown',
        link: 'https://juejin.im/post/59f064ad5188252c224d356d',
        from: '掘金'
      },
      {
        title: 'antd源码解读（7）- Breadcrumb',
        link: 'https://juejin.im/post/59eec71ff265da43085d35fe',
        from: '掘金'
      },
      {
        title: '构建一个简单的react-typescript项目',
        link: 'https://juejin.im/post/59e9c1c36fb9a0451f3012b6',
        from: '掘金'
      },
      {
        title: 'antd源码解读（6）- Affix',
        link: 'https://juejin.im/post/59e8d66f518825619b4e0d9a',
        from: '掘金'
      },
      {
        title: 'antd源码解读（5）- Grid',
        link: 'https://juejin.im/post/59e4cdeef265da43070254f9',
        from: '掘金'
      },
      {
        title: 'antd源码解读（4）- ButtonGroup',
        link: 'https://juejin.im/post/59e1a608518825489732c054',
        from: '掘金'
      },
      {
        title: 'antd源码解读（3）- Button',
        link: 'https://juejin.im/post/59dfa57ef265da430e4e2a15',
        from: '掘金'
      },
      {
        title: 'antd源码解读（2）- Icon',
        link: 'https://juejin.im/post/59dfa5096fb9a044fc43bc77',
        from: '掘金'
      },
      {
        title: 'antd源码解读（1）-index.js',
        link: 'https://juejin.im/post/59dd0fab6fb9a0450b655a3e',
        from: '掘金'
      }
    ];
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
    }, 200);
  }

  render() {
    const { showList } = this.state;
    return <ul>
        <ReactCSSTransitionGroup
          transitionName="blog"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={0}
          className="blogs-wrapper"
        >
          {showList.map((i, idx) => (
            <li className="blog" key={i.link}>
              <a href={i.link} target="_blank">
                <div className="title"><span className="blog-number">#{showList.length - idx}</span>{i.title}</div>
                <div className="infos">来源：{i.from}</div>
              </a>
            </li>
            ))}
        </ReactCSSTransitionGroup>
      </ul>;
  }
}

export default BlogsWrapper;
