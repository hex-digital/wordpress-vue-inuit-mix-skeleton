import { toggleCanTrack } from '~/helpers/analytics';
import types from '../mutation-types';

export const namespaced = true;

const {
    canTrack = false,
    gaTrackingId = null,
    gtmTrackingId = null,
    fbTrackingId = null,
} = window.config.analytics || {}; // Load from the analytics config spat out by server, in base.blade.php

export const state = {
    canTrack,
    gaTrackingId,
    gtmTrackingId,
    fbTrackingId,
};

export const actions = {
    toggleTracking({ commit, state }, canTrackNew = !state.canTrack) {
        commit(types.ANALYTICS_SET_CAN_TRACK, canTrackNew);
        toggleCanTrack(canTrackNew);
        return true;
    },
};

export const mutations = {
    [types.ANALYTICS_SET_CAN_TRACK](state, newState) {
        state.canTrack = newState;
    },
};
