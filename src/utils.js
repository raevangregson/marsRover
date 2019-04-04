//this function randomizes rocks that act as an obstacle
export function randomizeRocks(){
    let rocks = []
    for(var x=1;rocks.length<5;x++){
        let randomTile = Math.floor(Math.random() * 36) + 1
        if(!rocks.includes(randomTile)){
            rocks.push(randomTile)
        }
    }
    return rocks
}