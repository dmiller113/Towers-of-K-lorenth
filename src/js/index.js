import rot from 'rot-js';

// Setup. TODO: move to separate files.
const display = new rot.Display(
    { fontSize: 18
    , height: 26
    , width: 80
    }
);

document.body.appendChild(display.getContainer());

const loadConfig = () => ({});
const loadTemplates = () => ({});
const initialState = {
    currentScreen: null,
};

// Game function
// Game :: Display -> State -> Game
const Game = function(display, initialState) {
    
    return {
        config: loadConfig(),
        display,
        state: initialState,
        templates: loadTemplates(),
    }
}

const game = Game(initialState);