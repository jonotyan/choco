import Vue from 'vue';
import Router from 'vue-router';
import * as Sentry from '@sentry/vue';
import { BrowserTracing } from '@sentry/tracing';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(Router);

Sentry.init({
  Vue,
  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
