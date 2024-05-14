import ko from '@/locales/ko.json';
import en from '@/locales/en.json';
import jp from '@/locales/jp.json';

const i18n = useCookie('i18n_redirected');

export default defineI18nConfig(() => ({
    legacy: false,
    locale: i18n.value || 'ko',
    messages: {
        ko: ko
        // en: en,
        // jp: jp
    }
}));
