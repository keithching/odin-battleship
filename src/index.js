import './style.css';

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
    let shipsOnBoard = [];

    const getShipsOnBoard = () => shipsOnBoard;

    const resetShipsOnBoard = () => shipsOnBoard = [];

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

    const resetAttackLog = () => attackLog = [];

    const receiveAttack = (coordinate) => {
        if (grids[`grid-${coordinate}`].containShip) {
            grids[`grid-${coordinate}`].ship.hit(grids[`grid-${coordinate}`].shipCompartment);
        } else {
            grids[`grid-${coordinate}`].missedAttack = true;
        }
        attackLog.push(coordinate);
    };

    const allSunk = () => {
        if (getShipsOnBoard().every(ship => ship.isSunk() === true)) {
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
        resetAttackLog,
        resetShipsOnBoard,
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
        attack: () => player1.gameboard.receiveAttack(getRandomCoordinate())
    };

    const setName = (name) => {
        player1.name = name;
    } 

    const getName = (player) => player.name;

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

    let turn; // TODO

    const getTurn = () => turn;

    const setTurn = (player) => turn = player;

    const switchTurn = () => {
        if (getTurn() == getName(player1)) {
            setTurn(getName(player2));
        } else if (getTurn() == getName(player2)) {
            setTurn(getName(player1));
        }
    };
    

    return {
        players,
        getName,
        setName,
        setTurn,
        getTurn,
        switchTurn,
        resetPool
    };
})();

const gameInterface = (() => {

    const layoutTheShips = (mode) => {

        if (mode == 'random') {
            // place ships on both boards
            player.players.player1.gameboard.placeShip(['1A', '1B', '1C', '1D', '1E']);
            player.players.player1.gameboard.placeShip(['2A', '2B', '2C', '2D']);
            player.players.player1.gameboard.placeShip(['3A', '3B', '3C']);
            player.players.player1.gameboard.placeShip(['4A', '4B', '4C']);
            player.players.player1.gameboard.placeShip(['5A', '5B']);
                    
            player.players.player2.gameboard.placeShip(['1A', '1B', '1C', '1D', '1E']);
            player.players.player2.gameboard.placeShip(['2A', '2B', '2C', '2D']);
            player.players.player2.gameboard.placeShip(['3A', '3B', '3C']);
            player.players.player2.gameboard.placeShip(['4A', '4B', '4C']);
            player.players.player2.gameboard.placeShip(['5A', '5B']);

            // set the current turn
            player.setTurn(player.getName(player.players.player1));
        } else if (mode == 'customize') {
            // enter drag and drop mode

            // create an empty board (only one board at the moment)
            DOMInterface.createEmptyBoard();


            // populate to DOM


            


        }

    };


    const createNewGame = (mode) => {
        gameInterface.layoutTheShips(mode);


        // fire these when a trigger is activated
        // TODO

        // DOMInterface.createGameboard();
        // DOMInterface.renderGameboard(); // generate the gameboards to DOM
        // DOMInterface.displayCurrentTurn(); // display current turn info to DOM


        // REFACTORED VERSION:
        // DOMInterface.gameboard.create();
        // DOMInterface.gameboard.render();
        // DOMInterface.gameboard.displayCurrentTurn();

    }



    const isEndGame = () => {
        const msg = document.querySelector('.msg');
        if (player.players.player1.gameboard.allSunk()) {
            msg.textContent = 'Game ended. Computer wins!';
            return true;
        } else if (player.players.player2.gameboard.allSunk()) {
            msg.textContent = 'Game ended. You win!';
            return true;
        }
        return false;
    };

    const resetGame = () => {
    
        // clear ships on the board
        player.players.player1.gameboard.resetShipsOnBoard();
        // reset attack log
        player.players.player1.gameboard.resetAttackLog();


    };


    return {
        layoutTheShips,
        createNewGame,
        isEndGame,
        resetGame
    };

})();


