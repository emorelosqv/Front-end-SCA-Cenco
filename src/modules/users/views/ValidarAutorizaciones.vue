<template>
    <DashboardLayout>
        <div class="container text-center mt-5">
            <h2>Solicitudes de Ingreso</h2>
            <div class="row">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button @click="refrescarSolicitudesPendientes" class="nav-link  active" id="pendientes-tab"
                            data-bs-toggle="tab" data-bs-target="#pendientes-tab-pane" type="button" role="tab"
                            aria-controls="pendientes-tab-pane" aria-selected="true">Solicitudes Pendientes</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button @click="refrescarSolicitudesAprobadas" class="nav-link" id="aprobadas-tab"
                            data-bs-toggle="tab" data-bs-target="#aprobadas-tab-pane" type="button" role="tab"
                            aria-controls="aprobadas-tab-pane" aria-selected="false">Solicitudes
                            Aprobadas</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button @click="refrescarSolicitudesRechazadas" class="nav-link" id="rechazadas-tab"
                            data-bs-toggle="tab" data-bs-target="#rechazadas-tab-pane" type="button" role="tab"
                            aria-controls="rechazadas-tab-pane" aria-selected="false">Solicitudes
                            Rechazadas</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button @click="refrescarSolicitudesEnCurso" class="nav-link" id="en-curso-tab"
                            data-bs-toggle="tab" data-bs-target="#en-curso-tab-pane" type="button" role="tab"
                            aria-controls="en-curso-tab-pane" aria-selected="false">Solicitudes
                            En Curso</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button @click="refrescarSolicitudesFinalizadas" class="nav-link" id="finalizadas-tab"
                            data-bs-toggle="tab" data-bs-target="#finalizadas-tab-pane" type="button" role="tab"
                            aria-controls="finalizadas-tab-pane" aria-selected="false">Solicitudes
                            Finalizadas</button>

                        </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="pendientes-tab-pane" role="tabpanel"
                        aria-labelledby="pendientes-tab" tabindex="0">
                        <div class="container">
                            <div class="row">
                                <div class="row" v-if="sinSolicitudesPendientes">
                                    <h2>No hay solicitudes pendientes por validar</h2>
                                </div>
                                <div class="table-responsive" v-else>
                                    <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">Nro. solicitud</th>
                                                <th scope="col">Identificación del solicitante</th>
                                                <th scope="col">Nombre completo del solicitante</th>
                                                <th scope="col">Correo electrónico</th>
                                                <th scope="col">Visualizar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="solicitud in solicitudesPendientes" :key="solicitud.id">
                                                <th scope="row">{{ solicitud.id }}</th>
                                                <td>{{ solicitud.identificacion }}</td>
                                                <td>{{ solicitud.nombreCompleto }}</td>
                                                <td>{{ solicitud.correo }}</td>
                                                <td>
                                                    <router-link
                                                        :to="{ name: 'ver-solicitud', params: { idSolicitud: solicitud.id } }">
                                                        <font-awesome-icon :icon="['fas', 'eye']" />
                                                    </router-link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="aprobadas-tab-pane" role="tabpanel" aria-labelledby="aprobadas-tab"
                        tabindex="0">
                        <div class="container">
                            <div class="row">
                                <div class="row" v-if="sinSolicitudesAprobadas">
                                    <h2>No hay solicitudes aprobadas por validar</h2>
                                </div>
                                <div class="row" v-else>
                                    <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">Nro.</th>
                                                <th scope="col">Identificación</th>
                                                <th scope="col">Nombre completo del solicitante</th>
                                                <th scope="col">Correo electrónico</th>
                                                <th scope="col">Visualizar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="solicitud in solicitudesAprobadas" :key="solicitud.id">
                                                <th scope="row">{{ solicitud.id }}</th>
                                                <td>{{ solicitud.identificacion }}</td>
                                                <td>{{ solicitud.nombreCompleto }}</td>
                                                <td>{{ solicitud.correo }}</td>
                                                <td>
                                                    <router-link
                                                        :to="{ name: 'ver-solicitud', params: { idSolicitud: solicitud.id } }">
                                                        <font-awesome-icon :icon="['fas', 'eye']" />
                                                    </router-link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="rechazadas-tab-pane" role="tabpanel" aria-labelledby="rechazadas-tab"
                        tabindex="0">
                        <div class="container">
                            <div class="row">
                                <div class="row" v-if="sinSolicitudesRechazadas">
                                    <h2>No hay solicitudes rechazadas por validar</h2>
                                </div>
                                <div class="row" v-else>
                                    <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">Nro.</th>
                                                <th scope="col">Identificación</th>
                                                <th scope="col">Nombre completo del solicitante</th>
                                                <th scope="col">Correo electrónico</th>
                                                <th scope="col">Visualizar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="solicitud in solicitudesRechazadas" :key="solicitud.id">
                                                <th scope="row">{{ solicitud.id }}</th>
                                                <td>{{ solicitud.identificacion }}</td>
                                                <td>{{ solicitud.nombreCompleto }}</td>
                                                <td>{{ solicitud.correo }}</td>
                                                <td>
                                                    <router-link
                                                        :to="{ name: 'ver-solicitud', params: { idSolicitud: solicitud.id } }">
                                                        <font-awesome-icon :icon="['fas', 'eye']" />
                                                    </router-link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="en-curso-tab-pane" role="tabpanel" aria-labelledby="en-curso-tab"
                        tabindex="0">
                        <div class="container">
                            <div class="row">
                                <div class="row" v-if="sinSolicitudesRechazadas">
                                    <h2>No hay solicitudes en curso por validar</h2>
                                </div>
                                <div class="row" v-else>
                                    <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">Nro.</th>
                                                <th scope="col">Identificación</th>
                                                <th scope="col">Nombre completo del solicitante</th>
                                                <th scope="col">Correo electrónico</th>
                                                <th scope="col">Visualizar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="solicitud in solicitudesEnCurso" :key="solicitud.id">
                                                <th scope="row">{{ solicitud.id }}</th>
                                                <td>{{ solicitud.identificacion }}</td>
                                                <td>{{ solicitud.nombreCompleto }}</td>
                                                <td>{{ solicitud.correo }}</td>
                                                <td>
                                                    <router-link
                                                        :to="{ name: 'ver-solicitud', params: { idSolicitud: solicitud.id } }">
                                                        <font-awesome-icon :icon="['fas', 'eye']" />
                                                    </router-link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="finalizadas-tab-pane" role="tabpanel" aria-labelledby="finalizadas-tab"
                        tabindex="0">
                        <div class="container">
                            <div class="row">
                                <div class="row" v-if="sinSolicitudesFinalizadas">
                                    <h2>No hay solicitudes finalizadas por validar</h2>
                                </div>
                                <div class="row" v-else>
                                    <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">Nro.</th>
                                                <th scope="col">Identificación</th>
                                                <th scope="col">Nombre completo del solicitante</th>
                                                <th scope="col">Correo electrónico</th>
                                                <th scope="col">Visualizar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="solicitud in solicitudesFinalizadas" :key="solicitud.id">
                                                <th scope="row">{{ solicitud.id }}</th>
                                                <td>{{ solicitud.identificacion }}</td>
                                                <td>{{ solicitud.nombreCompleto }}</td>
                                                <td>{{ solicitud.correo }}</td>
                                                <td>
                                                    <router-link
                                                        :to="{ name: 'ver-solicitud', params: { idSolicitud: solicitud.id } }">
                                                        <font-awesome-icon :icon="['fas', 'eye']" />
                                                    </router-link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>

