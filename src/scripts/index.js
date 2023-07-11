import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './views/component/app-bar';
import './views/component/app-hero';
import './views/component/app-footer';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const skipToContent = document.querySelector('.btn-skip');
const mainContent = document.querySelector('#mainContent');

const app = new App({
  button: document.querySelector('.menu-button'),
  drawer: document.querySelector('#nav'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

skipToContent.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.focus();
});
