import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';
import Customscroll from '../../src'
import './styles/example.css';

import SortableTree from 'react-sortable-tree';
import ContainerDimensions from 'react-container-dimensions';
import 'react-sortable-tree/style.css';

var data = [
    'Click add please! '
];

class Layout extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            data: data,
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
            virtualHeight: 0,
            virtualScrollHeight: 0,
            virtualScrollTop: 0,
            scrollTop: 0
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

    updateVirtualScroll = (height, scrollHeight, scrollTop) => {
        this.setState({
            virtualHeight: height,
            virtualScrollHeight: scrollHeight,
            virtualScrollTop: scrollTop
        });
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
                            <li>- Very small size (10kb)</li>
                            <li>- Easy customization, easy api</li>
                            <li>- Keyboard bind</li>
                            <li>- Reinitialize after all mutation events</li>
                            <li>- Mobile compatibility</li>
                            <li>- Animate scrollTo feature</li>
                            <li>- min-height and max-height compatibility</li>
                            <li>- simple customizations</li>
                            <li>- hide default scrollbars in Mac</li>
                            <li>- support React-sortable-tree / React-virtualized</li>
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
                    <hr />
                    <h1>Unmount scroll</h1>
                    <button onClick={() => this.setState({mount: !this.state.mount})}>
                        {this.state.mount ? 'Unmount scroll' : 'Mount scroll'}
                    </button>
                    <div style={{height: '143px'}}>
                        {this.state.mount &&
                            <Customscroll className="custom-class">
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
                        }
                    </div>
                    <hr/>
                    <h1>React-Sortable-Tree / React-Virtualized</h1>
                    <div style={{height: 400}}>
                        <ContainerDimensions>
                            {({ width, height }) =>
                                <div style={{ height }}>
                                    <Customscroll virtualized={{
                                        height: this.state.virtualHeight,
                                        scrollHeight: this.state.virtualScrollHeight
                                    }} scrollTo={this.state.virtualScrollTop}
                                                  scrollSync={scrollTop => {
                                                      this.setState({scrollTop});
                                                  }}>
                                        <SortableTree
                                            reactVirtualizedListProps={{
                                                ref: (c) => this.virtualList = c,
                                                scrollTop: this.state.scrollTop,
                                                width: width + (Customscroll.scrollWidth || 0),
                                                onScroll: ({ scrollHeight, scrollTop }) => {
                                                    this.updateVirtualScroll(height, scrollHeight, scrollTop);
                                                }
                                            }}
                                            treeData={this.state.treeData}
                                            onChange={treeData => {
                                                this.setState({ treeData }, () => {
                                                    let list = this.virtualList.container;

                                                    this.updateVirtualScroll(height, list.scrollHeight, list.scrollTop);
                                                });
                                            }}
                                        />
                                    </Customscroll>
                                </div>
                            }
                        </ContainerDimensions>
                    </div>
                    <hr />
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