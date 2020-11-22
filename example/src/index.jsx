import React, { Component, createRef } from 'react';
import { render } from 'react-dom';
import SortableTree from 'react-sortable-tree';
import ContainerDimensions from 'react-container-dimensions';
import 'react-sortable-tree/style.css';
import Customscroll, { getDefaultScrollWidth } from '../../src';
import './styles/example.css';

class Layout extends Component {
  constructor(prop) {
    super(prop);
    this.virtualList = createRef();

    this.anchors = {};

    this.state = {
      data: [
        'Click add please! '
      ],
      mount: true,
      treeData: [
        { title: 'Chicken first', children: [{ title: 'Egg' }] },
        { title: 'Chicken 2', children: [{ title: 'Egg' }] },
        { title: 'Chicken 3', children: [{ title: 'Egg' }] },
        { title: 'Chicken 4', children: [{ title: 'Egg' }] },
        { title: 'Chicken 5', children: [{ title: 'Egg' }] },
        { title: 'Chicken 6', children: [{ title: 'Egg' }] },
        { title: 'Chicken 7', children: [{ title: 'Egg' }] },
        { title: 'Chicken 8', children: [{ title: 'Egg' }] },
        { title: 'Chicken 10', children: [{ title: 'Egg' }] },
        { title: 'Chicken 11', children: [{ title: 'Egg' }] },
        { title: 'Chicken 12', children: [{ title: 'Egg' }] },
        { title: 'Chicken 13', children: [{ title: 'Egg' }] },
        { title: 'Chicken 14', children: [{ title: 'Egg' }] },
        { title: 'Chicken 15', children: [{ title: 'Egg' }] },
        { title: 'Chicken 16', children: [{ title: 'Egg' }] },
        { title: 'Chicken 17', children: [{ title: 'Egg' }] },
        { title: 'Chicken 18', children: [{ title: 'Egg' }] },
        { title: 'Chicken 19', children: [{ title: 'Egg' }] },
        { title: 'Chicken 20', children: [{ title: 'Egg' }] },
        { title: 'Chicken 21', children: [{ title: 'Egg' }] },
        { title: 'Chicken 22', children: [{ title: 'Egg' }] },
        { title: 'Chicken 23', children: [{ title: 'Egg' }] },
        { title: 'Chicken 24', children: [{ title: 'Egg' }] },
        { title: 'Chicken 25', children: [{ title: 'Egg' }] },
        { title: 'Chicken 26', children: [{ title: 'Egg' }] },
        { title: 'Chicken 27', children: [{ title: 'Egg' }] },
        { title: 'Chicken 28', children: [{ title: 'Egg' }] },
        { title: 'Chicken 29', children: [{ title: 'Egg' }] },
        { title: 'Chicken 30', children: [{ title: 'Egg' }] },
        { title: 'Chicken 31', children: [{ title: 'Egg' }] },
        { title: 'Chicken 32', children: [{ title: 'Egg' }] },
        { title: 'Chicken 33', children: [{ title: 'Egg' }] },
        { title: 'Chicken 34', children: [{ title: 'Egg' }] },
        { title: 'Chicken 35', children: [{ title: 'Egg' }] },
        { title: 'Chicken 36', children: [{ title: 'Egg' }] },
        { title: 'Chicken 37', children: [{ title: 'Egg' }] },
        { title: 'Chicken 38', children: [{ title: 'Egg' }] },
        { title: 'Chicken 39', children: [{ title: 'Egg' }] },
        { title: 'Chicken 40', children: [{ title: 'Egg' }] },
        { title: 'Chicken 41', children: [{ title: 'Egg' }] },
        { title: 'Chicken 42', children: [{ title: 'Egg' }] },
        { title: 'Chicken 43', children: [{ title: 'Egg' }] },
        { title: 'Chicken 44', children: [{ title: 'Egg' }] },
        { title: 'Chicken 45', children: [{ title: 'Egg' }] },
        { title: 'Chicken 46', children: [{ title: 'Egg' }] },
        { title: 'Chicken 47', children: [{ title: 'Egg' }] },
        { title: 'Chicken 48', children: [{ title: 'Egg' }] },
        { title: 'Chicken 49', children: [{ title: 'Egg' }] },
        { title: 'Chicken 50', children: [{ title: 'Egg' }] },
        { title: 'Chicken 51', children: [{ title: 'Egg' }] },
        { title: 'Chicken 52', children: [{ title: 'Egg' }] },
        { title: 'Chicken 53', children: [{ title: 'Egg' }] },
        { title: 'Chicken 54', children: [{ title: 'Egg' }] },
        { title: 'Chicken 55', children: [{ title: 'Egg' }] },
        { title: 'Chicken 56', children: [{ title: 'Egg' }] },
        { title: 'Chicken last', children: [{ title: 'Egg' }] }
      ],
      virtualScrollHeight: 0,
      virtualScrollTop: 0,
      scrollTop: 0
    };
  }

