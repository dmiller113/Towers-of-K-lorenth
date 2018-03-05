export default {
    name: 'movement',
    init: (name, options, actor) => {
        return {
            ...actor,
            [name]: {
                canMoveThroughBlocking: options.canMoveThroughBlocking || false,
                spacesMoved: options.spacesMoved || 1,
            },
        };
    },
};