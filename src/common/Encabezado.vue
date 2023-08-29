
<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <nav class="navbar navbar-expand-lg bg-body-tertiary" id="banner">
                    <div class="container-fluid">
                        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link bg-light" >Iniciar Sesión</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="#" class="nav-link bg-light" >Cerrar Sesión</router-link>
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
            <router-link to='/'>
                <p><font-awesome-icon :icon="['fas', 'house']" style="color: #0072bc;" /> {{ datos }}</p>
            </router-link>
        </div>
    </div>
</template>
<script>

export default {

    data() {
        return {
            datos: this.mostrarFecha() + " - " + this.mostrarHora()
        }
    },
    methods: {
        mostrarFecha: function () {

            var fecha = new Date();
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            var fechaCompleta = fecha.toLocaleDateString("es-ES", options)
            return fechaCompleta;

        },
        mostrarHora: function () {

            const date = new Date();
            const hora = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":"
                + ("0" + date.getSeconds()).slice(-2);

            return hora;

        }
    },
    mounted() {
        this.mostrarFecha()
        this.mostrarHora()
    }

}
</script>
<style scoped>
#banner {
    height: 115px;
    width: 100%;
    background-image: url('/encabezado.jpg');

}

a {
    text-decoration: none;
    color: #0072bc;
}
</style>