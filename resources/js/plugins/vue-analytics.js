import Vue from 'vue';
import VueAnalytics, { onAnalyticsReady } from 'vue-analytics';
import VueFbPixel from 'vue-analytics-fb';

import store from '~/store';

const isDevelopment = process.env.NODE_ENV === 'development';

Vue.use(VueAnalytics, {
    id: store.state.analytics.gaTrackingId,
    autoTracking: {
        exception: true,
        screenview: true,
    },
    debug: {
        enabled: isDevelopment,
        sendHitTask: !isDevelopment,
    },
    disabled: !store.state.analytics.canTrack,
});

Vue.use(VueFbPixel, {
    debug: isDevelopment,
});

if (!store.state.analytics.canTrack) {
    Vue.analytics.fbq.query('consent', 'revoke');
}

Vue.analytics.fbq.init(store.state.analytics.fbTrackingId);

onAnalyticsReady().then(() => {
    Vue.$ga.page(window.location.pathname);
});
