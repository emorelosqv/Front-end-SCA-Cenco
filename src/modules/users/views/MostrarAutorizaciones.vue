<template>
    <DashboardLayout>
        <div class="d-flex">
            <div class="overflow-auto">
                <div class="card m-2">
                    <div class="row g-0">
                        <div class="col-md-12">

                            <div class="card-body">

                                <h5 class="card-title">Solicitud Nro {{ solici[0].ConsecutivoAutorizacion }} </h5>
                                <p class="card-text">
                                    {{ solici[0].DescripcionSolicitud }}
                                </p>
                                <p class="card-text">
                                    <small class="text-muted">{{ solici[0].FechaSolicitud }}</small>
                                </p>
                            </div>
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
    console.log(id)
    obtenerSolicitudesUsuario(id)
})

const solici = useObtenerSolicitudesUsuario
</script>