const DOMInterface = (() => {


    // group all gameboard properties and methods together
    const gameboard = () => {

        const create = () => {
            const player1DOM = document.querySelector('.player1');
            const player2DOM = document.querySelector('.player2');
            const playerDOMs = [player1DOM, player2DOM];

            const grid_H = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
            const grid_V = ['', 'A','B','C','D','E','F','G','H','I','J'];

            for (let i = 0; i < playerDOMs.length; i++) {
                for (let j = 0; j < grid_H.length; j++) {
                    const row = document.createElement('div'); 
                    row.classList.add('row');
                    for (let k = 0; k < grid_V.length; k++) {
                        const grid = document.createElement('div');
                        if (grid_H[j] === '') {
                            grid.textContent = grid_V[k];
                            grid.classList.add('axis');
                        } else if (grid_V[k] === '') {
                            grid.textContent = grid_H[j];
                            grid.classList.add('axis');
                        } else {
                            grid.classList.add('grid');
                            grid.setAttribute('data-coordinates', `${grid_H[j]}${grid_V[k]}`);
                            grid.setAttribute('data-containShip', 'false');
                        }
                        row.appendChild(grid);
                    }
                    playerDOMs[i].appendChild(row);
                }
            }

            const player1id = document.querySelector('.player1_id');
            const player2id = document.querySelector('.player2_id');

            player1id.textContent = player.getName(player.players.player1);
            player2id.textContent = player.getName(player.players.player2);
            
        };


        // render the ships
        const render = () => {
            // player 1 
            const grids1 = document.querySelectorAll('.player1 .grid');
            grids1.forEach(grid => {
                let coordinate = grid.getAttribute('data-coordinates');
                if (player.players.player1.gameboard.grids[`grid-${coordinate}`].containShip) {
                    grid.textContent = 'Ship';
                    grid.setAttribute('data-containShip', 'true');
                }
            });
            // player 2
            const grids2 = document.querySelectorAll('.player2 .grid');
            grids2.forEach(grid => {
                let coordinate = grid.getAttribute('data-coordinates');
                if (player.players.player2.gameboard.grids[`grid-${coordinate}`].containShip) {
                grid.textContent = 'Ship';
                grid.setAttribute('data-containShip', 'true');
                }
                grid.addEventListener('click', () => {
                    if (player.getTurn() === player.getName(player.players.player1)) {
                        if (!gameInterface.isEndGame()) {
                            attackComputer(grid, coordinate);
                        }
                        if (!gameInterface.isEndGame()) {
                            setTimeout(() => attackPlayer(), 500); // trigger the computer attack
                        }
                    }
                });
            });
        };

        function attackComputer(grid, coordinate) {
            if (player.players.player2.gameboard.getAttackLog().find(attackedCoordinate => coordinate === attackedCoordinate)) {
                throw new Error('repeated. pls re-attack');
            }
            
            player.players.player1.attack(coordinate);
            if (grid.getAttribute('data-containShip') === 'true') {
                grid.classList.add('receivedAttack');
            } else {
                grid.classList.add('missedAttack');
            }
            player.switchTurn();
            displayCurrentTurn();
            gameInterface.isEndGame();
        }
    
        function attackPlayer() {  
            player.players.player2.attack();   
            const attackLog = player.players.player1.gameboard.getAttackLog();
            const coordinate = attackLog[attackLog.length - 1]; // retrieve last element of the attack log
            const grids1 = document.querySelectorAll('.player1 .grid');
            grids1.forEach(grid => {
                if (grid.getAttribute('data-coordinates') === coordinate) {
                    if (grid.getAttribute('data-containShip') === 'true') {
                        grid.classList.add('receivedAttack');
                    } else {
                        grid.classList.add('missedAttack');
                    }
                }
            })
            player.switchTurn();
            displayCurrentTurn();
            gameInterface.isEndGame();
        }

        const displayCurrentTurn = () => {
            // display current turn
            const msg = document.querySelector('.msg');
            msg.textContent = `current turn: ${player.getTurn()}`;
        };


        return {
            create,
            render,
            displayCurrentTurn
        }

    };


    // const createGameboard = () => {

    //     const player1DOM = document.querySelector('.player1');
    //     const player2DOM = document.querySelector('.player2');
    //     const playerDOMs = [player1DOM, player2DOM];

    //     const grid_H = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    //     const grid_V = ['', 'A','B','C','D','E','F','G','H','I','J'];

    //     for (let i = 0; i < playerDOMs.length; i++) {
    //         for (let j = 0; j < grid_H.length; j++) {
    //             const row = document.createElement('div'); 
    //             row.classList.add('row');
    //             for (let k = 0; k < grid_V.length; k++) {
    //                 const grid = document.createElement('div');
    //                 if (grid_H[j] === '') {
    //                     grid.textContent = grid_V[k];
    //                     grid.classList.add('axis');
    //                 } else if (grid_V[k] === '') {
    //                     grid.textContent = grid_H[j];
    //                     grid.classList.add('axis');
    //                 } else {
    //                     grid.classList.add('grid');
    //                     grid.setAttribute('data-coordinates', `${grid_H[j]}${grid_V[k]}`);
    //                     grid.setAttribute('data-containShip', 'false');
    //                 }
    //                 row.appendChild(grid);
    //             }
    //             playerDOMs[i].appendChild(row);
    //         }
    //     }

    //     const player1id = document.querySelector('.player1_id');
    //     const player2id = document.querySelector('.player2_id');

    //     player1id.textContent = player.getName(player.players.player1);
    //     player2id.textContent = player.getName(player.players.player2);
    // };

    // // render the ships
    // const renderGameboard = () => {
    //     // player 1 
    //     const grids1 = document.querySelectorAll('.player1 .grid');
    //     grids1.forEach(grid => {
    //         let coordinate = grid.getAttribute('data-coordinates');
    //         if (player.players.player1.gameboard.grids[`grid-${coordinate}`].containShip) {
    //             grid.textContent = 'Ship';
    //             grid.setAttribute('data-containShip', 'true');
    //         }
    //     });
    //     // player 2
    //     const grids2 = document.querySelectorAll('.player2 .grid');
    //     grids2.forEach(grid => {
    //         let coordinate = grid.getAttribute('data-coordinates');
    //         if (player.players.player2.gameboard.grids[`grid-${coordinate}`].containShip) {
    //            grid.textContent = 'Ship';
    //            grid.setAttribute('data-containShip', 'true');
    //         }
    //         grid.addEventListener('click', () => {
    //             if (player.getTurn() === player.getName(player.players.player1)) {
    //                 if (!gameInterface.isEndGame()) {
    //                     attackComputer(grid, coordinate);
    //                 }
    //                 if (!gameInterface.isEndGame()) {
    //                     setTimeout(() => attackPlayer(), 500); // trigger the computer attack
    //                 }
    //             }
    //         });
    //     });
    // };

    // function attackComputer(grid, coordinate) {
    //     if (player.players.player2.gameboard.getAttackLog().find(attackedCoordinate => coordinate === attackedCoordinate)) {
    //         throw new Error('repeated. pls re-attack');
    //     }
        
    //     player.players.player1.attack(coordinate);
    //     if (grid.getAttribute('data-containShip') === 'true') {
    //         grid.classList.add('receivedAttack');
    //     } else {
    //         grid.classList.add('missedAttack');
    //     }
    //     player.switchTurn();
    //     displayCurrentTurn();
    //     gameInterface.isEndGame();
    // }

    // function attackPlayer() {  
    //     player.players.player2.attack();   
    //     const attackLog = player.players.player1.gameboard.getAttackLog();
    //     const coordinate = attackLog[attackLog.length - 1]; // retrieve last element of the attack log
    //     const grids1 = document.querySelectorAll('.player1 .grid');
    //     grids1.forEach(grid => {
    //         if (grid.getAttribute('data-coordinates') === coordinate) {
    //             if (grid.getAttribute('data-containShip') === 'true') {
    //                 grid.classList.add('receivedAttack');
    //             } else {
    //                 grid.classList.add('missedAttack');
    //             }
    //         }
    //     })
    //     player.switchTurn();
    //     displayCurrentTurn();
    //     gameInterface.isEndGame();
    // }


    const newGameButton = document.getElementById('newgame');
    newGameButton.addEventListener('click', () => userForm.show(), { once: true });

    const userForm = (() => {

        const show = () => {
            const content = document.querySelector('.content');
            const userform = document.querySelector('.userform');
            userform.classList.add('visible');
    
            const form = document.createElement('form');
            
            const formRow1 = document.createElement('div');
            formRow1.classList.add('formRow');
    
            const inputLabel1 = document.createElement('label');
            inputLabel1.setAttribute('for', 'playerName');
            inputLabel1.textContent = 'player name';
            const input1 = document.createElement('input');
            input1.id = 'playerName';
            input1.setAttribute('autocomplete', 'off');
            input1.required = true;
            input1.type = 'text';
            formRow1.appendChild(inputLabel1);
            formRow1.appendChild(input1);
            form.appendChild(formRow1);
    
            const formRow2 = document.createElement('div');
            formRow2.classList.add('formRow');
    
            const modeLabel = document.createElement('label');
            modeLabel.setAttribute('for', 'shipMode');
            modeLabel.textContent = 'ship mode';
            
            const mode = document.createElement('div');
            const modeSelect = document.createElement('select');
            modeSelect.id = 'shipMode';
            modeSelect.setAttribute('name', 'Ship Mode');
    
            const modeOption1 = document.createElement('option');
            modeOption1.value = 'random';
            modeOption1.textContent = 'random';
    
            const modeOption2 = document.createElement('option');
            modeOption2.value = 'customize';
            modeOption2.textContent = 'customize';
    
            modeSelect.appendChild(modeOption1);
            modeSelect.appendChild(modeOption2);
    
            formRow2.appendChild(modeLabel);
            formRow2.appendChild(modeSelect);
            form.appendChild(formRow2);
            form.noValidate = true; // deactivate the HTML default validations
    
            // implement a dropdown menu using previous practice module
            // but first, branch that module to allow for input parameters first
    
            const submitButton = document.createElement('button');
            submitButton.id = 'submitbutton';
            submitButton.textContent = 'Start!';
            form.appendChild(submitButton);
            userform.appendChild(form);
    
            form.addEventListener('submit', () => {
            
                // prevent the form from being sent
                event.preventDefault();
    
                // set player1's name
                player.setName(input1.value);
    
                // do not allow the form to submit if the player's name is empty
                // form validation
                if (!input1.validity.valid) {
                    input1.classList.add('invalid');
                    return;
                }
    
                // enter into the selected ship mode
                // go into a transition page where the user either see a randomized ship board or a board allowing for drag and drop ships
                // TODO
                const mode = modeSelect.value;
    
                // proceed to game details
                gameInterface.createNewGame(mode); // put ships depending on the ship mode
    
    
                // remove the form from the DOM
                form.remove();
            }); 
        };

        return {
            show
        };

    })();


    // const showUserForm = () => {
    //     const content = document.querySelector('.content');
    //     const userform = document.querySelector('.userform');
    //     userform.classList.add('visible');

    //     const form = document.createElement('form');
        
    //     const formRow1 = document.createElement('div');
    //     formRow1.classList.add('formRow');

    //     const inputLabel1 = document.createElement('label');
    //     inputLabel1.setAttribute('for', 'playerName');
    //     inputLabel1.textContent = 'player name';
    //     const input1 = document.createElement('input');
    //     input1.id = 'playerName';
    //     input1.setAttribute('autocomplete', 'off');
    //     input1.required = true;
    //     input1.type = 'text';
    //     formRow1.appendChild(inputLabel1);
    //     formRow1.appendChild(input1);
    //     form.appendChild(formRow1);

    //     const formRow2 = document.createElement('div');
    //     formRow2.classList.add('formRow');

    //     const modeLabel = document.createElement('label');
    //     modeLabel.setAttribute('for', 'shipMode');
    //     modeLabel.textContent = 'ship mode';
        
    //     const mode = document.createElement('div');
    //     const modeSelect = document.createElement('select');
    //     modeSelect.id = 'shipMode';
    //     modeSelect.setAttribute('name', 'Ship Mode');

    //     const modeOption1 = document.createElement('option');
    //     modeOption1.value = 'random';
    //     modeOption1.textContent = 'random';

    //     const modeOption2 = document.createElement('option');
    //     modeOption2.value = 'customize';
    //     modeOption2.textContent = 'customize';

    //     modeSelect.appendChild(modeOption1);
    //     modeSelect.appendChild(modeOption2);

    //     formRow2.appendChild(modeLabel);
    //     formRow2.appendChild(modeSelect);
    //     form.appendChild(formRow2);
    //     form.noValidate = true; // deactivate the HTML default validations

    //     // implement a dropdown menu using previous practice module
    //     // but first, branch that module to allow for input parameters first

    //     const submitButton = document.createElement('button');
    //     submitButton.id = 'submitbutton';
    //     submitButton.textContent = 'Start!';
    //     form.appendChild(submitButton);
    //     userform.appendChild(form);

    //     form.addEventListener('submit', () => {
        
    //         // prevent the form from being sent
    //         event.preventDefault();

    //         // set player1's name
    //         player.setName(input1.value);

    //         // do not allow the form to submit if the player's name is empty
    //         // form validation
    //         if (!input1.validity.valid) {
    //             input1.classList.add('invalid');
    //             return;
    //         }

    //         // enter into the selected ship mode
    //         // go into a transition page where the user either see a randomized ship board or a board allowing for drag and drop ships
    //         // TODO
    //         const mode = modeSelect.value;

    //         // proceed to game details
    //         gameInterface.createNewGame(mode); // put ships depending on the ship mode


    //         // remove the form from the DOM
    //         form.remove();
            
    //     }); 

    // };

    const createEmptyBoard = () => {

        // create an empty board
        const player1DOM = document.querySelector('.player1');

        const grid_H = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        const grid_V = ['', 'A','B','C','D','E','F','G','H','I','J'];

            for (let j = 0; j < grid_H.length; j++) {
                const row = document.createElement('div'); 
                row.classList.add('row');
                for (let k = 0; k < grid_V.length; k++) {
                    const grid = document.createElement('div');
                    if (grid_H[j] === '') {
                        grid.textContent = grid_V[k];
                        grid.classList.add('axis');
                    } else if (grid_V[k] === '') {
                        grid.textContent = grid_H[j];
                        grid.classList.add('axis');
                    } else {
                        grid.classList.add('grid');
                        grid.classList.add('customize');
                        grid.setAttribute('data-coordinates', `${grid_H[j]}${grid_V[k]}`);
                    }
                    row.appendChild(grid);
                }
                player1DOM.appendChild(row);
            }

        const player1id = document.querySelector('.player1_id');
        player1id.textContent = player.getName(player.players.player1);   

        const content = document.querySelector('.content');
        
        const functionButtons = document.createElement('div');
        functionButtons.classList.add('functionButtons');

        const clearButton = document.createElement('button');
        clearButton.id = 'clearButton';
        clearButton.textContent = 'clear';
        functionButtons.appendChild(clearButton);
        clearButton.addEventListener('click', () => clearAllShipsFromBoard());

        const confirmButton = document.createElement('button');
        confirmButton.id = 'confirmButton';
        confirmButton.textContent = 'confirm';
        functionButtons.appendChild(confirmButton);

        content.appendChild(functionButtons);

        shipPlacementCounter.show();

        dragAndDrop();  // enables drap and drop
    };


    const shipPlacementCounter = (() => {

        const show = () => {
            // make a panel
            const gameboard = document.querySelector('.content .gameboard');

            const infoPanel = document.createElement('div');
            infoPanel.classList.add('infoPanel');
            const infoRow1 = document.createElement('div');
            infoRow1.classList.add('size-5');
            infoRow1.textContent = `size-5: ${shipHarbour.get('five')}`;
            const infoRow2 = document.createElement('div');
            infoRow2.classList.add('size-4');
            infoRow2.textContent = `size-4: ${shipHarbour.get('four')}`;
            const infoRow3 = document.createElement('div');
            infoRow3.classList.add('size-3');
            infoRow3.textContent = `size-3: ${shipHarbour.get('three')}`;
            const infoRow4 = document.createElement('div');
            infoRow4.classList.add('size-2');
            infoRow4.textContent = `size-2: ${shipHarbour.get('two')}`;

            infoPanel.appendChild(infoRow1);
            infoPanel.appendChild(infoRow2);
            infoPanel.appendChild(infoRow3);
            infoPanel.appendChild(infoRow4);

            gameboard.appendChild(infoPanel);
        };

        const refresh = () => {
            const infoRow1 = document.querySelector('.size-5');
            const infoRow2 = document.querySelector('.size-4');
            const infoRow3 = document.querySelector('.size-3');
            const infoRow4 = document.querySelector('.size-2');
            infoRow1.textContent = `size-5: ${shipHarbour.get('five')}`;
            infoRow2.textContent = `size-4: ${shipHarbour.get('four')}`;
            infoRow3.textContent = `size-3: ${shipHarbour.get('three')}`;
            infoRow4.textContent = `size-2: ${shipHarbour.get('two')}`;
        };

        return {
            show,
            refresh
        };
    })();

    const shipHarbour = (() => {
        
        let data = {
            five: 1,
            four: 1,
            three: 2,
            two: 1
        };

        const get = (size) => data[size];

        const set = (size, number) => data[size] = number;

        return {
            data,
            get,
            set
        }
    })();
    
    let shipStorage = []; // save the valid created ships here

    // drag and drop implementation
    const dragAndDrop = () => {
        const grids = document.querySelectorAll('.grid');
        const axes = document.querySelectorAll('.axis');
        let isMousedown = false;

        grids.forEach(grid => {
            grid.addEventListener('mouseover', () => {
                grid.classList.add('grid_hover');
                if (isMousedown) {
                    grid.classList.add('grid_click');
                    currentShipCoordinates.push(grid.getAttribute('data-coordinates'));
                }
            });
            grid.addEventListener('mouseout', () => {
                grid.classList.remove('grid_hover');
            });
            grid.addEventListener('mousedown', (e) => {
                pauseEvent(e); // TESTING. So text won't get selected during the drag and drop
                isMousedown = true;
                grid.classList.add('grid_click');
                currentShipCoordinates.push(grid.getAttribute('data-coordinates'));
            });
            grid.addEventListener('mouseup', () => {
                isMousedown = false;
                let isValid = checkShipValidity(currentShipCoordinates); // put in the array of the current ship as input to check for validity
                if (!isValid) {
                    const msg = document.querySelector('.msg');
                    msg.textContent = 'invalid ship!';
                    msg.classList.add('error');
                    msg.classList.add('show');
                    document.querySelector('.show').addEventListener('transitionend', () => {
                        msg.classList.remove('show');
                        msg.classList.remove('error');
                        msg.textContent = '';
                    });
                    clearInvalidShipFromBoard(currentShipCoordinates);

                } else {
                    currentShipCoordinates.forEach(coordinate => {
                        const grid = document.querySelector('[data-coordinates=' + "'" + coordinate + "']");
                        grid.classList.add('validShip');
                    });

                    // to refactor. Test first
                    shipStorage.push(currentShipCoordinates);
                    if (shipStorage[shipStorage.length - 1].length === 5) {
                        shipHarbour.set('five', 0);
                    } else if (shipStorage[shipStorage.length - 1].length === 4) {
                        shipHarbour.set('four', 0);
                    } else if (shipStorage[shipStorage.length - 1].length === 3) {
                        shipHarbour.set('three', 1);
                    } else if (shipStorage[shipStorage.length - 1].length === 2) {
                        shipHarbour.set('two', 0);
                    }

                    // refresh counter at DOM
                    shipPlacementCounter.refresh();


                }
                resetCurrentShipCoordinates(); // wipe out the array at the end of each check
            })

        });
    };

    let currentShipCoordinates = [];

    const checkShipValidity = (coordinates) => {
        
        let isValid = false;
        // condition checks
        // first test: shape test
        if (coordinates.length !== 1) {
            if (coordinates.every(item => item.length == 3)) { // for 3-character coordinates (i.e. 10A ~ 10J)
                // horizontal
                if (coordinates.every(item => item[0] + item[1] == coordinates[0][0] + coordinates[0][1])) {
                    isValid = true;
                    return true;
                }
            } else if (coordinates.some(item => item.length == 3)) { // cases with mixed 2-character and 3-characters 
                // vertical
                if (coordinates.every(item => item[item.length - 1] == coordinates[0][coordinates[0].length - 1])) {
                    isValid = true;
                    return true;
                }
            } else if (coordinates.every(item => item.length == 2)) { // purely 2-character coordinates
                // horizontal
                if (coordinates.every(item => item[0] == coordinates[0][0])) {
                    isValid = true;
                    return true;
                }
                // vertical
                if (coordinates.every(item => item[1] == coordinates[0][1])) {
                    isValid = true;
                    return true;
                }
            }            
        }

        if (!isValid) { // i.e. one-character coordinate, shapes that are not rectangular
            return false;
        }
    };

    const resetCurrentShipCoordinates = () => currentShipCoordinates = [];

    const clearInvalidShipFromBoard = (coordinates) => {

        coordinates.forEach(coordinate => {
            const grid = document.querySelector('[data-coordinates=' + "'" + coordinate + "']");
            grid.classList.add('invalidShip');
            grid.addEventListener('transitionend', () => {
                grid.classList.remove('grid_click');
                grid.classList.remove('invalidShip');
            })

        })

    };

    const clearAllShipsFromBoard = () => {
        const grids = document.querySelectorAll('.grid');
        grids.forEach(grid => {
            grid.classList.remove('grid_click');
            grid.classList.remove('validShip');
        });
    };



    function pauseEvent(e){
        if(e.stopPropagation) e.stopPropagation(); // stop propagating the events in capturing and bubbling phases
        if(e.preventDefault) e.preventDefault();
    }

    const displayCurrentTurn = () => {
        // display current turn
        const msg = document.querySelector('.msg');
        msg.textContent = `current turn: ${player.getTurn()}`;
    };


    return {
        gameboard,
        createEmptyBoard,
    };

})();




export {
    shipFactory,
    gameboardFactory,
    player
};