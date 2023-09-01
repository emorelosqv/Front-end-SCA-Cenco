<template>
    <div class="container text-center mt-5">
        <div class="row">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link  active" id="pendientes-tab" data-bs-toggle="tab" data-bs-target="#pendientes-tab-pane"
                        type="button" role="tab" aria-controls="pendientes-tab-pane" aria-selected="true">Solicitudes Pendientes</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="aprobadas-tab" data-bs-toggle="tab" data-bs-target="#apobadas-tab-pane"
                        type="button" role="tab" aria-controls="aprobadas-tab-pane" aria-selected="false">Solicitudes Aprobadas</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="rechazadas-tab" data-bs-toggle="tab" data-bs-target="#rechazadas-tab-pane"
                        type="button" role="tab" aria-controls="rechazadas-tab-pane" aria-selected="false">Solicitudes Rechazadas</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="pendientes-tab-pane" role="tabpanel"
                    aria-labelledby="pendientes-tab" tabindex="0">
                    <div class="container">
                        <div class="row" style="overflow-y: scroll;" >
                            <Solicitudes  v-for="solicitud in solicitudesPendientes" :key="solicitud" :solicitud="solicitud"/>
                        </div>                       
                    </div>              
                </div>
                <div class="tab-pane fade" id="aprobadas-tab-pane" role="tabpanel" aria-labelledby="aprobadas-tab"
                    tabindex="0">
                    <h2>Solicitudes Aprobadas</h2>
                </div>
                <div class="tab-pane fade" id="rechazadas-tab-pane" role="tabpanel" aria-labelledby="rechazadas-tab"
                    tabindex="0">
                    <h2>Solicitudes Rechazadas</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script  setup>
import { inject, ref, onUpdated } from 'vue'
import { useRouter } from 'vue-router'
import useUser from '../composables/useUser'
import Solicitudes from '../../../components/users/Solicitudes.vue'
const router = useRouter()
const { obtenerSolicitudesPendientes, useObtenerSolicitudesPendientes} = useUser()

obtenerSolicitudesPendientes()
let solicitudesPendientes = useObtenerSolicitudesPendientes

onUpdated(() => {
    obtenerSolicitudesPendientes()
    solicitudesPendientes = useObtenerSolicitudesPendientes
})

</script>

<style scoped>
#pendientes-tab,#aprobadas-tab,#rechazadas-tab {
    color: #0072bc;
}

</style>