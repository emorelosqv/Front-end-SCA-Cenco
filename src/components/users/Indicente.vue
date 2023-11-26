<template>
    <div class="col-md-6">
        <!--<router-link :to="{name:'ver-solicitud', params: {idSolicitud: solicitud.id} }"> -->
        <div class="card my-4" id="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <p id="numeroSolicitud"><strong>Incidente Nro. {{ incidente.id }}</strong></p>
                        <p>Nombres: {{ incidente.nombres }}</p>
                        <p>Apellidos: {{ incidente.apellidos }}</p>
                    </div>
                    <div class="col-md-6 text-bold">
                        <p><strong>Identificacion del usuario: {{ incidente.identificacion }}</strong></p>
                        <p>Descripcion: {{ incidente.descripcion }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!--</router-link>-->
    </div>
</template>
<script setup>

const props = defineProps(['incidente'])
</script>