<template>
    <div class="container text-center mt-2 my-4">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-title">
                    <h1>Agendar Entrega</h1>
                </div>
                <form class="card-body" @submit.prevent="agendarEntregaEvent">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="inputNombresAgendarEntrega"
                            aria-describedby="inputNombresAgendarEntrega" required minlength="10" 
                            placeholder="Nombres"
                            v-model="agendarEntregaForm.Nombres" />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="inputApellidosAgendarEntrega"
                            aria-describedby="inputApellidosAgendarEntrega" required placeholder="Apellidos"
                            v-model="agendarEntregaForm.Apellidos" />

                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control" id="inputIdentificacionAgendarEntrega"
                            aria-describedby="inputIdentificacionAgendarEntrega" required placeholder="Identificacion"
                            v-model="agendarEntregaForm.Identificacion" />

                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="inputEmailAgendarEntrega"
                            aria-describedby="inputEmailAgendarEntrega" required placeholder="Correo"
                            v-model="agendarEntregaForm.Correo" />

                    </div>
                    <div class="mb-3">
                        <input type="date" class="form-control" id="inputFechaAgendarEntrega"
                            aria-describedby="inputFechaAgendarEntrega" required
                            v-model="agendarEntregaForm.FechaEntrega" />
                    </div>
                    <div class="mb-3">
                        <label for="inputArchivoArlAgendarEntrega">Documento de Arl</label>
                        <input type="file" class="form-control" id="inputArchivoArlAgendarEntrega"
                            aria-describedby="inputArchivoArlAgendarEntrega" required 
                            @change="changeFileArl"/>
                    </div>
                    <div class="mb-3">
                        <label for="inputArchivoIdentificacionAgendarEntrega">Documento de Identificacion</label>
                        <input type="file" class="form-control" 
                            id="inputArchivoIdentificacionAgendarEntrega"
                            aria-describedby="inputArchivoIdentificacionAgendarEntrega" 
                            required @change="changeFileIdentificacion" />
                    </div>
                    <div class="mb-3">
                        <label for="inputArchivoOtroAgendarEntrega">Otro documento</label>
                        <input type="file" class="form-control" id="inputArchivoOtroAgendarEntrega"
                            aria-describedby="inputArchivoOtroAgendarEntrega" 
                            required @change="changeFileOtro" />
                    </div>
                    <div class="mb-3">
                        <input list="listaDepartamentos" class="form-control" id="inputDepartamentoAgendarEntrega"
                            aria-describedby="inputDepartamentoAgendarEntrega" required
                            v-model="agendarEntregaForm.Departamento" />
                        <datalist id="listaDepartamentos">
                            <option value="Departamento 1"></option>
                            <option value="Departamento 2"></option>
                            <option value="Departamento 3"></option>
                            <option value="Departamento 4"></option>
                            <option value="Departamento 5"></option>
                        </datalist>
                    </div>
                    <div class="mb-3">
                        <input list="listaMunicipios" class="form-control" id="inputMunicipioAgendarEntrega"
                            aria-describedby="inputMunicipioAgendarEntrega" required
                            v-model="agendarEntregaForm.Municipio"/>
                        <datalist id="listaMunicipios">
                            <option value="Municipio 1"></option>
                            <option value="Municipio 2"></option>
                            <option value="Municipio 3"></option>
                            <option value="Municipio 4"></option>
                            <option value="Municipio 5"></option>
                        </datalist>
                    </div>
                    <div class="mb-3">
                        <input list="listaTiendas" class="form-control" id="inputTiendaAgendarEntrega"
                            aria-describedby="inputTiendaAgendarEntrega" required 
                            v-model="agendarEntregaForm.Tienda"/>
                        <datalist id="listaTiendas">
                            <option value="Tienda 1"></option>
                            <option value="Tienda 2"></option>
                            <option value="Tienda 3"></option>
                            <option value="Tienda 4"></option>
                            <option value="Tienda 5"></option>
                        </datalist>
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control" placeholder="Descripcion" name="" id="DescripcionAgendarEntrega"
                            cols="60" rows="8" v-model="agendarEntregaForm.Descripcion"></textarea>
                    </div>
                    <button type="submit" class="btn text-light" id="boton">Agendar Entrega</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'
import useUser from '../composables/useUser'
const agendarEntregaForm = ref({
    Nombres: '',
    Apellidos: '',
    Identificacion: '',
    Correo: '',
    FechaEntrega: '',
    ArchivoArl: null,
    ArchivoIdentificacion: null,
    ArchivoOtro: null,
    Departamento: '',
    Municipio: '',
    Tienda: '',
    Descripcion: ''
})
const router = useRouter()
const { agendarEntrega } = useUser()
const swal = inject('$swal')


function changeFileArl() {
    const inputArchivoArl = document.getElementById('inputArchivoArlAgendarEntrega');
    if (inputArchivoArl.files && inputArchivoArl.files[0]) {
        agendarEntregaForm.value.ArchivoArl = inputArchivoArl.files[0];
    }
}


function changeFileIdentificacion() {
    const inputArchivoId = document.getElementById('inputArchivoIdentificacionAgendarEntrega');
    if (inputArchivoId.files && inputArchivoId.files[0]) {
        agendarEntregaForm.value.ArchivoIdentificacion = inputArchivoId.files[0];
    }
}



function changeFileOtro() {
    const inputArchivo = document.getElementById('inputArchivoOtroAgendarEntrega');
    if (inputArchivo.files && inputArchivo.files[0]) {
        agendarEntregaForm.value.ArchivoOtro = inputArchivo.files[0];
    }
}


const agendarEntregaEvent = async () => {
    try {
        const status = await agendarEntrega(agendarEntregaForm.value)
        if (status === 200) {
            router.push({ name: 'dashboard' })
            swal("Success", "Entrega agendada correctamente", 'success')
        } else {
            swal('Error', 'Ha ocurrido un error en los datos', 'error')
        }
    } catch (error) {
        swal("Error", "Ha ocurrido un error", 'error')
    }
}
</script>

<style scoped>
h1 {
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