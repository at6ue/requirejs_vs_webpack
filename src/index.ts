import i18next from 'i18next';
import jquery from 'jquery';
import Child from './child';

console.log('== loaded ==');

window.$ = jquery;
window.i18n = i18next;

console.log('== construct ==');
new Child();

console.log('== dynamic import ==');
import('./main').then((main) => main.init());
