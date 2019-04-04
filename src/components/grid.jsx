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
        let roverStart = Math.floor(Math.random() * 36) + 1
        let rocks = this.randomizeRocks(roverStart)
        let grid = this.state.grid
        if (grid == null) grid = this.createGrid()
        this.setState({
            roverStart,
            rocks,
            grid
        })
    }

    //this function randomizes rocks that act as an obstacle
    randomizeRocks(roverStart) {
        let rocks = []
        for (var x = 1; rocks.length < 5; x++) {
            let randomTile = Math.floor(Math.random() * 36) + 1
            if (!rocks.includes(randomTile)&& randomTile!=roverStart){
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
        console.log(this.state.rocks,this.state.roverStart)
        return (
            <div>
               {this.state.grid}
            </div>
        );
    }
}
export default (Grid);
