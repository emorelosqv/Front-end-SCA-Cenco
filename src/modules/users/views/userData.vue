<template>
    <DashboardLayout>
        <div class="jumbotron">
            <div class="container text-center">
                <h1 class="display-3">Hola, {{ nombreUsuario }}!</h1>
                <h3 class="display-3 ">¡Bienvenido a Cencosud!</h3>
                <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint fuga adipisci,
                    minima rerum aut
                    quisquam laudantium omnis deleniti expedita earum quas, officia deserunt. Placeat quo eius ut amet
                    assumenda!</p>
            </div>
        </div>
    </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@Layouts/DashboardLayout.vue'

const nombreUsuario = localStorage.getItem('nombreCompleto')
</script>

<style scoped>
h1,
h2 {
    color: #0072bc;
}

#boton {
    background: #f7941d;

}

a {
    text-decoration: none;
}
</style>
  