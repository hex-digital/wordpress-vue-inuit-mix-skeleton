import Vue from 'vue';
//
// import store from '~/store';
// import plugins from '~/plugins';
// import filters from '~/filters';
// import '~/components';
// import eventListeners from '~/event-listeners';
//
// import { isFunction, isString } from '~/helpers/types';
//
// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */
//
// Vue.config.productionTip = false;
//
// new Vue({ // eslint-disable-line no-new
//     store,
//     plugins,
//     el: '#app',
//     filters,
//     data: {
//         beforeUnloadFuncArr: [],
//     },
//     created() {
//         this.registerEventListeners();
//         this.addBeforeUnloadHandler();
//     },
//     methods: {
//         addBeforeUnloadHandler() {
//             window.addEventListener('beforeunload', (e) => {
//                 let func;
//                 let result;
//                 while (func = this.beforeUnloadFuncArr.shift()) { // eslint-disable-line no-cond-assign
//                     if (func && isFunction(func)) {
//                         result = func();
//                         // https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
//                         if (result !== undefined && isString(result)) {
//                             e.returnValue = result;
//                             break;
//                         }
//                     }
//                 }
//             });
//             // @todo Include a way to remove this when we destroy a component
//             window.addOnBeforeUnload = (func) => {
//                 if (func && isFunction(func)) {
//                     this.beforeUnloadFuncArr.push(func);
//                 }
//             };
//         },
//         registerEventListeners() {
//             window.addEventListener('load', () => {
//                 Object.keys(eventListeners).forEach((event) => {
//                     Object.keys(eventListeners[event]).forEach((key) => {
//                         window.addEventListener(event, () => {
//                             eventListeners[event][key]();
//                         });
//                         eventListeners[event][key]();
//                     });
//                 });
//             });
//         },
//     },
// });
//
// // We can use this to register a Service Worker for a Progressive Web App
// // if ('serviceWorker' in navigator) {
// //     // Use the window load event to keep the page load performant
// //     window.addEventListener('load', () => {
// //         navigator.serviceWorker.register('sw.js');
// //     });
// // }
