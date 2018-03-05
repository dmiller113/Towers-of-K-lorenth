const offsetPosition = (map, actor, xOff, yOff) => {
    const { physical: { x, y } } = actor;
    return setPosition(map, actor, xOff + x, yOff + y);
};

const setPosition = (map, actor, xCoord, yCoord) => {
    const { physical } = actor;
    let newCoords = { x: physical.x, y: physical.y };
    if (!physical.blocksMovement || (
        physical.blocksMovement && map.isEmpty(xCoord, yCoord)
    )) {
       newCoords.x = xCoord;
       newCoords.y = yCoord; 
    }

    return {
        ...actor,
        physical: {
            ...physical,
            ...newCoords,
        },
    };
};

export default {
    name: 'basicMovement',
    groupName: 'movement',
    offsetPosition,
    setPosition,
}