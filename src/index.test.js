import { shipFactory, gameboardFactory, player } from './index.js';


describe('ship factory testing', () => {
    // ship factory function
    // test the length of ship
    test('length of ship is 3', () => { 
        // create a ship object using the factory function
        // name it ship Alpha
        // the factory function accepts one argument, being the user specified length of ship
        const shipAlpha = shipFactory(3);
        expect(shipAlpha.length).toBe(3);
    });
    test('length of ship is 5', () => {
        const shipAlpha = shipFactory(5);
        expect(shipAlpha.length).toBe(5);
    });

    // test the locations getting hit
    test('first compartment gets hit', () => {
        // create a ship length of 3
        const shipAlpha = shipFactory(3);
        // hit the first compartment of the ship
        shipAlpha.hit(0);
        // test the compartment hit status
        expect(shipAlpha.compartmentGetHit[0]).toBe(true);
    });

    test('an intact ship', () => {
        const shipBeta = shipFactory(5);
        expect(shipBeta.compartmentGetHit.every(compartmentStatus => compartmentStatus === false)).toBe(true);
    });
    
    test('hitting a non-existent compartment returns error', () => {
        const shipBeta = shipFactory(2);
    
        // hit the third compartment, which does not exist
        expect(() => shipBeta.hit(2)).toThrow(Error);
    });
    
    // test a sunk ship
    test('ship has sunk', () => {
        const shipAlpha = shipFactory(3);
    
        // IS THIS THE RIGHT WAY OF UNIT TESTING THE isSunk FUNCTION?
        // involving other methods of the object...
    
        // hit all compartments of the ship
        for (let i = 0; i < shipAlpha.length; i++) {
            shipAlpha.hit(i);
        }
        expect(shipAlpha.isSunk()).toBe(true);
    });
    
    test('ship is still safe', () => {
        const shipBeta = shipFactory(4);
    
        shipBeta.hit(0);
        shipBeta.hit(3);
    
        expect(shipBeta.isSunk()).toBe(false);
    });

});


// test the gameboard factory function
describe('gameboard testing', () => {
    // contains a grid object in the gameboard
    test('a grid is on the gameboard', () => {
        // create a gameboard
        const gameboard1 = gameboardFactory();  
        expect(gameboard1.grids).not.toBeNull();
    });

    test('a grid contains information about coordinates', () => {
        const gameboard1 = gameboardFactory(); 
    
        expect(gameboard1.grids['grid-1A'].coordinates).toEqual(['1', 'A']);
        expect(gameboard1.grids['grid-10J'].coordinates).toEqual(['10', 'J']);
    });

    test('gameboard contains 100 grid objects', () => {
        const gameboard1 = gameboardFactory(); 
        expect(Object.keys(gameboard1.grids).length).toBe(100);
    });

    test('ship is at the gameboard', () => {
        const gameboard1 = gameboardFactory(); 
        // place a ship on the gameboard with a given coordinates
        gameboard1.placeShip(['1A', '1B', '1C']);

        // check whether a coordinate contains that ship
        expect(gameboard1.grids['grid-1A'].containShip).toBeTruthy();
        expect(gameboard1.grids['grid-1B'].containShip).toBeTruthy();
        expect(gameboard1.grids['grid-1C'].containShip).toBeTruthy();
    });
    
    test('ship name is contained in the grid object', () => {
        const gameboard1 = gameboardFactory(); 
        // place a ship on the gameboard with a given coordinates
        gameboard1.placeShip(['1A', '1B', '1C']);

        expect(gameboard1.grids['grid-1A'].shipName).toBe('shipAlpha');
    });
    
    test('ship length is contained in the grid object', () => {
        const gameboard1 = gameboardFactory(); 
        // place a ship on the gameboard with a given coordinates
        gameboard1.placeShip(['1A', '1B', '1C']);

        expect(gameboard1.grids['grid-1A'].shipLength).toBe(3);
    });

    test('ship compartment is contained in the grid object', () => {
        const gameboard1 = gameboardFactory(); 
        // place a ship on the gameboard with a given coordinates
        gameboard1.placeShip(['1A', '1B', '1C']);

        expect(gameboard1.grids['grid-1A'].shipCompartment).toBe(0);
        expect(gameboard1.grids['grid-1B'].shipCompartment).toBe(1);
        expect(gameboard1.grids['grid-1C'].shipCompartment).toBe(2);
    });

    test('first compartment of a 3-compartment ship receives attack', () => {
        const gameboard1 = gameboardFactory();         
        // place a ship on the gameboard with a given coordinates
        gameboard1.placeShip(['1A', '1B', '1C']);
        
        gameboard1.receiveAttack('1A');
        expect(gameboard1.grids['grid-1A'].ship.compartmentGetHit[0]).toBeTruthy();
    });

    test('a missed attack get recorded in the gameboard', () => {
        const gameboard1 = gameboardFactory(); 
        // place a ship on the gameboard with a given coordinates
        gameboard1.placeShip(['1A', '1B', '1C']);
        
        gameboard1.receiveAttack('2A');
        expect(gameboard1.grids['grid-2A'].missedAttack).toBeTruthy();
    });


    test('gameboard reports all ships are sunk (with 1 ship on the board)', () => {
        const gameboard1 = gameboardFactory(); 
        // place a ship on the gameboard with a given coordinates
       gameboard1.placeShip(['1A', '1B', '1C']);
       
        gameboard1.receiveAttack('1A');
        gameboard1.receiveAttack('1B');
        gameboard1.receiveAttack('1C');

        expect(gameboard1.allSunk()).toBeTruthy();
    });

    test('gameboard reports all ships are sunk (with 2 ships on the board)', () => {
        const gameboard1 = gameboardFactory(); 
        gameboard1.placeShip(['1A', '1B', '1C']);
        gameboard1.placeShip(['2A', '2B', '2C']);

        gameboard1.receiveAttack('1A');
        gameboard1.receiveAttack('1B');
        gameboard1.receiveAttack('1C');  
        gameboard1.receiveAttack('2A');
        gameboard1.receiveAttack('2B');
        gameboard1.receiveAttack('2C');      

        expect(gameboard1.allSunk()).toBeTruthy();
    }); 

    test('gameboard reports not all ships are sunk (with 2 ships on the board)', () => {
        const gameboard1 = gameboardFactory(); 
        gameboard1.placeShip(['1A', '1B', '1C']);
        gameboard1.placeShip(['2A', '2B', '2C']);

        gameboard1.receiveAttack('2A');
        gameboard1.receiveAttack('2B');
        gameboard1.receiveAttack('2C');      

        expect(gameboard1.allSunk()).toBeFalsy();
    }); 

    test('no overlapping of ships allowed', () => {
        const gameboard1 = gameboardFactory(); 
        gameboard1.placeShip(['1A', '1B', '1C']);
        // put another ship with overlapping of coordinates
        expect(() => gameboard1.placeShip(['1A', '2A', '3A'])).toThrow(Error);
        expect(() => gameboard1.placeShip(['1A', '1B', '1C'])).toThrow(Error);
        expect(() => gameboard1.placeShip(['1B', '2B', '3B'])).toThrow(Error);
    });

    test('no diagonally placed ships allowed', () => {
        const gameboard1 = gameboardFactory(); 
        expect(() => gameboard1.placeShip(['10A', '9B', '8C'])).toThrow(Error);
        expect(() => gameboard1.placeShip(['1A', '2B', '3C'])).toThrow(Error);
    });
});

