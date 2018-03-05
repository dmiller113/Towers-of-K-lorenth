export default {
    name: 'physical',
    init: (name, options, actor) => {
        return {
            ...actor,
            [name]: {
                blocksMovement: options.blocksMovement,
                blocksSight: options.blocksSight,
                x: options.initialX,
                y: options.initialY,
            }
        }
    }
}