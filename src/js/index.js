import rot from 'rot-js';
import startScreen from './screens/start';

// Game function
// Game :: Display -> State -> Game
const Game = function(display, initialState) {
    return {
        config: loadConfig(),
        display,
        isOver: function() {
            return (this.state.gameStatus === 'dead');
        },
        render: function() {
            this.state.currentScreen.render(display, this.state);
        },
        swapScreen: function(screen) {
            if (screen == null) return;
            if (this.state.currentScreen) {
                if (this.state.currentScreen.outro)
                    this.state = this.state.currentScreen.outro(
                        display, this.state
                    );
            }
            this.state = screen.init(display, this.state);
            screen.render(display, this.state);
        },
        state: initialState,
        templates: loadTemplates(),
    }
}

// Bind events to the game/screen
const bindEventToScreen = (game, event) => {
    window.addEventListener(event, function(e) {
        // If we have a screen, send the event type and event to its
        // input handling function.
        if ((game.state.currentScreen !== null) && 
                (game.state.currentScreen.handleInput !== undefined))
            game.state = game.state.currentScreen.handleInput(event, e, game);
    })
}


// Setup. TODO: move to separate files.
// Constants
const display = new rot.Display(
    { fontSize: 18
    , height: 26
    , width: 80
    }
);

const loadConfig = () => ({});
const loadTemplates = () => ({});
const initialState = {
    currentScreen: null,
    gameStatus: 'title-screen',
};

// Actual setup
document.body.appendChild(display.getContainer());
const game = Game(display, initialState);
bindEventToScreen(game, "keydown");
bindEventToScreen(game, "keypress");
game.swapScreen(startScreen);

// Game loop
game.render();
