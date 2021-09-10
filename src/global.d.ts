import { i18n } from 'i18next';

declare global {
    const i18n: i18n;
    interface Window {
        i18n: i18n;
        $: JQueryStatic
    }
}
