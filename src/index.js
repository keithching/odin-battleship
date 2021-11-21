const shipFactory = (length) => {

    // name the positions as 'compartments'. As an array of length of the ship
    // default the get hit as false
    const compartmentGetHit = [];
    for (let i = 0; i < length; i++) {
        compartmentGetHit[i] = false;
    }

    // this is not a pure function... OK?
    const hit = (compartment) => {
        if (compartment > length - 1) {
            throw new Error('compartment does not exist in this ship');
        }
        // once get hit, turns it to true
        compartmentGetHit[compartment] = true;
    };

    const isSunk = () => {
        if (compartmentGetHit.every(compartmentStatus => compartmentStatus === true)) {
            return true;
        } else {
            return false;
        }
    };


    return {
        length,
        compartmentGetHit,
        hit,
        isSunk
    };
};

const gameboardFactory = () => {
  
    // generate grid objects
    const grids = {};

    const grid_H = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const grid_V = ['A','B','C','D','E','F','G','H','I','J'];

    for (let i = 0; i < grid_H.length; i++) {
        for (let j = 0; j < grid_V.length; j++) {
            grids[`grid-${grid_H[i]}${grid_V[j]}`] = {
                coordinates: [`${grid_H[i]}`, `${grid_V[j]}`],
                containShip: false,
            };
        }
    }

    // store the ships that are placed on board
    const shipsOnBoard = [];

    const placeShip = (coordinates) => {
        if (coordinates.some(coordinate => grids[`grid-${coordinate}`].containShip)) {
            throw new Error('overlapping of ship is not allowed');
        }
        
        // in case of 3-character coordinates
        if (coordinates.some(coordinate => coordinate.length == 3)) {
            const firstTwoCharacters = coordinates.map(coordinate => coordinate.slice(0, 2));
            if (firstTwoCharacters.some(coordinate => coordinate !== firstTwoCharacters[0])) {
                throw new Error('diagonal placement of ship is not allowed');
            }
        // 2-character coordinates
        } else {
            const firstCharacter = coordinates.map(coordinate => coordinate.slice(0, 1));
            const lastCharacter = coordinates.map(coordinate => coordinate.slice(1, 2));
            if (firstCharacter.some(coordinate => coordinate !== firstCharacter[0]) && lastCharacter.some(coordinate => coordinate !== lastCharacter[0])) {
                throw new Error('diagonal placement of ship is not allowed');
            }
        }


        // create ship with ship factory
        const shipAlpha = shipFactory(coordinates.length);
        shipsOnBoard.push(shipAlpha);

        for (let i = 0; i < coordinates.length; i++) {
            grids[`grid-${coordinates[i]}`].containShip = true;
            grids[`grid-${coordinates[i]}`].ship = shipAlpha;
            grids[`grid-${coordinates[i]}`].shipName = 'shipAlpha';
            grids[`grid-${coordinates[i]}`].shipLength = shipAlpha.length;
            grids[`grid-${coordinates[i]}`].shipCompartment = i;
        }
    };

    // log the attacked coordinates
    let attackLog = [];

    const getAttackLog = () => attackLog;

    const resetAttackLog = () => {
        attackLog = [];
    }    

    const receiveAttack = (coordinate) => {
        if (grids[`grid-${coordinate}`].containShip) {
            grids[`grid-${coordinate}`].ship.hit(grids[`grid-${coordinate}`].shipCompartment);
        } else {
            grids[`grid-${coordinate}`].missedAttack = true;
        }
        attackLog.push(coordinate);
    };

    const allSunk = () => {
        if (shipsOnBoard.every(ship => ship.isSunk() === true)) {
            return true;
        } else {
            return false;
        }
    };


    return {
        grids,
        placeShip,
        receiveAttack,
        allSunk,
        getAttackLog,
        resetAttackLog
    };

};


const player = (() => {

    const player1 = { 
        name: 'player',
        gameboard: gameboardFactory(),
        attack: (coordinate) => player2.gameboard.receiveAttack(coordinate)
    };
    const player2 = {
        name: 'computer',
        gameboard: gameboardFactory(),
        attack: () => {
            player1.gameboard.receiveAttack(getRandomCoordinate());
        }
    };

    const poolOfAttack = (() => {
        const grid_H = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        const grid_V = ['A','B','C','D','E','F','G','H','I','J'];
        const grids = [];
    
        for (let i = 0; i < grid_H.length; i++) {
            for (let j = 0; j < grid_V.length; j++) {
                grids.push(grid_H[i] + grid_V[j]);
            }
        }   
        return {
            grids
        };
    })();

    const resetPool = () => {
        poolOfAttack.grids = [];
        const grid_H = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        const grid_V = ['A','B','C','D','E','F','G','H','I','J'];
        for (let i = 0; i < grid_H.length; i++) {
            for (let j = 0; j < grid_V.length; j++) {
                poolOfAttack.grids.push(grid_H[i] + grid_V[j]);
            }
        }    
    };


    const getRandomCoordinate = () => {

        // Returns a random integer from 0 to 99
        let randomNumber = Math.floor(Math.random() * poolOfAttack.grids.length);
        let randomCoordinate = poolOfAttack.grids[randomNumber];

        // each time it attacks, the grids array length reduces by 1
        poolOfAttack.grids.splice(poolOfAttack.grids.indexOf(poolOfAttack.grids[randomNumber]), 1);

        return randomCoordinate;
    };


    const players = { player1, player2 };

    let turn = player1.name;

    const getTurn = () => turn;

    const switchTurn = () => {
        if (turn == player1.name) {
            turn = player2.name;
        } else if (turn == player2.name) {
            turn = player1.name;
        }
    };
    

    return {
        players,
        getTurn,
        switchTurn,
        resetPool
    };
})();



export {
    shipFactory,
    gameboardFactory,
    player
};