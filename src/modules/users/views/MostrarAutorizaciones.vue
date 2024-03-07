<template>
    <DashboardLayout>
        <div class="container" v-for="soli in solici" :key="soli.ConsecutivoAutorizacion">
                <div class="row m-2">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center">Solicitud Nro. {{ soli.ConsecutivoAutorizacion }} </h5>
                            <p class="card-text">
                               <strong>Descripción de la solicitud:</strong> {{ soli.DescripcionSolicitud }}
                            </p>
                            <p class="card-text">
                                <strong>Fecha de ingreso seleccionada: </strong><small class="text-muted">{{ soli.FechaSolicitud }}</small>
                            </p>                          
                            <p class="card-text">
                                <strong>Tienda: </strong><small class="text-muted">{{ soli.NombreTiendaSolicitud }}  <strong> Bandera: </strong> {{ soli.BanderaTienda }}</small>
                            </p>
                            <p class="card-text">
                                <strong>Estado de la solicitud: </strong><small class="text-muted">{{ soli.EstadoSolicitud}}</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </DashboardLayout>
</template>

<script setup>
import { onBeforeMount, onMounted } from 'vue'
import DashboardLayout from '@Layouts/DashboardLayout.vue'
import useUser from '../composables/useUser'

const { obtenerSolicitudesUsuario, useObtenerSolicitudesUsuario } = useUser()

onBeforeMount(() => {
    const id = localStorage.getItem('identifiacionUsuario')
    obtenerSolicitudesUsuario(id)
})

const solici = useObtenerSolicitudesUsuario

</script>
