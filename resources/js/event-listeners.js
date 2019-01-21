import throttle from 'throttleit';
import debounce from 'debounce';

import store from './store';

function getDimensions() {
    return {
        height: window.innerHeight,
        width: window.innerWidth,
    };
}

export default {
    scroll: {
        throttled: throttle(() => {
            store.dispatch('scroll/update', { type: 'THROTTLED', position: window.scrollY });
        }, 100),
        lazyThrottled: throttle(() => {
            store.dispatch('scroll/update', { type: 'LAZY_THROTTLED', position: window.scrollY });
        }, 300),
        debounced: debounce(() => {
            store.dispatch('scroll/update', { type: 'DEBOUNCED', position: window.scrollY });
        }, 100),
        lazyDebounced: debounce(() => {
            store.dispatch('scroll/update', { type: 'LAZY_DEBOUNCED', position: window.scrollY });
        }, 300),
    },
    resize: {
        debounced: debounce(() => {
            store.dispatch('resize/update', { type: 'DEBOUNCED', dimensions: getDimensions() });
        }, 300),
        lazyDebounced: debounce(() => {
            store.dispatch('resize/update', { type: 'LAZY_DEBOUNCED', dimensions: getDimensions() });
        }, 300),
    },
};
