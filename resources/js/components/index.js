import Vue from 'vue';

/**
 * All components from this components directory (./) will be added to Vue
 */

const requireContext = require.context('./', true, /.*\.vue$/);

requireContext.keys()
    .map((file) => {
        const Component = requireContext(file);
        if (typeof Component.name !== 'undefined') {
            return Vue.component(Component.name, Component);
        }
        return null;
    });
