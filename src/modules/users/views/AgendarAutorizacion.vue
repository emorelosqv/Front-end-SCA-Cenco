<template>
    <div class="container text-center mt-2 my-4">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-title">
                    <h3>Agendar Autorización de Ingreso</h3>
                </div>
                <form class="card-body" @submit.prevent="agendarAutorizacionEvent">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="inputNombresAgendarAutorizacion"
                            aria-describedby="inputNombresAgendar" required minlength="10" 
                            placeholder="Nombres"
                            v-model="agendarAutorizacionForm.Nombres" />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="inputApellidosAgendarAutorizacion"
                            aria-describedby="inputApellidosAgendarAutorizacion" required placeholder="Apellidos"
                            v-model="agendarAutorizacionForm.Apellidos" />

                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control" id="inputIdentificacionAgendarAutorizacion"
                            aria-describedby="inputIdentificacionAgendarAutorizacion" required placeholder="Identificacion"
                            v-model="agendarAutorizacionForm.Identificacion" />

                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="inputEmailAgendarAutorizacion"
                            aria-describedby="inputEmailAgendarAutorizacion" required placeholder="Correo"
                            v-model="agendarAutorizacionForm.Correo" />

                    </div>
                    <div class="mb-3">
                        <label for="inputFechaAgendarAutorizacion">Fecha de ingreso:</label>
                        <input type="date" class="form-control" id="inputFechaAgendarAutorizacion"
                            aria-describedby="inputFechaAgendarAutorizacion" required
                            v-model="agendarAutorizacionForm.FechaAutorizacion" />
                    </div>
                    <div class="mb-3">
                        <label for="inputHoraEntradaAgendarAutorizacion">Hora de entrada:</label>
                        <input type="time" class="form-control" id="inputHoraEntradaAgendarAutorizacion"
                            aria-describedby="inputHoraEntradaAgendarAutorizacion" required
                            v-model="agendarAutorizacionForm.HoraEntradaAutorizacion" />
                    </div>
                    <div class="mb-3">
                        <label for="inputHoraSalidaAgendarAutorizacion">Hora de salida:</label>
                        <input type="time" class="form-control" id="inputHoraSalidaAgendarAutorizacion"
                            aria-describedby="inputHoraSalidAgendarAutorizacion" required
                            v-model="agendarAutorizacionForm.HoraSalidaAutorizacion" />
                    </div>
                    <div class="mb-3">
                        <label for="inputDocumentoArlAgendarAutorizacion">Documento de Arl</label>
                        <input type="file" class="form-control" id="inputDocumentoArlAgendarAutorizacion"
                            aria-describedby="inputDocumentoArlAgendarAutorizacion" required 
                            @change="changeFileArl"/>
                    </div>
                    <div class="mb-3">
                        <label for="inputDocumentoIdentificacionAgendarAutorizacion">Documento de Identificacion</label>
                        <input type="file" class="form-control" 
                            id="inputDocumentoIdentificacionAgendarAutorizacion"
                            aria-describedby="inputIdentificacionAgendarAutorizacion" 
                            required @change="changeFileIdentificacion" />
                    </div>
                    <div class="mb-3">
                        <label for="inputDocumentoEpsAgendarAutorizacion">Documento Eps</label>
                        <input type="file" class="form-control" id="inputDocumentoEpsAgendarAutorizacion"
                            aria-describedby="inputDocumentoEpsAgendarAutorizacion" 
                            required @change="changeFileEps" />
                    </div>
                    <div class="mb-3">
                        <label for="inputDepartamentoAgendarAutorizacion">Digite el departamento</label>
                        <input list="listaDepartamentos" class="form-control" id="inputDepartamentoAgendarAutorizacion"
                            aria-describedby="inputDepartamentoAgendarAutorizacion" required
                            v-model="agendarAutorizacionForm.Departamento" />
                        <datalist id="listaDepartamentos">
                            <option value="Departamento 1"></option>
                            <option value="Departamento 2"></option>
                            <option value="Departamento 3"></option>
                            <option value="Departamento 4"></option>
                            <option value="Departamento 5"></option>
                        </datalist>
                    </div>
                    <div class="mb-3">
                        <label for="inputMunicipioAgendarAutorizacion">Digite el municipio</label>
                        <input list="listaMunicipios" class="form-control" id="inputMunicipioAgendarAutorizacion"
                            aria-describedby="inputMunicipioAgendarAutorizacion" required
                            v-model="agendarAutorizacionForm.Municipio"/>
                        <datalist id="listaMunicipios">
                            <option value="Municipio 1"></option>
                            <option value="Municipio 2"></option>
                            <option value="Municipio 3"></option>
                            <option value="Municipio 4"></option>
                            <option value="Municipio 5"></option>
                        </datalist>
                    </div>
                    <div class="mb-3">
                        <label for="inputTiendaAgendarAutorizacion">Digite la tienda</label>
                        <input list="listaTiendas" class="form-control" id="inputTiendaAgendarAutorizacion"
                            aria-describedby="inputTiendaAgendarAutorizacion" required 
                            v-model="agendarAutorizacionForm.Tienda"/>
                        <datalist id="listaTiendas">
                            <option value="Tienda 1"></option>
                            <option value="Tienda 2"></option>
                            <option value="Tienda 3"></option>
                            <option value="Tienda 4"></option>
                            <option value="Tienda 5"></option>
                        </datalist>
                    </div>
                    <div class="mb-3">
                        <label for="inputAreaAgendarAutorizacion">Seleccione el area solicitante</label>
                        <input list="listaAreas" class="form-control" id="inputAreaAgendarAutorizacion"
                            aria-describedby="inputAreaAgendarAutorizacion" required 
                            v-model="agendarAutorizacionForm.Area"/>
                        <datalist id="listaAreas">
                            <option value="Area 1"></option>
                            <option value="Area 2"></option>
                            <option value="Area 3"></option>
                            <option value="Area 4"></option>
                            <option value="Area 5"></option>
                        </datalist>
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control" placeholder="Descripcion" name="" id="DescripcionAgendarAutorizacion"
                            cols="60" rows="8" v-model="agendarAutorizacionForm.Descripcion"></textarea>
                    </div>
                    <button type="submit" class="btn text-light" id="boton">Agendar Autorización</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'
