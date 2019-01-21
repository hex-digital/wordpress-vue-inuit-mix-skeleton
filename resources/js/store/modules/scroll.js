import types from '../mutation-types';

export const namespaced = true;

const THROTTLED = 'THROTTLED';
const LAZY_THROTTLED = 'LAZY_THROTTLED';
const DEBOUNCED = 'DEBOUNCED';
const LAZY_DEBOUNCED = 'LAZY_DEBOUNCED';

/**
 * The scroll module provides throttled access to the window's scroll event.
 * It provides two entries, one more lazily throttled than the other. The lazy
 * one is ideal for more heavier callback scripts.
 */

export const state = {
    throttled: {
        position: 0,
    },
    lazyThrottled: {
        position: 0,
    },
    debounced: {
        position: 0,
    },
    lazyDebounced: {
        position: 0,
    },
};

export const actions = {
    update({ commit }, newState) {
        switch (newState.type) {
        case THROTTLED:
            commit(types.SCROLL_UPDATE_THROTTLED, newState.position);
            break;
        case LAZY_THROTTLED:
            commit(types.SCROLL_UPDATE_LAZY_THROTTLED, newState.position);
            break;
        case DEBOUNCED:
            commit(types.SCROLL_UPDATE_DEBOUNCED, newState.position);
            break;
        case LAZY_DEBOUNCED:
            commit(types.SCROLL_UPDATE_LAZY_DEBOUNCED, newState.position);
            break;
        default:
        }
    },
};

export const mutations = {
    [types.SCROLL_UPDATE_THROTTLED](state, position) {
        state.throttled.position = position;
    },
    [types.SCROLL_UPDATE_LAZY_THROTTLED](state, position) {
        state.lazyThrottled.position = position;
    },
    [types.SCROLL_UPDATE_DEBOUNCED](state, position) {
        state.debounced.position = position;
    },
    [types.SCROLL_UPDATE_LAZY_DEBOUNCED](state, position) {
        state.lazyDebounced.position = position;
    },
};
