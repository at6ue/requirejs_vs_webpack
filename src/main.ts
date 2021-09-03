import Resource from './resource';

const id_lang = '#lang';
const id_message = '#message'

const greeting = async () => {
    await i18n.changeLanguage($(id_lang).val()?.toString() || 'en');
    $(id_message).text(i18n.t('hello_world') as string);
}

export const init = async () => {
    await i18n.init({ resources: Resource });
    $(id_lang).on('change', greeting);
    greeting();
}
