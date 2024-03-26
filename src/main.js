import './assets/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);

app.use(createPinia());

app.mount('#app');

const navToggle = document.querySelector('.mobile-nav-toggle');
const header = document.querySelector('.header');
const bookmarkBtn = document.querySelector('.btn-bookmark');

navToggle.addEventListener('click', () => {
  header.toggleAttribute('data-visible');
});

bookmarkBtn.addEventListener('click', () => {
  bookmarkBtn.toggleAttribute('data-bookmarked');
});
