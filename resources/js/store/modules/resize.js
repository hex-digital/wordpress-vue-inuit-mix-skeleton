import types from '../mutation-types';

export const namespaced = true;

const DEBOUNCED = 'DEBOUNCED';
const LAZY_DEBOUNCED = 'LAZY_DEBOUNCED';

const BREAKPOINTS = {
    288: 'tinyPalm',
    352: 'smallPalm',
    512: 'mediumPalm',
    672: 'palm',
    736: 'device',
    864: 'smallDesk',
    1056: 'desk',
    1200: 'largeDesk',
    1360: 'wideDesk',
    1920: 'wide1920',
};

function getResizeState(dimensions) {
    let lowestBP = null;
    Object.keys(BREAKPOINTS).forEach((breakpoint) => {
        if (parseInt(breakpoint, 10) <= dimensions.width) {
            lowestBP = BREAKPOINTS[breakpoint];
        }
    });

    return {
        breakpoint: lowestBP,
        height: dimensions.height,
        width: dimensions.width,
    };
}

const initialState = getResizeState({
    height: window.innerHeight,
    width: window.innerWidth,
});

/**
 * The resize module provides throttled access to the window's resize event.
 * It provides two entries, one more lazily throttled than the other. The lazy
 * one is ideal for more heavier callback scripts.
 */

export const state = {
    debounced: initialState,
    lazyDebounced: initialState,
};

export const actions = {
    update({ commit }, newState) {
        const resizeState = getResizeState(newState.dimensions);

        switch (newState.type) {
        case DEBOUNCED:
            commit(types.RESIZE_UPDATE_DEBOUNCED, resizeState);
            break;
        case LAZY_DEBOUNCED:
            commit(types.RESIZE_UPDATE_LAZY_DEBOUNCED, resizeState);
            break;
        default:
        }
    },
};

export const mutations = {
    [types.RESIZE_UPDATE_DEBOUNCED](state, resizeState) {
        state.debounced = { ...state.debounced, ...resizeState };
    },
    [types.RESIZE_UPDATE_LAZY_DEBOUNCED](state, resizeState) {
        state.lazyDebounced = { ...state.lazyDebounced, ...resizeState };
    },
};
