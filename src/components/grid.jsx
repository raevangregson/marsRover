import React, { Component } from "react";

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: null,
            rocks: [],
            roverStart: null,
        }
        this.createGrid = this.createGrid.bind(this)
        this.randomizeRocks = this.randomizeRocks.bind(this)
    }

    componentWillMount() {
        let rocks = this.randomizeRocks()
        let grid = this.state.grid
        if (grid == null) grid = this.createGrid()
        this.setState({
            rocks,
            grid
        })
    }

    //this function randomizes rocks that act as an obstacle
    randomizeRocks() {
        let rocks = []
        for (var x = 1; rocks.length < 5; x++) {
            let randomTile = Math.floor(Math.random() * 36) + 1
            if (!rocks.includes(randomTile)) {
                rocks.push(randomTile)
            }
        }
        return rocks
    }

    createGrid() {
        let gridItems = []
        for (var x = 1; x <= 36; x++) {
            gridItems.push(<div key={x} className="grid-item"></div>)
        }
        return <div className='grid-container'>{gridItems}</div>
    }

    render() {
        console.log(this.state.grid)
        return (
            <div>
               {this.state.grid}
            </div>
        );
    }
}
export default (Grid);
