import React, { Component } from "react";
import Rover from '../../public/moon-rover.png';
import Stone from '../../public/stone.png';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: null,
            rocks: [],
            rover: null,
        }
        this.createGrid = this.createGrid.bind(this)
        this.randomizeRocks = this.randomizeRocks.bind(this)
        this.submit = this.submit.bind(this)
        this.updateGrid = this.updateGrid.bind(this)
    }

    componentWillMount() {
        let rover = Math.floor(Math.random() * 36) + 1
        let rocks = this.randomizeRocks(rover)
        let grid = this.state.grid
        if (grid == null) grid = this.createGrid(rocks,rover)
        this.setState({
            rover,
            rocks,
            grid
        })
    }

    //this function randomizes rocks that act as an obstacle
    randomizeRocks(roverStart) {
        let rocks = []
        for (var x = 1; rocks.length < 5; x++) {
            let randomTile = Math.floor(Math.random() * 36) + 1
            if (!rocks.includes(randomTile) && randomTile != roverStart) {
                rocks.push(randomTile)
            }
        }
        return rocks
    }

    submit(){
        /*
        submit function would send rocks positions, rover position and the moves the user entered
        to api then api would send back rovers new position and set the new state with rover position
        and call a new function that updates the grid
        */
    }

    updateGrid(){
        //update the grid with new rover position
    }

    createGrid(rocks,roverStart) {
        let gridItems = []
        for (var x = 1; x <= 36; x++) {
            if(rocks.includes(x)){
                gridItems.push(<div key={x} id={x} className="grid-item">{<img src={Stone} />}</div>)
            }
            else if(x==roverStart){
                gridItems.push(<div key={x} id={x} className="grid-item">{<img src={Rover} />}</div>)
            }
            else{
                gridItems.push(<div key={x} id={x} className="grid-item"></div>)
            }
            
        }
        return <div className='grid-container'>{gridItems}</div>
    }

    render() {
        return (
            <div className={'flex'}>
                {this.state.grid}
                <div>
                    <p>Enter up to 5 places for the rover to move using the key below</p>
                    <p>R=Right L=Left F=Forward B=Backward </p>
                    <label>
                       Move Rover
    <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </div>
            </div>
        );
    }
}
export default (Grid);
