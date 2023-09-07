<template>
    <div class="col-md-6">
            <router-link :to="{name:'ver-solicitud', params: {idSolicitud: solicitud.id} }"> 
            <div class="card my-4" id="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6 text-white">
                            <p id="numeroSolicitud"><strong>Solicitud Nro. {{ solicitud.id }}</strong></p>
                            <p>Nombres solicitante: {{ solicitud.nombres }}</p>
                            <p>Apellidos solicitante: {{ solicitud.apellidos }}</p>
                        </div>
                        <div class="col-md-6 text-white text-bold">
                            <p><strong>Identificacion del usuario: {{ solicitud.identificacion }}</strong></p>
                            <p>Correo: {{ solicitud.correo }}</p>
                        <p>Descripcion: {{ solicitud.descripcion }}</p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script setup>

const props = defineProps(['solicitud'])
</script>

<style scoped>
a {
    text-decoration: none;
}

#card {
    background: #f7941d;
}

#numeroSolicitud {
    color: #0072bc;
}
</style>