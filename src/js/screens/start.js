import rot from 'rot-js';
import PlayScreen from './play';

const startScreen = { 
    init: (_display, state) => ({
        ...state,
        currentScreen: startScreen,
    }),
    handleInput: (event, e, game) => {
        if (event == 'keydown' && e.keyCode === rot.VK_RETURN) {
            game.swapScreen(PlayScreen);
        }
        return (game.state);
    },
    render: (display, _state) => {
        // Render the prompt to the screen
        display.drawText(1,1, "%c{yellow}Towers of K'lorenth")
        display.drawText(1,2, "%c{gray}Press [Enter] to Start")
    }, 
    outro: (_display, state) => state
}
    
export default startScreen;