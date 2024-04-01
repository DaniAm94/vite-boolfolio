<script>
export default {
    name: 'Project Card',
    props: {
        project: Object
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
            const seconds = date.getSeconds();
            return `${day}/${month}/${year} alle ${hours}:${minutes}`;
        }
    }
}
</script>

<template>
    <div class="card">
        <img :src="project.image ? project.image : placeholder" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ abstract }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <address>By:
                    {{ project.author ? project.author.name : 'Anonimo' }}
                </address>
            </li>
            <li class="list-group-item">
                <small>
                    Creato il: {{ publicationDate }}
                </small>
            </li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
</template>

<style>
/*Css*/
</style>