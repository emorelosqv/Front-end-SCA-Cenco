<template>
    <div class="container my-4 mx-auto d-flex flex-column bg-light">
        <div class="header">
            <div class="row r1">
                <div class="col-md-9 abc">
                    <h1>Solicitud Nro. {{ soli.id }}</h1>
                </div>
                <label id="descripcionLabel"><strong>Descripción de la solicitud</strong></label>
                <p class="text-right">{{ soli.descripcion }}</p>
            </div>
        </div>
        <div class="container-body mt-4">
            <div class="row">
                <div class="col-md-6 p-0">
                    <ul>
                        <li>¿Llevará herramientas o implementos de trabajo?: <strong
                                v-if="soli.tieneHerramientas == 1">Sí</strong> <strong v-else>No</strong></li>
                        <li>¿Tendrá que sacar activos de la tienda?: <strong v-if="soli.activosSalida == 1">Sí</strong>
                            <strong v-else>No</strong>
                        </li>
                        <li>¿La solicitud será solo por un día?: <strong v-if="soli.unSoloDia == 1">Sí</strong> <strong
                                v-else>No</strong></li>
                        <li v-if="soli.unSoloDia == 1">Fecha de la solicitud: {{ soli.fechaAutorizacion }}</li>
                        <li v-else>Rango de fecha de la solicitud: <strong>{{ soli.rangoFechaInicialAutorizacion }} / {{
                            soli.rangoFechaFinalAutorizacion }}</strong></li>
                        <li>Hora de entrada: {{ soli.horaEntrada }}</li>
                        <li>Hora de salida: {{ soli.horaSalida }}</li>
                        <li>Nombre del solicitante: {{ soli.nombres }} {{ soli.apellidos }}</li>
                        <li>Correo: {{ soli.correo }}</li>
                        <li>Estado de la solicitud: {{ soli.descripcionEstado }}</li>
                        <li>Tienda: {{ soli.tienda }}</li>
                        <li>Area solicitante: {{ soli.area }}</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <Documento v-for="documento in documentos" :key="documento.id" :documento="documento" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-md-12 my-4">
                <button class="btn btn-success p-2 m-1" @click="onAprobarSolicitud">
                    Aprobar solicitud
                </button>
                <button class="btn btn-danger p-2 m-1" @click="onRechazarSolicitud">
                    Rechazar solicitud
                </button>
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
    contenido: "Su solicitud Nro. " + idSolicitud + " fue revisada y fue rechazada",


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