<template>
    <DashboardLayout>
        <div class="container text-center ">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-title">
                        <h3>Agendar Autorización de Ingreso</h3>
                    </div>
                    <form class="card-body" @submit.prevent="agendarAutorizacionEvent">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="inputNombresAgendarAutorizacion"
                                        aria-describedby="inputNombresAgendar" required minlength="10" placeholder="Nombres"
                                        v-model="agendarAutorizacionForm.Nombres" />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="inputApellidosAgendarAutorizacion"
                                        aria-describedby="inputApellidosAgendarAutorizacion" required
                                        placeholder="Apellidos" v-model="agendarAutorizacionForm.Apellidos" />

                                </div>
                                <div class="mb-3">
                                    <input type="number" class="form-control" id="inputIdentificacionAgendarAutorizacion"
                                        aria-describedby="inputIdentificacionAgendarAutorizacion" required
                                        placeholder="Identificación" v-model="agendarAutorizacionForm.Identificacion" />

                                </div>
                                <div class="mb-3">
                                    <input type="email" class="form-control" id="inputEmailAgendarAutorizacion"
                                        aria-describedby="inputEmailAgendarAutorizacion" required
                                        placeholder="ejemplo@ejemplo.com" v-model="agendarAutorizacionForm.Correo" />
                                </div>
                                <div class="mb-3">
                                    <div class="row">
                                        <label for="" class="text"><strong>¿Llevará herramientas o implementos de
                                                trabajo?</strong></label>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="herramientasOptions"
                                                    id="herramientasOptions1" value="1"
                                                    @click="mostrarListaHerramientasTrabajo(1)" required
                                                    v-model="agendarAutorizacionForm.TieneHerramientas">
                                                <label class="form-check-label" for="herramientasOptions1">Sí</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="herramientasOptions"
                                                    id="herramientasOptions2" value="0"
                                                    @click="mostrarListaHerramientasTrabajo(0)"
                                                    v-model="agendarAutorizacionForm.TieneHerramientas">
                                                <label class="form-check-label" for="herramientasOptions2">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="row" v-if="TieneHerramientas">
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <label for="inputFileListaHerramientasAgendarAutorizacion"><strong>Lista
                                                        de herramientas</strong></label>
                                                <input type="file" class="form-control"
                                                    id="inputFileListaHerramientasAgendarAutorizacion"
                                                    aria-describedby="inputFileListaHerramientasAgendarAutorizacion"
                                                    @change="changeFileListaHerramientas" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="row">
                                        <label for="" class="text "><strong>¿Tendrá que sacar activos de la
                                                tienda?</strong><strong style="color:#f7941d;"> Ej.
                                                (repuestos)</strong></label>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="ActivosDeSalidaOptions"
                                                    id="ActivosDeSalidaOptions1" value="1" required
                                                    v-model="agendarAutorizacionForm.ActivosSalida">
                                                <label class="form-check-label" for="ActivosDeSalidaOptions1">Sí</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="ActivosDeSalidaOptions"
                                                    id="ActivosDeSalidaOptions2" value="0"
                                                    v-model="agendarAutorizacionForm.ActivosSalida">
                                                <label class="form-check-label" for="ActivosDeSalidaOptions2">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="row">
                                        <label for="" class="text "><strong>¿La visita será un solo día?</strong></label>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="diasVisitaOptions"
                                                    id="diasVisitaOptions1" value="1" @click="mostrarFecha" required
                                                    v-model="agendarAutorizacionForm.UnSoloDia">
                                                <label id="opciones" class="form-check-label"
                                                    for="diasVisitaOptions1">Sí</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="diasVisitaOptions"
                                                    id="diasVisitaOptions2" value="0" @click="mostrarRangoDeFecha"
                                                    v-model="agendarAutorizacionForm.UnSoloDia">
                                                <label class="form-check-label" for="diasVisitaOptions2">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="UnSoloDia">
                                    <div class="mb-3">
                                        <label for="inputRangoFechaInicialAgendarAutorizacion"><strong>Fecha
                                                inicial:</strong></label>
                                        <input type="date" class="form-control"
                                            id="inputRangoFechaInicialAgendarAutorizacion"
                                            aria-describedby="inputRangoFechaInicialAgendarAutorizacion"
                                            v-model="agendarAutorizacionForm.RangoFechaInicialAutorizacion" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="inputRangoFechaFinalAgendarAutorizacion"><strong>Fecha
                                                final:</strong></label>
                                        <input type="date" class="form-control" id="inputRangoFechaFinalAgendarAutorizacion"
                                            aria-describedby="inputRangoFechaFinalAgendarAutorizacion"
                                            v-model="agendarAutorizacionForm.RangoFechaFinalAutorizacion" />
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="mb-3">
                                        <label for="inputFechaAgendarAutorizacion"><strong>Fecha de
                                                ingreso:</strong></label>
                                        <input type="date" class="form-control" id="inputFechaAgendarAutorizacion"
                                            aria-describedby="inputFechaAgendarAutorizacion"
                                            v-model="agendarAutorizacionForm.FechaAutorizacion" />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="inputHoraEntradaAgendarAutorizacion"><strong>Hora de
                                            entrada:</strong></label>
                                    <input type="time" class="form-control" id="inputHoraEntradaAgendarAutorizacion"
                                        aria-describedby="inputHoraEntradaAgendarAutorizacion" required
                                        v-model="agendarAutorizacionForm.HoraEntradaAutorizacion" />
                                </div>
                                <div class="mb-3">
                                    <label for="inputHoraSalidaAgendarAutorizacion"><strong>Hora de salida:</strong></label>
                                    <input type="time" class="form-control" id="inputHoraSalidaAgendarAutorizacion"
                                        aria-describedby="inputHoraSalidAgendarAutorizacion" required
                                        v-model="agendarAutorizacionForm.HoraSalidaAutorizacion" />
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="mb-3">
                                    <label for="inputDocumentoArlAgendarAutorizacion"><strong>Documento de
                                            ARL</strong></label>
                                    <input type="file" class="form-control" id="inputDocumentoArlAgendarAutorizacion"
                                        aria-describedby="inputDocumentoArlAgendarAutorizacion" required
                                        @change="changeFileArl" accept="application/pdf" />
                                </div>
                                <div class="mb-3">
                                    <label for="inputFileDocumentoIdentificacionAgendarAutorizacion"><strong>Documento de
                                            identificación</strong></label>
                                    <input type="file" class="form-control"
                                        id="inputFileDocumentoIdentificacionAgendarAutorizacion"
                                        aria-describedby="inputFileDocumentoIdentificacionAgendarAutorizacion" required
                                        @change="changeFileDocumentoIdentificacion" accept="application/pdf" />
                                </div>
                                <div class="mb-3">
                                    <label for="inputDocumentoEpsAgendarAutorizacion"><strong>Documento EPS</strong></label>
                                    <input type="file" class="form-control" id="inputDocumentoEpsAgendarAutorizacion"
                                        aria-describedby="inputDocumentoEpsAgendarAutorizacion" required
                                        @change="changeFileEps" accept="application/pdf" />
                                </div>
                                <div class="mb-3">
                                    <label for="inputDocumentoManipulacionAlimentosAgendarAutorizacion"><strong>Documento
                                            Manipulación de Alimentos (si se requiere)</strong></label>
                                    <input type="file" class="form-control"
                                        id="inputDocumentoManipulacionAlimentosAgendarAutorizacion"
                                        aria-describedby="inputDocumentoManipulacionAlimentosAgendarAutorizacion"
                                        @change="changeFileManipulacionAlimentos" accept="application/pdf" />
                                </div>
                                <div class="mb-3">
                                    <label for="inputDepartamentoAgendarAutorizacion"><strong>Digite el
                                            departamento</strong></label>
                                    <select class="select form-control"
                                        v-model.number="agendarAutorizacionForm.Departamento" id="departamento"
                                        @change="changeDepartamento()" required>
                                        <option v-for="departamento in departamentos" :value="departamento.id"
                                            :key="departamento.id">
                                            {{ departamento.nombre }}
                                        </option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="inputMunicipioAgendarAutorizacion"><strong>Digite el
                                            municipio</strong></label>
                                    <select class="select form-control" v-model.number="agendarAutorizacionForm.Municipio"
                                        id="municipio" @change="changeMunicipio()" required>
                                        <option v-for="municipio in municipios" :value="municipio.id" :key="municipio.id">
                                            {{ municipio.nombre }}
                                        </option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="inputTiendaAgendarAutorizacion"><strong>Digite la tienda</strong></label>
                                    <select class="select form-control" v-model.number="agendarAutorizacionForm.Tienda"
                                        id="tienda" required>
                                        <option v-for="tienda in tiendas" :value="tienda.id" :key="tienda.id">
                                            {{ tienda.tienda }}
                                        </option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="inputAreaAgendarAutorizacion"><strong>Seleccione el área
                                            solicitante</strong></label>
                                    <!-- <select class="select form-control form-control-lg"
                                        v-model="agendarAutorizacionForm.Tienda" id="tienda" required>
                                        <option v-for="tienda in tiendas" :value="tienda.id" :key="tienda.id">
                                            {{ tienda.tienda }}
                                        </option>
                                    </select> -->
                                    <select class="select form-control" v-model.number="agendarAutorizacionForm.Area"
                                        id="tienda" required>
                                        <option value="1"> Área 1</option>
                                        <option value="2"> Área 2</option>
                                        <option value="3"> Área 3</option>
                                        <option value="4"> Área 4</option>
                                        <option value="5"> Área 5</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <textarea class="form-control" placeholder="Descripción" name=""
                                        id="DescripcionAgendarAutorizacion" cols="60" rows="8"
                                        v-model="agendarAutorizacionForm.Descripcion"></textarea>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn text-light" id="boton">Agendar Autorización</button>
                    </form>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import useUser from '../composables/useUser'
