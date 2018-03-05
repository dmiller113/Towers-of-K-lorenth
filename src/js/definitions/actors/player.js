import physicalMixin from '../components/physical';
import movementMixin from '../components/movement';

export default {
    name: 'player',
    mixins: [movementMixin, physicalMixin],
    options: {
        blocksMovement: true,
        blocksSight: true,
        initialX: 0,
        initialY: 0,
    }
}