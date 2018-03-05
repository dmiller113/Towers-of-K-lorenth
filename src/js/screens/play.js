import rot from 'rot-js';

import { Actor } from '../actors';

import playerTemplate from '../definitions/actors/player';

import Movement from '../systems/movement';

const playScreen = {
    init: (_display, state) => ({
        ...state,
        playState: {
            map: {
                isEmpty: (xCoord, yCoord) => (xCoord == 1 && yCoord == 1) ? false : true,
                tiles: [{x: 1, y: 1}],
            },
            player: Actor(0, playerTemplate),
        },
        currentScreen: playScreen,
    }),
    outro: (_display, state) => {
        // separate out the game and play state
        const { playState, ...gameState } = state;
        return gameState;
    },
    render: (display, state) => {
        const { x, y } = state.playState.player.physical;
        const { playState: { map: { tiles } } } = state;
        display.clear();

        // draw tiles. TODO: Pull into function
        tiles.forEach(tile => {
            const { x: tX, y: tY } = tile;
            display.draw(tX, tY, '#', 'white');
        });

        // Always draw player last.
        display.draw(x, y, '@', "lime");
    },
    handleInput: (event, e, game) => {
        if (event === "keydown") {
            const { directions } = game.config; 
            const { 
                playState,
                playState: { 
                    map, 
                    player,
                    player: {
                        physical: {
                            x,
                            y,
                        }
                    }
                },
            } = game.state;
            
            if (e.keyCode == directions.UP) {
                playState.player = Movement.offsetPosition(map, player, 0, -1);
            }
            if (e.keyCode == directions.DOWN) {
                playState.player = Movement.offsetPosition(map, player, 0, 1);
            }
            if (e.keyCode == directions.LEFT) {
                playState.player = Movement.offsetPosition(map, player, -1, 0);
            }
            if (e.keyCode == directions.RIGHT) {
                playState.player = Movement.offsetPosition(map, player, 1, 0);
            }
        }
        game.render();
        return game.state;
    }
};

export default playScreen;