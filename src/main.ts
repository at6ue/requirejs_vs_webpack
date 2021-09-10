import Resource from './resource';

console.log('(main) loaded');

const id_lang = $('#lang');
const id_message = $('#message')

const greeting = async () => {
    await i18n.changeLanguage($(id_lang).val()?.toString() || 'en');
    id_message.text(i18n.t<string>('hello_world'));
}

export const init = async () => {
    await i18n.init({ resources: Resource });
    $(id_lang).on('change', greeting);
    greeting();
}
