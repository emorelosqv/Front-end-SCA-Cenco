<template>
    <DashboardLayout>
        <div class="container my-4 mx-auto d-flex flex-column bg-light">
            <div class="header">
                <div class="row p-4">
                    <div class="col-md-7">
                        <h1>Incidente Nro. {{ incidente.id }}</h1>
                        <label id="descripcionLabel"><strong>Descripción del incidente</strong></label>
                        <p class="text-right">{{ incidente.descripcion }}</p>
                    </div>
                </div>
            </div>
            <div class="container-body mt-4">
                <div class="row">
                    <div class="col-md-6 p-2">
                        <ul class="list-group content-center">
                            <li class="list-group-item">Nombre del trabajador: {{ incidente.nombres }} {{
                                incidente.apellidos
                            }}</li>
                            <li class="list-group-item">Identificación del trabajador: {{ incidente.identificacion }}</li>
                            <li class="list-group-item">Fecha del incidente: {{ incidente.descripcionEstado }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>

<script setup>
import { onBeforeMount, inject, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Documento from '../../../components/users/Documento.vue'
import useUser from '../composables/useUser'
import DashboardLayout from '@Layouts/DashboardLayout.vue'

const swal = inject('$swal')
const router = useRouter()

const { useObtenerIncidente, obtenerIncidente } = useUser()
const props = defineProps(['idIncidente'])

onBeforeMount(() => {
    obtenerIncidente(parseInt(props.idIncidente))
})

const incidente = useObtenerIncidente


</script>

<style scoped>
h1 {
    color: #0072bc;
}

#descripcionLabel {
    color: #f7941d;
}
</style>