<script  setup>
import { inject, ref, onUpdated, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import useUser from '../composables/useUser'
//import Solicitudes from '../../../components/users/Solicitudes.vue'
import DashboardLayout from '@Layouts/DashboardLayout.vue'
const router = useRouter()
const { obtenerSolicitudesPendientes, useObtenerSolicitudesPendientes,
    useObtenerValorPendientes, obtenerSolicitudesAprobadas,
    obtenerSolicitudesRechazadas, useObtenerSolicitudesAprobadas,
    useObtenerSolicitudesRechazadas, useObtenerValorAprobadas,
    useObtenerValorRechazadas, obtenerSolicitudesEnCurso, 
    useObtenerSolicitudesEnCurso,  obtenerSolicitudesFinalizadas,
    useObtenerSolicitudesFinalizadas, useObtenerValorEnCurso,
    useObtenerValorFinalizadas } = useUser()

let solicitudesPendientes = null
let solicitudesAprobadas = null
let solicitudesRechazadas = null
let solicitudesEnCurso = null
let solicitudesFinalizadas = null

const sinSolicitudesPendientes = ref(false)
const sinSolicitudesAprobadas = ref(false)
const sinSolicitudesRechazadas = ref(false)
const sinSolicitudesEnCurso = ref(false)
const sinSolicitudesFinalizadas = ref(false)

onBeforeMount(() => {
    const idUsuario = localStorage.getItem('identifiacionUsuario')
    obtenerSolicitudesPendientes(idUsuario)
    solicitudesPendientes = useObtenerSolicitudesPendientes

    obtenerSolicitudesAprobadas(idUsuario)
    solicitudesAprobadas = useObtenerSolicitudesAprobadas

    obtenerSolicitudesRechazadas(idUsuario)
    solicitudesRechazadas = useObtenerSolicitudesRechazadas

    obtenerSolicitudesEnCurso(idUsuario)
    solicitudesEnCurso = useObtenerSolicitudesEnCurso

    obtenerSolicitudesFinalizadas(idUsuario)
    solicitudesFinalizadas = useObtenerSolicitudesFinalizadas

})

const refrescarSolicitudesPendientes = async () => {
    try {
        const idUsuario = localStorage.getItem('identifiacionUsuario')
        await obtenerSolicitudesPendientes(idUsuario)
        solicitudesPendientes = useObtenerSolicitudesPendientes
    } catch (error) {
        console.log(error)
    }
}
const refrescarSolicitudesAprobadas = async () => {
    try {
        const idUsuario = localStorage.getItem('identifiacionUsuario')
        await obtenerSolicitudesAprobadas(idUsuario)
        solicitudesAprobadas = useObtenerSolicitudesAprobadas
    } catch (error) {
        console.log(error)
    }
}

const refrescarSolicitudesRechazadas = async () => {
    try {
        const idUsuario = localStorage.getItem('identifiacionUsuario')
        await obtenerSolicitudesRechazadas(idUsuario)
        solicitudesRechazadas = useObtenerSolicitudesRechazadas
    } catch (error) {
        console.log(error)
    }
}

const refrescarSolicitudesEnCurso = async () => {
    try {
        const idUsuario = localStorage.getItem('identifiacionUsuario')
        await obtenerSolicitudesEnCurso(idUsuario)
        solicitudesEnCurso = useObtenerSolicitudesEnCurso
    } catch (error) {
        console.log(error)
    }
}

const refrescarSolicitudesFinalizadas = async () => {
    try {
        const idUsuario = localStorage.getItem('identifiacionUsuario')
        await obtenerSolicitudesFinalizadas(idUsuario)
        solicitudesFinalizadas = useObtenerSolicitudesFinalizadas
    } catch (error) {
        console.log(error)
    }
}

onUpdated(() => {
    const valorArraySolicitudesPendientes = useObtenerValorPendientes
    const valorArraySolicitudesAprobadas = useObtenerValorAprobadas
    const valorArraySolicitudesRechazadas = useObtenerValorRechazadas
    const valorArraySolicitudesEnCurso= useObtenerValorEnCurso
    const valorArraySolicitudesFinalizadas = useObtenerValorFinalizadas

    //Validamos la cantidad de solicitudes pendientes
    if (valorArraySolicitudesPendientes.value > 0) {
        sinSolicitudesPendientes.value = false
    } else {
        sinSolicitudesPendientes.value = true
    }

    //Validamos la cantidad de solicitudes aprobadas
    if (valorArraySolicitudesAprobadas.value > 0) {
        sinSolicitudesAprobadas.value = false
    } else {
        sinSolicitudesAprobadas.value = true
    }

    //Validamos la cantidad de solicitudes rechazadas
    if (valorArraySolicitudesRechazadas.value > 0) {
        sinSolicitudesRechazadas.value = false
    } else {
        sinSolicitudesRechazadas.value = true
    }

    //Validamos la cantidad de solicitudes en curso
    if (valorArraySolicitudesEnCurso.value > 0) {
        sinSolicitudesEnCurso.value = false
    } else {
        sinSolicitudesEnCurso.value = true
    }

    //Validamos la cantidad de solicitudes finalizadas
    if (valorArraySolicitudesFinalizadas.value > 0) {
        sinSolcitudesFinalizadas.value = false
    } else {
        sinSolcitudesFinalizadas.value = true
    }

})
</script>

<style scoped>
#pendientes-tab,
#aprobadas-tab,
#rechazadas-tab, 
#en-curso-tab,
#finalizadas-tab {
    color: #0072bc;
    /*color: #f7941d;*/
}
</style>