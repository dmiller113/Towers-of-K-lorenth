import rot from 'rot-js';

const playScreen = {
    init: (_display, state) => ({
        ...state,
        playState: {
            player: {
                x: 0,
                y: 0,
            },
        },
        currentScreen: playScreen,
    }),
    outro: (_display, state) => {
        // separate out the game and play state
        const { playState, ...gameState } = state;
        return gameState;
    },
    render: (display, state) => {
        const { x, y } = state.playState.player;
        display.clear();
        display.draw(x, y, '@', "lime");
    },
    handleInput: (event, e, game) => {
        if (event === "keydown") {
            const { directions } = game.config; 
            const { playState, playState: { player } } = game.state;
            
            if (e.keyCode == directions.UP) {
               player.y = player.y - 1;
            }
            if (e.keyCode == directions.DOWN) {
                player.y = player.y + 1;
            }
            if (e.keyCode == directions.LEFT) {
                player.x = player.x - 1;
            }
            if (e.keyCode == directions.RIGHT) {
                player.x = player.x + 1;
            }

            game.state.playState = playState;
        }
        game.render();
        return game.state;
    }
};

export default playScreen;