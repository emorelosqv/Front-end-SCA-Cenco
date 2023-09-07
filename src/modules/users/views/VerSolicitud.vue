<template>
    <div class="container my-4 mx-auto d-flex flex-column bg-light">
        <div class="header">
            <div class="row r1">
                <div class="col-md-9 abc">
                    <h1>Solicitud Nro. {{ soli.id }}</h1>
                </div>
                <label id="descripcionLabel">Descripción de la solicitud</label>
                <p class="text-right">{{ soli.descripcion }}</p>
            </div>
        </div>
        <div class="container-body mt-4">
            <div class="row">
                <div class="col-md-5 p-0 klo">
                    <ul>
                        <li>Fecha de la solicitud: {{ soli.fechaAutorizacion }}</li>
                        <li>Nombre del solicitante: {{ soli.nombres }} {{ soli.apellidos }}</li>
                        <li>Correo: {{ soli.correo }}</li>
                        <li>Estado de la solicitud: {{ soli.descripcionEstado }}</li>
                        <li>Tienda: {{ soli.tienda }}</li>
                    </ul>
                </div>
                <div class="col-md-7 ">
                    <div class="row">
                        <Documento v-for="documento in documentos" :key="documento.id" :documento="documento" />
                    </div>
                </div>
            </div>
            <div class="row my-4">
                <div class="col-md-6 mx-auto">
                    <button class="btn btn-success" @click="onAprobarSolicitud">
                        Aprobar solicitud
                    </button>
                </div>
                <div class="col-md-6 ">
                    <button class="btn btn-danger" @click="onRechazarSolicitud">
                        Rechazar solicitud
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, inject } from 'vue'
import { useRouter } from 'vue-router'
import Documento from '../../../components/users/Documento.vue'
import useUser from '../composables/useUser'

const swal = inject('$swal')
const router = useRouter()

const { useObtenerSolicitud, obtenerSolicitud,
    useObtenerDocumentos, aprobarSolicitud, rechazarSolicitud } = useUser()
const { idSolicitud } = defineProps(['idSolicitud'])

onBeforeMount(() => {
    obtenerSolicitud(parseInt(idSolicitud))
})

const soli = useObtenerSolicitud
const documentos = useObtenerDocumentos

const onAprobarSolicitud = async () => {
    try {
        const respuestaApi = await aprobarSolicitud(idSolicitud)
        if (respuestaApi.statusCode === 200) {
            router.push({ name: 'validar-autorizaciones' })
            swal("Success", respuestaApi.msg, 'success')
        } else {
            swal('Error', respuestaApi.msg, 'error')
        }
    } catch (error) {
        console.log(error)
        swal("Error", "Ha ocurrido un error", 'error')
    }
}

const onRechazarSolicitud = async () => {
    try {
        const respuestaApi = await rechazarSolicitud(idSolicitud)
        if (respuestaApi.statusCode === 200) {
            router.push({ name: 'validar-autorizaciones' })
            swal("Success", respuestaApi.msg, 'success')
        } else {
            swal('Error', respuestaApi.msg, 'error')
        }
    } catch (error) {
        console.log(error)
        swal("Error", "Ha ocurrido un error", 'error')
    }
}

</script>

<style scoped>
h1 {
    color: #0072bc;
}

#descripcionLabel {
    color: #f7941d;
}
</style>