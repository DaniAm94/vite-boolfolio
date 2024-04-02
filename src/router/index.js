import { createRouter, createWebHistory } from 'vue-router';

// Importo le pagine
import HomePage from '../pages/HomePage.vue';
import ContactUsPage from '../pages/ContactUsPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

// Definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/contact-us', component: ContactUsPage, name: 'contact-us' },
        { path: '/not-found', component: NotFoundPage, name: 'not-found' },
        { path: '/:pathMatch(.*)*', redirect: '/not-found' }
    ]
});

export { router };