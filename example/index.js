import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';
import Customscroll from '../dist/main'
import './styles/example.css';
var data = [
    'Click add please! '
];

class Layout extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            data: data
        }
    }
    add() {
        data.push(' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi aspernatur cum debitis deleniti deserunt distinctio eius esse expedita facilis harum illo iure iusto molestiae, perferendis quam, quidem quos tenetur.');
        this.setState({
            data: data
        })
    }

    setScrollTo(e) {
        e.preventDefault();
        var anchorOffset = findDOMNode(this.refs[e.currentTarget.dataset.anc]).offsetTop;

        this.refs.scrollWithAnchor.setY(anchorOffset);
    }

    render() {
        return (
            <Customscroll>
                <div className="jumbotron">
                    <div className="container text-center">
                        <h1>React Custom Scroll</h1>
                        <p>This is little component for custom scroll in React. It is very customizable and flexible component. You can customization scrollbar</p>
                        <h2>Features</h2>
                        <ul>
                            <li>- Without dependency</li>
                            <li>- Very simple and flexible</li>
                            <li>- Very small size (8kb for JS / 1kb - CSS)</li>
                            <li>- Easy customization, easy api</li>
                            <li>- Keyboard bind</li>
                            <li>- Reinitialize after all mutation events</li>
                            <li>- Mobile compatibility</li>
                            <li>- Animate scrollTo feature</li>
                            <li>- min-height and max-height compatibility</li>
                            <li>- simple customizations</li>
                        </ul>
                        <p><a className="btn btn-primary btn-lg" href="https://github.com/AlexSergey/react-custom-scroll" role="button">Github</a></p>
                    </div>
                </div>
                <div id="wrap">
                    <h1>Scroll by anchor:</h1>
                    <ul className="nav nav-tabs nav-justified">
                        <li><a href="#" data-anc="anc1" onClick={this.setScrollTo.bind(this)}>to anchor 1</a></li>
                        <li><a href="#" data-anc="anc2" onClick={this.setScrollTo.bind(this)}>to anchor 2</a></li>
                        <li><a href="#" data-anc="anc3" onClick={this.setScrollTo.bind(this)}>to anchor 3</a></li>
                        <li><a href="#" data-anc="anc4" onClick={this.setScrollTo.bind(this)}>to anchor 4</a></li>
                    </ul>
                    <div style={{height: '143px'}}>
                        <Customscroll ref="scrollWithAnchor">
                            <h2 ref="anc1">Anchor 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <h2 ref="anc2">Anchor 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <h2 ref="anc3">Anchor 3</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <h2 ref="anc4">Anchor 4</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?</p>
                            <h3>The end</h3>
                        </Customscroll>
                    </div>
                    <hr />
                    <div>
                        <h1>Auto reinit:</h1>
                        <div style={{width: '350px', height: '200px'}}>
                            <Customscroll>
                                {this.state.data}
                            </Customscroll>
                        </div>
                        <button className="btn btn-default" onClick={this.add.bind(this)}>Add</button>
                    </div>
                    <hr />
                    <div>
                        <h1>Textarea scroll:</h1>
                        <div id="textarea" >
                            <Customscroll>
                                <div contentEditable>
                                    I look like a textarea
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                                </div>
                            </Customscroll>
                        </div>
                    </div>
                    <hr />
                    <h1>Customization scroll</h1>
                    <div style={{height: '143px'}}>
                        <Customscroll className="custom-class" scrollAreaColor="grey" scrollWidth="20px" scrollBarRadius="0" scrollBarColor="black" >
                            <p>
                                I look like a textarea
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                            </p>
                        </Customscroll>
                    </div>
                    <div style={{height: '143px'}}>
                        <h2>Sticky block</h2>
                        <Customscroll>
                            {scroll =>
                            [
                                <div key="sticky" style={{position: 'absolute', background: 'black', color: 'white', pointerEvents: 'none', padding: '20px', top: `${scroll}px`, width: '100%'}}>
                                    I am sticky
                                </div>,
                                <p key="text">
                                    I look like a textarea
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio, eaque eos libero maxime, modi natus necessitatibus nesciunt quis reiciendis rem repellat rerum. Aliquam beatae eos necessitatibus saepe voluptatem?
                                </p>
                            ]

                            }
                        </Customscroll>
                    </div>
                </div>
            </Customscroll>
        )
    }
}

render(
    <Layout />,
    document.getElementById('root')
);