import i18next from "i18next";
import Resource from "./resource";

const lang = document.getElementById('lang') as HTMLSelectElement;
const hello = document.getElementById('message');
if (!lang || !hello) throw new Error();

const greeting = async () => {
    await i18next.init({
        lng: lang.selectedOptions[0]?.value || 'en',
        resources: Resource
    });
    hello.innerText = i18next.t('hello_world');
}

lang.onchange = greeting;
greeting();
