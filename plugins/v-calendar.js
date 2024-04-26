import VCalendar from 'v-calendar';
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VCalendar, { componentPrefix: 'vc' });
    nuxtApp.vueApp.component('DatePicker', DatePicker);
});
