<template>
    <div class="container text-center mt-5">
        <div class="row">
            <div class="col-md-4">
                <h3> Registros de conductas</h3>
            </div>
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <input class="form-control" type="text" id="filtrarConductas" placeholder="Filtrar">
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
                        <th scope="col">Nro. Conducta</th>
                        <th scope="col">Identificacion</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Nombre Completo</th>
                        <th scope="col">Visualizar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="conducta in conductas" :key="conducta.id">
                        <th scope="row">{{ conducta.id }}</th>
                        <td>{{ conducta.identificacion }}</td>
                        <td>{{ conducta.fecha }}</td>
                        <td>{{ conducta.nombres + " " + conducta.apellidos }}</td>
                        <td>
                            <router-link to="#">
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
const router = useRouter()
const { obtenerConductas, useObtenerConductas, filtrarRegistrosConductas, useObtenerConductasFiltradas } = useUser()

onMounted(() => {
    obtenerConductas()
})
let conductas = useObtenerConductas


async function filtrarRegistros() {
    const valFiltro = document.getElementById('filtrarConductas').value
    const result = await filtrarRegistrosConductas(valFiltro)

    conductas = useObtenerConductasFiltradas
}

async function limpiarRegistros() {
    obtenerConductas()
    conductas = useObtenerConductas
}
</script>
