import i18next from 'i18next';
import jquery from 'jquery';
import Child from './child';
import { init } from './main';

console.log('== loaded ==');

window.$ = jquery;
window.i18n = i18next;

console.log('== construct ==');
new Child();

init();