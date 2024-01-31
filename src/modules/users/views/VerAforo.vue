<template>
    <DashboardLayout>
        <div class="container">
            <h1 class="text-center">Aforo</h1>
            <p class="h4">Cantidad de trabajadores en la tienda: <span class="display-1" style="color: #f7941d;">{{
                aforo.CantidadSolicitudesEnCurso }}</span> </p>
        </div>
        <div class="container-fluid">
            <section id="minimal-statistics">
                <div class="row">
                    <div class="col-12 mt-3 mb-1">
                        <h4 class="text-center">Información Aforo</h4>
                    </div>
                </div>
                <div class="row">
                    <div v-for="info in informacionAforo" class="col-md-12 my-2">
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-1">
                                            <div class="media d-flex">
                                                <div class="align-self-center">
                                                    <img class="img-fluid rounded-circle" :src="info.Foto" width="50"
                                                        height="50" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="row">
                                                <p class="text-center">Nro. Ingreso</p>
                                            </div>
                                            <div class="row">
                                                <div class="text-center">

                                                    {{ info.ConsecutivoSolicitudIngreso }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="row">
                                                <p class="text-center">Nombre del trabajador</p>
                                            </div>
                                            <div class="row">
                                                <div class="text-center">
                                                    {{ info.NombreCompleto }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="row">
                                                <p class="text-center">Hora de ingreso</p>
                                            </div>
                                            <div class="row">
                                                <div class="text-center">
                                                    {{ info.HoraEntradaReal }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="row">
                                                <p class="text-center">Empresa</p>
                                            </div>
                                            <div class="row">
                                                <div class="text-center">
                                                    {{ info.Empresa }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </DashboardLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import DashboardLayout from '@Layouts/DashboardLayout.vue'
import useUser from '../composables/useUser'

const identificacionUsuario = localStorage.getItem('identifiacionUsuario')
const { useObtenerAforo, obtenerAforo,
    useObtenerInformacionAforo, obtenerInformacionAforo
} = useUser()

onMounted(() => {
    obtenerAforo()
    obtenerInformacionAforo(identificacionUsuario)
})

const aforo = useObtenerAforo
const informacionAforo = useObtenerInformacionAforo

</script>