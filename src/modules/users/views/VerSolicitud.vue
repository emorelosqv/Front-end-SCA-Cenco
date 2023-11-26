<template>
    <div class="container my-4 mx-auto d-flex flex-column bg-light">
        <div class="header">
            <div class="row p-4">
                <div class="col-md-7">
                    <h1>Solicitud Nro. {{ soli.id }}</h1>
                    <label id="descripcionLabel"><strong>Descripción de la solicitud</strong></label>
                    <p class="text-right">{{ soli.descripcion }}</p>
                </div>
                <div class="col-md-5">
                    <div class="row" v-if="soli.idEstadoSolicitud == 1">
                        <div class="col-md-6">
                            <button class="btn btn-success p-2 m-1" @click="onAprobarSolicitud">
                                <font-awesome-icon :icon="['fas', 'check']" /> Aprobar solicitud
                            </button>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-danger p-2 m-1" @click="onRechazarSolicitud">
                                <font-awesome-icon :icon="['fas', 'ban']" /> Rechazar solicitud
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-body mt-4">
            <div class="row">
                <div class="col-md-6 p-2">
                    <ul class="list-group">
                        <li class="list-group-item">¿Llevará herramientas o implementos de trabajo?: <strong
                                v-if="soli.tieneHerramientas == 1">Sí</strong> <strong v-else>No</strong></li>
                        <li class="list-group-item">¿Tendrá que sacar activos de la tienda?: <strong
                                v-if="soli.activosSalida == 1">Sí</strong>
                            <strong v-else>No</strong>
                        </li>
                        <li class="list-group-item">¿La solicitud será solo por un día?: <strong
                                v-if="soli.unSoloDia == 1">Sí</strong> <strong v-else>No</strong></li>
                        <li class="list-group-item" v-if="soli.unSoloDia == 1">Fecha de la solicitud: {{
                            soli.fechaAutorizacion }}</li>
                        <li class="list-group-item" v-else>Rango de fecha de la solicitud: <strong>{{
                            soli.rangoFechaInicialAutorizacion }} / {{
        soli.rangoFechaFinalAutorizacion }}</strong></li>
                        <li class="list-group-item">Hora de entrada: {{ soli.horaEntrada }}</li>
                        <li class="list-group-item">Hora de salida: {{ soli.horaSalida }}</li>
                    </ul>
                </div>
                <div class="col-md-6 p-2">
                    <ul class="list-group">
                        <li class="list-group-item">Nombre del solicitante: {{ soli.nombres }} {{ soli.apellidos }}</li>
                        <li class="list-group-item">Correo: {{ soli.correo }}</li>
                        <li class="list-group-item">Estado de la solicitud: {{ soli.descripcionEstado }}</li>
                        <li class="list-group-item">Tienda: {{ soli.tienda }}</li>
                        <li class="list-group-item">Área solicitante: {{ soli.area }}</li>
                    </ul>
                </div>
            </div>
            <div class="row p-4">
                <Documento v-for="documento in documentos" :key="documento.id" :documento="documento" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, inject, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Documento from '../../../components/users/Documento.vue'
import useUser from '../composables/useUser'

const swal = inject('$swal')
const router = useRouter()

const { useObtenerSolicitud, obtenerSolicitud,
    useObtenerDocumentos, aprobarSolicitud,
    rechazarSolicitud, enviarCorreo } = useUser()
const { idSolicitud } = defineProps(['idSolicitud'])

onBeforeMount(() => {
    obtenerSolicitud(parseInt(idSolicitud))
})

const soli = useObtenerSolicitud
const documentos = useObtenerDocumentos

const correoAprobacion = {
    para: "pruebascacenco@gmail.com",
    asunto: "Aprobacion solicitud de ingreso",
    contenido: "Su solicitud Nro. " + idSolicitud + " fue revisada y aprobada",
}

const correoRechazo = {
    para: "pruebascacenco@gmail.com",
    asunto: "Aprobacion solicitud de ingreso",
    contenido: "Su solicitud Nro. " + idSolicitud + " fue revisada y rechazada",
}

const onAprobarSolicitud = async () => {
    try {
        const respuestaApi = await aprobarSolicitud(idSolicitud)
        if (respuestaApi.statusCode === 200) {
            router.push({ name: 'validar-autorizaciones' })
            swal("Success", respuestaApi.msg, 'success')
            await enviarCorreo(correoAprobacion)
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
            await enviarCorreo(correoRechazo)
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