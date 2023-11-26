<script setup>
import { onMounted, onUpdated, ref } from 'vue'
import useAuth from '../modules/auth/composables/useAuth'
const isLogged = ref(false)

const token = localStorage.getItem("token")


function validarToken() {
    if (token == null || token == '') {
        isLogged.value = false
    } else {
        isLogged.value = true
    }

}

onMounted(() => {
    validarToken()
})
onUpdated(() => {
    validarToken()
})

const { logout } = useAuth()

function mostrarFecha() {

    var fecha = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var fechaCompleta = fecha.toLocaleDateString("es-ES", options)
    return fechaCompleta;

}
function mostrarHora() {

    const date = new Date();
    const hora = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":"
        + ("0" + date.getSeconds()).slice(-2);

    return hora

}

const datos = mostrarFecha() + " - " + mostrarHora()

</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <nav class="navbar navbar-expand-lg bg-body-tertiary" id="banner">
                    <div class="container-fluid">
                        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link bg-light">Iniciar Sesión</router-link>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link bg-light" @click="logout">
                                        Cerrar Sesión
                                    </button>
                                    <router-link to="#" class=" btn "></router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row" id="iconoFecha">
            <p>{{ datos }}</p>
        </div>
    </div>
</template>

<style scoped>
#banner {
    height: 115px;
    width: 100%;
    background-image: url('/encabezado.jpg');

}

a,
p {
    text-decoration: none;
    color: #0072bc;
}
</style>