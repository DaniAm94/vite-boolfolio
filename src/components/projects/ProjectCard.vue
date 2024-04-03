<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'Project Card',
    props: {
        project: Object,
        isDetailPage: Boolean
    },
    data: () => ({
        placeholder: 'https://th.bing.com/th/id/OIP.0daZHZau9A_NCIgruM3h1QHaHa?rs=1&pid=ImgDetMain'
    }),
    computed: {
        abstract() {
            let abstract
            if (this.project.description.length > 150) {

                abstract = this.project.description.slice(0, 150) + '...';
            } else {
                abstract = this.project.description;
            }
            return abstract;
        },
        publicationDate() {
            const date = new Date(this.project.created_at);
            let day = String(date.getDate()).padStart(2, '0');
            let month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            const hours = date.getHours();
            let minutes = String(date.getMinutes()).padStart(2, '0');
            //const seconds = date.getSeconds();
            return `${day}/${month}/${year} alle ${hours}:${minutes}`;
        }
    }
}
</script>

<template>
    <div class="card mt-3">
        <div class="card-header d-flex justify-content-between align-items-center ">
            <!-- Autore -->
            <address class="mb-0">By:
                {{ project.author ? project.author.name : 'Anonimo' }}
            </address>

            <!--Pulsante vedi dettaglio-->
            <RouterLink v-if="!isDetailPage" :to="{ name: 'project-detail', params: { slug: project.slug } }"
                class="btn btn-sm btn-primary ">
                Vedi
            </RouterLink>
        </div>
        <div class="card-body">
            <div class="row">

                <!--Immagine -->
                <div v-if="project.image" class="col-3">
                    <img class="img-fluid" :src="project.image" :alt="project.title">
                </div>

                <div class="col">

                    <div class="d-flex justify-content-between align-items-start">

                        <!--Titolo -->
                        <h5 class="card-title mb-2 text-break">{{ project.title }}</h5>
                        <!-- Type  -->
                        <RouterLink v-if="project.type"
                            :to="{ name: 'type-projects', params: { slug: project.type.slug } }">
                            <span class="badge" :style="{ backgroundColor: project.type.color }">
                                {{ project.type.label }}
                            </span>
                        </RouterLink>
                        <span v-else class="badge text-bg-secondary ">Nessuna categoria</span>
                    </div>

                    <!--Data creazione-->
                    <small class="card-subtitle text-body-secondary">
                        Creato il: {{ publicationDate }}
                    </small>

                    <!--Descrizione -->
                    <p class="card-text mt-2">{{ isDetailPage ? project.description : abstract }}</p>

                    <!--Tecnologie -->
                    <div v-if="project.technologies.length">
                        <RouterLink v-for="technology in project.technologies"
                            :to="{ name: 'technology-projects', params: { slug: technology.slug } }">
                            <span :class="`me-2 badge rounded-pill text-bg-${technology.color}`">
                                {{ technology.label }}
                            </span>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/*Css*/
</style>