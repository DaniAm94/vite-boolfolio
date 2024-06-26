import { createRouter, createWebHistory } from 'vue-router';

// Importo le pagine
import HomePage from '../pages/HomePage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';
import ContactUsPage from '../pages/ContactUsPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import TypeProjectsPage from '../pages/TypeProjectsPage.vue';
import TechnologyProjectsPage from '../pages/TechnologyProjectsPage.vue';

// Definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/projects/:slug', component: ProjectDetailPage, name: 'project-detail' },
        { path: '/types/:slug/projects', component: TypeProjectsPage, name: 'type-projects' },
        { path: '/technologies/:slug/projects', component: TechnologyProjectsPage, name: 'technology-projects' },
        { path: '/contact-us', component: ContactUsPage, name: 'contact-us' },
        { path: '/not-found', component: NotFoundPage, name: 'not-found' },
        { path: '/:pathMatch(.*)*', redirect: '/not-found' }
    ]
});

export { router };