  setScrollTo = (e) => {
    e.preventDefault();
    const anchorOffset = this.anchors[e.currentTarget.dataset.anc].offsetTop;

    this.scrollWithAnchor.setY(anchorOffset);
  }

  add = () => {
    this.setState(state => (
      Object.assign(state, {
        data: [...state.data, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi aspernatur cum debitis deleniti deserunt distinctio eius esse expedita facilis harum illo iure iusto molestiae, perferendis quam, quidem quos tenetur.']
      })
    ));
  }

  updateVirtualScroll = (scrollHeight, scrollTop) => {
    this.setState({
      scrollTop,
      virtualScrollHeight: scrollHeight,
      virtualScrollTop: scrollTop
    });
  };

  render() {
    return (
      <Customscroll>
        <div className="jumbotron">
          <div className="container text-center">
            <h1>React CustomScroll</h1>
            <p>
              This is a tiny React component for scroll bar customization, without dependencies but with a lot of
              features.
            </p>
            <h2>Features</h2>
            <ul>
              <li>- TypeScript support</li>
              <li>- Extremely small size (11kb)</li>
              <li>- Without dependencies</li>
              <li>- Easy customization, simple api</li>
              <li>- Native OS scroll behavior</li>
              <li>- Cross browser</li>
              <li>- Animate scrollTo feature</li>
              <li>- React-sortable-tree / React-virtualized support</li>
              <li>- RTL support</li>
              <li>- Server Side Rendering support</li>
            </ul>
            <h2>License MIT</h2>
            <p>
              <a className="btn btn-primary btn-lg" href="https://github.com/AlexSergey/react-custom-scroll" role="button">Github</a>
            </p>
          </div>
        </div>
        <div id="wrap">
          <h1>Scroll by anchor:</h1>
          <ul className="nav nav-tabs nav-justified">
            <li><a href="#" data-anc="anc1" onClick={this.setScrollTo}>to anchor 1</a></li>
            <li><a href="#" data-anc="anc2" onClick={this.setScrollTo}>to anchor 2</a></li>
            <li><a href="#" data-anc="anc3" onClick={this.setScrollTo}>to anchor 3</a></li>
            <li><a href="#" data-anc="anc4" onClick={this.setScrollTo}>to anchor 4</a></li>
          </ul>
          <div style={{ height: '143px' }}>
            <Customscroll ref={c => this.scrollWithAnchor = c}>
              <h2 ref={c => this.anchors.anc1 = c}>Anchor 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <h2 ref={c => this.anchors.anc2 = c}>Anchor 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <h2 ref={c => this.anchors.anc3 = c}>Anchor 3</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <h2 ref={c => this.anchors.anc4 = c}>Anchor 4</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                 libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                 eos necessitatibus saepe voluptatem?</p>
              <h3>The end</h3>
            </Customscroll>
          </div>
          <hr />
          <div>
            <h1>Auto reinit:</h1>
            <div style={{ width: '350px', height: '200px' }}>
              <Customscroll>
                {this.state.data.map((p, k) => <p key={k}>{p}</p>)}
              </Customscroll>
            </div>
            <button className="btn btn-default" onClick={this.add}>Add</button>
          </div>
          <hr />
          <div>
            <h1>Textarea scroll:</h1>
            <div id="textarea">
              <Customscroll>
                <div contentEditable suppressContentEditableWarning>
                  I look like a textarea
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                  libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                  eos necessitatibus saepe voluptatem?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                  libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                  eos necessitatibus saepe voluptatem?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                  libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                  eos necessitatibus saepe voluptatem?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                  libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                  eos necessitatibus saepe voluptatem?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                  libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                  eos necessitatibus saepe voluptatem?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                  libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                  eos necessitatibus saepe voluptatem?
                </div>
              </Customscroll>
            </div>
          </div>
          <hr />
          <h1>Customization scroll</h1>
          <div style={{ height: '143px' }}>
            <Customscroll className="custom-class" scrollAreaColor="grey" scrollWidth="20px" scrollBarRadius="0" scrollBarColor="black">
              <p>
                I look like a textarea
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos
                necessitatibus saepe voluptatem?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos
                necessitatibus saepe voluptatem?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos
                necessitatibus saepe voluptatem?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos
                necessitatibus saepe voluptatem?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos
                necessitatibus saepe voluptatem?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos
                necessitatibus saepe voluptatem?
              </p>
            </Customscroll>
          </div>
          <div style={{ height: '143px' }}>
            <h2>Sticky block</h2>
            <Customscroll>
              {scroll =>
                [
                  <div key="sticky" style={{
                    position: 'absolute',
                    background: 'black',
                    color: 'white',
                    pointerEvents: 'none',
                    padding: '20px',
                    top: `${scroll}px`,
                    width: '100%'
                  }}>
                    I am sticky
                  </div>,
                  <p key="text">
                    I look like a textarea
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                    libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                    eos necessitatibus saepe voluptatem?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                    libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                    eos necessitatibus saepe voluptatem?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                    libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                    eos necessitatibus saepe voluptatem?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                    libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                    eos necessitatibus saepe voluptatem?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                    libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                    eos necessitatibus saepe voluptatem?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                    libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae
                    eos necessitatibus saepe voluptatem?
                  </p>
                ]

              }
            </Customscroll>
          </div>
          <hr />
          <h1>Unmount scroll</h1>
          <button onClick={() => this.setState({ mount: !this.state.mount })}>
            {this.state.mount ? 'Unmount scroll' : 'Mount scroll'}
          </button>
          <div style={{ height: '143px' }}>
            {this.state.mount &&
            <Customscroll className="custom-class">
              <p>
                I look like a textarea
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos
                necessitatibus saepe voluptatem?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos
                necessitatibus saepe voluptatem?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos
                necessitatibus saepe voluptatem?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos
                necessitatibus saepe voluptatem?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos
                necessitatibus saepe voluptatem?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos
                libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos
                necessitatibus saepe voluptatem?
              </p>
            </Customscroll>
            }
          </div>
          <hr />
          <h1>React-Sortable-Tree / React-Virtualized</h1>
          <div style={{ height: 400 }}>
            <ContainerDimensions>
              {({ width, height }) =>
                <div style={{ height }}>
                  <Customscroll virtualized={{
                    height: height,
                    scrollHeight: this.state.virtualScrollHeight
                  }}
                  scrollTo={this.state.virtualScrollTop}
                  scrollSync={scrollTop => {
                    this.setState({ scrollTop });
                  }}>
                    <SortableTree
                      reactVirtualizedListProps={{
                        ref: this.virtualList,
                        scrollTop: this.state.scrollTop,
                        width: width + (getDefaultScrollWidth() || 0),
                        onScroll: ({ scrollHeight, scrollTop }) => {
                          this.updateVirtualScroll(scrollHeight, scrollTop);
                        }
                      }}
                      treeData={this.state.treeData}
                      onChange={treeData => {
                        this.setState({ treeData });

                        let list = this.virtualList.current.container;

                        this.updateVirtualScroll(list.scrollHeight, list.scrollTop);
                      }}
                    />
                  </Customscroll>
                </div>
              }
            </ContainerDimensions>
          </div>
          <hr />
          <hr />
          <h1>RTL example:</h1>
          <div>
            <div style={{ height: 200 }}>
              <Customscroll rtl>
                <p>?سوف أعطي مثالا على ذلك. لا تمانع</p>
                <p>?سوف أعطي مثالا على ذلك. لا تمانع</p>
                <p>?سوف أعطي مثالا على ذلك. لا تمانع</p>
                <p>?سوف أعطي مثالا على ذلك. لا تمانع</p>
                <p>?سوف أعطي مثالا على ذلك. لا تمانع</p>
                <p>?سوف أعطي مثالا على ذلك. لا تمانع</p>
                <p>?سوف أعطي مثالا على ذلك. لا تمانع</p>
                <p>?سوف أعطي مثالا على ذلك. لا تمانع</p>
                <p>?سوف أعطي مثالا على ذلك. لا تمانع</p>
                <p>?سوف أعطي مثالا على ذلك. لا تمانع</p>
                <p>?سوف أعطي مثالا على ذلك. لا تمانع</p>
                <p>?سوف أعطي مثالا على ذلك. لا تمانع</p>
                <p>?سوف أعطي مثالا على ذلك. لا تمانع</p>
                <p>?سوف أعطي مثالا على ذلك. لا تمانع</p>
                <p>?سوف أعطي مثالا على ذلك. لا تمانع</p>
              </Customscroll>
            </div>
          </div>
          <hr />
        </div>
      </Customscroll>
    )
  }
}

render(
  <Layout />,
  document.getElementById('root')
);
