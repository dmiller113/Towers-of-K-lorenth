export const Actor = (id, template = {}) => {
    const {
        init,
        mixins,
        name,
        options,
        ...rest
    } = template;

    let actor = { id, name };

    if (init) {
        actor = init(options);
    }

    if (mixins) {
        actor = mixins.reduce(
            (acc, mixin) => mixin.init(mixin.name, options, acc),
            actor,
        );
    }

    return { ...actor, ...rest };
}