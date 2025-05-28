import React, { Component, createRef, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CustomScroll from '../../src';
import './styles/example.css';

class Layout extends Component {
  constructor(prop) {
    super(prop);
    this.sticky = createRef();

    this.anchors = {};

    this.state = {
      data: [
        'Click add please! '
      ],
      mount: true,
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

  render() {
    return (
      <CustomScroll>
        <div className="jumbotron">
          <div className="container text-center">
            <h1>React CustomScroll</h1>
            <p>
              This is a tiny React component for scroll bar customization, without dependencies but with a lot of
              features.
            </p>
            <h2>Features</h2>
            <ul>
              <li>- React 19 support</li>
              <li>- TypeScript support</li>
              <li>- Extremely small size (11kb)</li>
              <li>- Without dependencies</li>
              <li>- Easy customization, simple api</li>
              <li>- Native OS scroll behavior</li>
              <li>- Cross browser</li>
              <li>- Animate scrollTo feature</li>
              <li>- RTL support</li>
              <li>- Server Side Rendering support</li>
              <li>- Scroll snap support</li>
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
            <CustomScroll ref={c => this.scrollWithAnchor = c}>
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
            </CustomScroll>
          </div>
          <hr />
          <div>
            <h1>Auto reinit:</h1>
            <div style={{ width: '350px', height: '200px' }}>
              <CustomScroll>
                {this.state.data.map((p, k) => <p key={k}>{p}</p>)}
              </CustomScroll>
            </div>
            <button className="btn btn-default" onClick={this.add}>Add</button>
          </div>
          <hr />
          <div>
            <h1>Textarea scroll:</h1>
            <div id="textarea">
              <CustomScroll>
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
              </CustomScroll>
            </div>
          </div>
          <hr />
          <h1>Customization scroll</h1>
          <div style={{ height: '143px' }}>
            <CustomScroll className="custom-class" scrollAreaColor="grey" scrollWidth="20px" scrollBarRadius="0" scrollBarColor="black">
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
            </CustomScroll>
          </div>
          <div style={{ height: '143px' }} ref={this.sticky}>
            <h2>Sticky block</h2>
            <CustomScroll>
              {scroll => {
                let offset = scroll;
                if (this.sticky.current) {
                  if (scroll >= this.sticky.current.offsetHeight - 60) {
                    offset = this.sticky.current.offsetHeight - 60;
                  }
                }
                return (
                  <>
                    <div style={{
                      position: 'absolute',
                      background: 'black',
                      color: 'white',
                      pointerEvents: 'none',
                      padding: '20px',
                      top: `${offset}px`,
                      width: '100%'
                    }}>
                      I am sticky
                    </div>
                    <p>
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
                  </>
                );
              }}
            </CustomScroll>
          </div>
          <hr />
          <h1>Unmount scroll</h1>
          <button onClick={() => this.setState({ mount: !this.state.mount })}>
            {this.state.mount ? 'Unmount scroll' : 'Mount scroll'}
          </button>
          <div style={{ height: '143px' }}>
            {this.state.mount &&
            <CustomScroll className="custom-class">
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
            </CustomScroll>
            }
          </div>
          <hr />
          <h1>RTL example:</h1>
          <div>
            <div style={{ height: 200 }}>
              <CustomScroll rtl>
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
              </CustomScroll>
            </div>
          </div>
          <hr />
          <div>
            <h3>Scroll Snap</h3>
            <div className="images-list">
              <CustomScroll>
                <div style={{ height: 200, width: 200, backgroundColor: 'red' }} className="snap-block" />
                <div style={{height: 200, width: 200, backgroundColor: 'green'}} className="snap-block" />
                <div style={{height: 200, width: 200, backgroundColor: 'grey'}} className="snap-block" />
                <div style={{height: 200, width: 200, backgroundColor: 'beige'}} className="snap-block" />
                <div style={{height: 200, width: 200, backgroundColor: 'blue'}} className="snap-block" />
                <div style={{height: 200, width: 200, backgroundColor: 'black'}} className="snap-block" />
                <div style={{height: 200, width: 200, backgroundColor: 'aqua'}} className="snap-block" />
                <div style={{height: 200, width: 200, backgroundColor: 'snow'}} className="snap-block" />
              </CustomScroll>
            </div>
          </div>
        </div>
      </CustomScroll>
    )
  }
}

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Layout />
  </StrictMode>
);