import useUser from '../composables/useUser'
const agendarAutorizacionForm = ref({
    Nombres: '',
    Apellidos: '',
    Identificacion: '',
    Correo: '',
    FechaAutorizacion: '',
    HoraEntradaAutorizacion: '',
    HoraSalidaAutorizacion: '',
    DocumentoArl: null,
    DocumentoIdentificacion: null,
    DocumentoEps: null,
    Departamento: '',
    Municipio: '',
    Tienda: '',
    Area: '',
    Descripcion: ''
})

const router = useRouter()
const { agendarAutorizacion } = useUser()
const swal = inject('$swal')

function changeFileArl() {
    const inputDocumentoArl = document.getElementById('inputDocumentoArlAgendarAutorizacion');
    if (inputDocumentoArl.files && inputDocumentoArl.files[0]) {
        agendarAutorizacionForm.value.DocumentoArl = inputDocumentoArl.files[0];
    }
}

function changeFileIdentificacion() {
    const inputDocumentoId = document.getElementById('inputDocumentoIdentificacionAgendarAutorizacion');
    if (inputDocumentoId.files && inputDocumentoId.files[0]) {
        agendarAutorizacionForm.value.DocumentoIdentificacion = inputDocumentoId.files[0];
    }
}

function changeFileEps() {
    const inputDocumento = document.getElementById('inputDocumentoEpsAgendarAutorizacion');
    if (inputDocumento.files && inputDocumento.files[0]) {
        agendarAutorizacionForm.value.DocumentoEps = inputDocumento.files[0];
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
h1, h3 {
    color: #0072bc;
}

#boton {
    background: #f7941d;

}

a {
    text-decoration: none;
    color: #0072bc;
}
</style>