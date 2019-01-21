import Vue from 'vue';

export function toggleCanTrack($toggle) {
    if ($toggle) {
        Vue.$ga.enable();
        Vue.analytics.fbq.query('consent', 'grant');
    } else {
        Vue.$ga.disable();
        Vue.analytics.fbq.query('consent', 'revoke');
    }
}

/**
 * Track a GA event with the analytics platform.
 */
export function trackGaEvent(...args) {
    Vue.$ga.event(...args);
}

/**
 * Track an FB event with the analytics platform.
 */
export function trackFbEvent(type, ...args) {
    Vue.analytics.fbq.event(type, ...args);
}

/**
 * Track a lead by providing just a form name, and an optional category and value.
 *
 * @params {String} The name of the form to track
 * @params {String} The category of the event to track
 * @params {Number} A value for the event, to calculate RYI
 */
export function trackLead(formName, category = '', value = 1) {
    Vue.analytics.fbq.event('Lead', {
        content_name: formName,
        content_category: category,
        currency: 'GBP',
        value,
    });
}

/**
 * Track a lead by providing just a form name, and an optional category and value.
 *
 * @params {Number} A value for the event, to calculate RYI
 * @params {Number} The predicted lifetime value of the customer
 */
export function trackSubscribe(value, predictedLtv = null) {
    Vue.analytics.fbq.event('Subscribe', {
        currency: 'GBP',
        value,
        predicted_ltv: predictedLtv || value,
    });
}

export function trackCompleteRegistration(contentName, status = true, value = 0, currency = 'GBP') {
    Vue.analytics.fbq.event('CompleteRegistration', {
        content_name: contentName,
        status,
        currency,
        value,
    });
}

/**
 * Track a page view by providing just a page name, and an optional category and value.
 *
 * @params {String} The name of the form to track
 * @params {String} The category of the event to track
 * @params {Number} A value for the event, to calculate RYI
 */
export function trackView(pageName, category = '', value = 0) {
    Vue.analytics.fbq.event('ViewContent', {
        content_name: pageName,
        content_category: category,
        currency: 'GBP',
        value,
    });
}

/**
 * Track a successful form submission by providing just a form name, and optionally a value.
 *
 * @params {String} The name of the form to track
 * @params {Number} A value for the event, to calculate RYI
 */
export function trackFormSubmit(formName, value = 1) {
    Vue.$ga.event({
        eventCategory: 'Form',
        eventAction: 'SuccessfulSubmission',
        eventLabel: formName,
        eventValue: value,
    });
}

/**
 * Track a failed form submission by providing just a form name, and optionally a value.
 *
 * @params {String} The name of the form to track
 * @params {Number} A value for the event, to calculate RYI
 */
export function trackFormFail(formName, value = 0) {
    Vue.$ga.event({
        eventCategory: 'Form',
        eventAction: 'FailedSubmission',
        eventLabel: formName,
        eventValue: value,
    });
}

/**
 * Track a video play by providing just an identifier for that video.
 *
 * @params {String} An identifier of the video to track
 * @params {Number} A value for the event, to calculate RYI
 */
export function trackVideoPlay(videoLabel, value = 0) {
    Vue.$ga.event({
        eventCategory: 'Video',
        eventAction: 'Play',
        eventLabel: videoLabel,
        eventValue: value,
    });
}

/**
 * Track a button click by providing just an identifier for that button, and optionally a value.
 *
 * @params {String} An identifier of the button to track
 * @params {Number} A value for the event, to calculate RYI
 */
export function trackButtonClick(buttonLabel, value = 0) {
    Vue.$ga.event({
        eventCategory: 'Button',
        eventAction: 'Click',
        eventLabel: buttonLabel,
        eventValue: value,
    });
}

