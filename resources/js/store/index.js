import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Load store modules dynamically.
const requireContext = require.context('./modules', false, /.*\.js$/);

const requireModules = requireContext.keys()
    .map(file => [
        file.replace(/(^.\/)|(\.js$)/g, ''),
        requireContext(file),
    ])
    .reduce((modules, [name, module]) => (
        Object.assign({}, modules, { [name]: module })
    ), {});

export default new Vuex.Store({
    modules: requireModules,
});
