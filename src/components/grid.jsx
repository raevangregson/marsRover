import React, { Component } from "react";
import {randomizeRocks} from '../utils.js';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rocks:[],
            roverStart:null,
        }
    }

    componentWillMount() {
        let rocks = randomizeRocks()
        this.setState({
            rocks
        })
    }

    render() {
        console.log(this.state.rocks)
        return (
            <div>
                hello
            </div>
        );
    }
}
export default (Grid);
