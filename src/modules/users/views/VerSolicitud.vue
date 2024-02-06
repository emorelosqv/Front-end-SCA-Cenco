<template>
    <DashboardLayout>
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
                        <div class="row" v-if="soli.idEstadoSolicitud == 2">
                            <div class="col-md-6">
                                <button class="btn btn-primary p-2 m-1" @click="onGenerarIngreso">
                                    <font-awesome-icon :icon="['fas', 'check']" /> Confirmar Ingreso
                                </button>
                            </div>
                        </div>
                        <div class="row" v-if="soli.idEstadoSolicitud == 4">
                            <div class="col-md-6">
                                <button class="btn btn-danger p-2 m-1" @click="onFinalizarIngreso">
                                    <font-awesome-icon :icon="['fas', 'check']" /> Finalizar Ingreso
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
                            <li class="list-group-item">Estado de la solicitud: {{ soli.descripcionEstado }}</li>
                            <li class="list-group-item">Tienda: {{ soli.tienda }}</li>
                            <li class="list-group-item">Área solicitante: {{ soli.area }}</li>
                        </ul>
                        <div class="row text-center my-2">
                            <div class="col md-8">
                                <button type="button" class="datosSolicitante btn text-center" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" @click="onObtenerDatosSolicitante(soli.identificacion)">
                                    Datos del solicitante
                                </button>
                            </div>

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-dialog-scrollable">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Datos personales del solicitante
                                            </h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="col-md-12">
                                                <div class="card my-4" id="card">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <h4 class="text-center">Foto del solicitante</h4>
                                                                        <img :src="solicitante.fotoFrontal"
                                                                            alt="Foto frontal del solicitante"
                                                                            class="img-fluid">
                                                                    </div>
                                                                </div>
                                                                <div class="row mt-4">
                                                                    <p>Nombre completo: {{ solicitante.nombreCompleto }}</p>
                                                                    <p>Tipo de identificacion: {{
                                                                        solicitante.tipoIdentificacion
                                                                    }}
                                                                    </p>
                                                                    <p>Nro. Identificacion: {{ solicitante.identificacion }}
                                                                    </p>
                                                                    <p>Correo: {{ solicitante.correo }}</p>
                                                                    <h4 class="text-center">Datos de la empresa</h4>
                                                                    <p>Nombre: {{ solicitante.nombreEmpresa }}</p>
                                                                    <p>NIT: {{ solicitante.nitEmpresa }}</p>
                                                                    <p>Cargo del trabajador: {{ solicitante.cargoTrabajador
                                                                    }}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3 class="text-center"> Registro de antecedentes </h3>
                                                        <div class="row">
                                                            <table class="table">
                                                                <thead class="thead-dark">
                                                                    <tr>
                                                                        <th scope="col">#</th>
                                                                        <th scope="col">Fecha</th>
                                                                        <th scope="col">Tienda</th>
                                                                        <th scope="col">Detalle</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-for="conducta in  conductasSolicitante "
                                                                        :key="conducta.id">
                                                                        <th scope="row">{{ conducta.id }}</th>
                                                                        <td>{{ conducta.fecha }}</td>
                                                                        <td>Tienda 1</td>
                                                                        <td>
                                                                            <!-- <button class="btn btn-secondary"
                                                                            title="Descripcion del antecedente"
                                                                            data-bs-toggle="popover"
                                                                            :data-bs-content="conducta.descripcion">Ver
                                                                            descripcion</button> -->
                                                                            {{ conducta.descripcion }}
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
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row p-4">
                    <Documento v-for=" documento  in  documentos " :key="documento.id" :documento="documento" />
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
import DatosSolicitante from '@Components/users/DatosSolicitante.vue'

const generarIngresoForm = ref({
    IdAutorizacion: 0,
    HoraEntradaReal: ''
})

const generarSalidaForm = ref({
    IdAutorizacion: 0,
    HoraSalidaReal: ''
})

const swal = inject('$swal')
const router = useRouter()

const { useObtenerSolicitud, obtenerSolicitud,
    useObtenerDocumentos, aprobarSolicitud,
    rechazarSolicitud, enviarCorreo,
    obtenerDatosSolicitante, useObtenerDatosSolicitante,
    obtenerConductasUsuario, useObtenerConductasUsuario,
    generarIngreso, generarSalida } = useUser()
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
            //await enviarCorreo(correoAprobacion)
        } else {
            swal('Error', respuestaApi.msg, 'error')
        }
    } catch (error) {
        console.log(error)
        swal("Error", "Ha ocurrido un error", 'error')
    }
}


const onGenerarIngreso = async () => {
    try {
        let fecha = new Date()
        const horaEntradaReal = fecha.getHours() + ':' + fecha.getMinutes()
        generarIngresoForm.value.IdAutorizacion = idSolicitud
        generarIngresoForm.value.HoraEntradaReal = horaEntradaReal
        const respuestaApi = await generarIngreso(generarIngresoForm.value)
        if (respuestaApi.statusCode === 200) {
            router.push({ name: 'validar-autorizaciones' })
            swal("Success", respuestaApi.msg, 'success')
            //await enviarCorreo(correoAprobacion)
        } else {
            swal('Error', respuestaApi.msg, 'error')
        }
    } catch (error) {
        console.log(error)
        swal("Error", "Ha ocurrido un error", 'error')
    }
}

const onFinalizarIngreso = async () => {
    try {
        let fecha = new Date()
        const horaSalidaReal = fecha.getHours() + ':' + fecha.getMinutes()
        generarSalidaForm.value.IdAutorizacion = idSolicitud
        generarSalidaForm.value.HoraSalidaReal = horaSalidaReal
        const respuestaApi = await generarSalida(generarSalidaForm.value)
        if (respuestaApi.statusCode === 200) {
            router.push({ name: 'validar-autorizaciones' })
            swal("Success", respuestaApi.msg, 'success')
            //await enviarCorreo(correoAprobacion)
        } else {
            swal('Error', respuestaApi.msg, 'error')
        }
    } catch (error) {
        console.log(error)
        swal("Error", "Ha ocurrido un error", 'error')
    }
}

async function onObtenerDatosSolicitante(idSolicitante) {
    try {
        const result = await obtenerDatosSolicitante(idSolicitante)
        const resultIncidencias = await obtenerConductasUsuario(idSolicitante)
    } catch (error) {
        console.log(error)
    }
}

const solicitante = useObtenerDatosSolicitante
const conductasSolicitante = useObtenerConductasUsuario

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

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

</script>

<style scoped>
h1 {
    color: #0072bc;
}

#descripcionLabel {
    color: #f7941d;
}

.datosSolicitante {
    background-color: #f7941d;
    color: #fff;
}
</style>