import DashboardLayout from '@Layouts/DashboardLayout.vue'
import useConfig from '@Modules/config/composables/useConfig'

const { obtenerDepartamentos, useGetDepartamentos,
    obtenerMunicipios, useGetMunicipios,
    obtenerTiendas, useGetTiendas } = useConfig()

onMounted(() => {
    obtenerDepartamentos()
})
const departamentos = useGetDepartamentos

function changeDepartamento() {
    const valDepartamento = document.getElementById('departamento').value
    obtenerMunicipios(valDepartamento)
}

const municipios = useGetMunicipios

function changeMunicipio() {
    const valMunicipio = document.getElementById('municipio').value
    obtenerTiendas(valMunicipio)
}

const tiendas = useGetTiendas

const agendarAutorizacionForm = ref({
    Nombres: '',
    Apellidos: '',
    Identificacion: '',
    Correo: '',
    TieneHerramientas: '',
    ActivosSalida: '',
    UnSoloDia: '',
    FechaAutorizacion: '',
    RangoFechaInicialAutorizacion: '',
    RangoFechaFinalAutorizacion: '',
    HoraEntradaAutorizacion: '',
    HoraSalidaAutorizacion: '',
    DocumentoArl: null,
    DocumentoIdentificacion: null,
    DocumentoEps: null,
    DocumentoManipulacionAlimentos: null,
    ListaHerramientas: null,
    Departamento: 0,
    Municipio: 0,
    Tienda: 0,
    Area: 0,
    Descripcion: ''
})

