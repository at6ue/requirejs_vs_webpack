import { i18n } from 'i18next';

declare global {
    var i18n: i18n;
    var $: JQueryStatic;
    interface Window {
        i18n: i18n;
        $: JQueryStatic
    }
}
