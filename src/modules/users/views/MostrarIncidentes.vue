<template>
    <div class="container text-center mt-5">
        <div class="row">
            <div class="col-md-4">
                <h3> Registros de incidentes</h3>
            </div>
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <input class="form-control" type="text" id="filtrarIncidentes" placeholder="Filtrar">
                    </div>
                    <div class="col-md-4">
                        <button @click="filtrarRegistros()" class="btn"><font-awesome-icon
                                :icon="['fas', 'magnifying-glass']" /></button>
                        <button @click="limpiarRegistros()" class="btn"><font-awesome-icon
                                :icon="['fas', 'eraser']" /></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Nro. Incidente</th>
                        <th scope="col">Identificacion</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Nombre Completo</th>
                        <th scope="col">Visualizar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="incidente in incidentes" :key="incidente.id">
                        <th scope="row">{{ incidente.id }}</th>
                        <td>{{ incidente.identificacion }}</td>
                        <td>{{ incidente.fecha }}</td>
                        <td>{{ incidente.nombres + " " + incidente.apellidos }}</td>
                        <td>
                            <router-link :to="{ name: 'ver-incidente', params: { idIncidente: incidente.id } }">
                                <font-awesome-icon :icon="['fas', 'eye']" />
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
import { inject, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import useUser from '../composables/useUser'
import Incidente from '../../../components/users/Indicente.vue'
const router = useRouter()
const { obtenerIncidentes, useObtenerIncidentes, filtrarRegistrosIncidentes, useObtenerIncidentesFiltrados } = useUser()

onMounted(() => {
    obtenerIncidentes()

})
let incidentes = useObtenerIncidentes

async function filtrarRegistros() {
    const valFiltro = document.getElementById('filtrarIncidentes').value
    const result = await filtrarRegistrosIncidentes(valFiltro)

    incidentes = useObtenerIncidentesFiltrados
}

async function limpiarRegistros() {
    obtenerIncidentes()
    incidentes = useObtenerIncidentes
}

</script>