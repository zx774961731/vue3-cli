import { createRouter, createWebHistory } from 'vue-router';
const files = require.context('../views', true, /route.js$/);
console.log(files.keys());
let configRouters = [];
files.keys().forEach((key) => {
  configRouters = configRouters.concat(files(key).default); // 读取出文件中的default模块
});

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/a'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...routes, ...configRouters]
});

export default router;
