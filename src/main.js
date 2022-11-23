import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/components/svg-icon/index';

import SvgIcon from '@/components/svg-icon/index.vue'; // svg组件
const app = createApp(App);
app.component('svg-icon', SvgIcon);
// 全局组件
app.use(store).use(router).mount('#app');