// create player
describe('player IIFE', () => {
    test('players exist', () => {
       expect(player.players.player1).not.toBeNull();
       expect(player.players.player2).not.toBeNull();
    });

    test('current turn is player', () => {
        expect(player.getTurn()).toBe('player');
    });

    test('next turn is computer', () => {
        player.switchTurn();
        expect(player.getTurn()).toBe('computer');
    });

    test('gameboard is found for each player', () => {
        expect(player.players.player1.gameboard).not.toBeNull();
        expect(player.players.player2.gameboard).not.toBeNull();
    });

    test('an attack fired by the current player corresponds to the opponent board (missed)', () => {
        // current turn is player 1
        // assume no ship yet
        // so it would be recorded as a missed attack
        player.players.player1.attack('1A');
        expect(player.players.player2.gameboard.grids['grid-1A'].missedAttack).toBeTruthy();

    });

    test('an attack fired by the current player corresponds to the opponent board (hit)', () => {
        player.players.player2.gameboard.placeShip(['1A', '1B', '1C']);
        player.players.player1.attack('1B');
        expect(player.players.player2.gameboard.grids['grid-1B'].ship.compartmentGetHit[1]).toBeTruthy();
        expect(player.players.player2.gameboard.grids['grid-1B'].ship.compartmentGetHit[0]).toBeFalsy();
        expect(player.players.player2.gameboard.grids['grid-1B'].ship.compartmentGetHit[2]).toBeFalsy();
    });

    // player 2 to be a computer player
    // it can make random moves for an attack
    // no shooting at the same coordinate should be foreseen
    // so make a pool of coordinate choices
    // and pop that choice out of the array of choice after every made choice
    test('computer does not make a repeated move of attack', () => {
        // therefore, the attack function of the computer does not 
        // have to take in an input
        // it computes its own random coordinate
        player.players.player2.attack();
        player.players.player2.attack();
        player.players.player2.attack();

        // player 1 receiving attack
        // and returns coordinates for checking no duplication
        const log = player.players.player1.gameboard.getAttackLog();
        // set returns a distinct set of values
        expect(new Set(log).size === log.length).toBeTruthy();

    });

    test('computer can attack 100 non-repeated attacks', () => {
        // reset the pool
        player.resetPool();

        for (let i = 0; i < 100; i++) {
            player.players.player2.attack();
        }

        // reset the attack log
        player.players.player1.gameboard.resetAttackLog();

        const log = player.players.player1.gameboard.getAttackLog();
        expect(new Set(log).size === log.length).toBeTruthy();
    });
});

// main game loop
describe('main game loop', () => {
    // create player

    // testing not required since above tests covered already
    test.todo('create players and gameboards');
    // returns player object??
    // expect(gameInterface.createPlayer)


    // place ships

    // testing not required since above tests covered already
    test.todo('some ships placed on both gameboards');
    // ships: size of 5, 4, 3, 3, and 2




    // start game

});

// a module for DOM interaction