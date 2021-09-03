import i18next from 'i18next';
import jquery from 'jquery';
import { init } from './main';

window.$ = jquery;
window.i18n = i18next;

init();