let UnSoloDia = ref(false)

let TieneHerramientas = ref(false)

const router = useRouter()
const { agendarAutorizacion } = useUser()
const swal = inject('$swal')

function mostrarFecha() {
    UnSoloDia.value = false
}

function mostrarRangoDeFecha() {
    UnSoloDia.value = true
}

function mostrarListaHerramientasTrabajo(opcion) {
    if (opcion == 1) {
        TieneHerramientas.value = true
    } else {
        TieneHerramientas.value = false
    }

}

function changeFileArl() {
    const inputDocumentoArl = document.getElementById('inputDocumentoArlAgendarAutorizacion');
    if (inputDocumentoArl.files && inputDocumentoArl.files[0]) {
        agendarAutorizacionForm.value.DocumentoArl = inputDocumentoArl.files[0];
    }
}

function changeFileDocumentoIdentificacion() {
    const inputFileDocumentoIdentificacionAgendarAutorizacion = document.getElementById('inputFileDocumentoIdentificacionAgendarAutorizacion');
    if (inputFileDocumentoIdentificacionAgendarAutorizacion.files && inputFileDocumentoIdentificacionAgendarAutorizacion.files[0]) {
        agendarAutorizacionForm.value.DocumentoIdentificacion = inputFileDocumentoIdentificacionAgendarAutorizacion.files[0];
    }
}

function changeFileListaHerramientas() {
    const inputFileListaHerramientasAgendarAutorizacion = document.getElementById('inputFileListaHerramientasAgendarAutorizacion');
    if (inputFileListaHerramientasAgendarAutorizacion.files && inputFileListaHerramientasAgendarAutorizacion.files[0]) {
        agendarAutorizacionForm.value.ListaHerramientas = inputFileListaHerramientasAgendarAutorizacion.files[0];
    }
}

function changeFileEps() {
    const inputDocumento = document.getElementById('inputDocumentoEpsAgendarAutorizacion');
    if (inputDocumento.files && inputDocumento.files[0]) {
        agendarAutorizacionForm.value.DocumentoEps = inputDocumento.files[0];
    }
}

function changeFileManipulacionAlimentos() {
    const inputDocumentoManipulacionAlimentos = document.getElementById('inputDocumentoManipulacionAlimentosAgendarAutorizacion');
    if (inputDocumentoManipulacionAlimentos.files && inputDocumentoManipulacionAlimentos.files[0]) {
        agendarAutorizacionForm.value.DocumentoManipulacionAlimentos = inputDocumentoManipulacionAlimentos.files[0];
    }
}

const agendarAutorizacionEvent = async () => {
    try {
        const status = await agendarAutorizacion(agendarAutorizacionForm.value)
        if (status === 200) {
            router.push({ name: 'dashboard' })
            swal("Success", "Autorizacion agendada correctamente", 'success')
        } else {
            swal('Error', 'Ha ocurrido un error en los datos', 'error')
        }
    } catch (error) {
        swal("Error", "Ha ocurrido un error", 'error')
    }
}
</script>

<style scoped>
h1,
h3 {
    color: #0072bc;
}

/*label {
    color: #f7941d;
}*/

#boton {
    background: #f7941d;

}

a {
    text-decoration: none;
    color: #0072bc;
}
</style>