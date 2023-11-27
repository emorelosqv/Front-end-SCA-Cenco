<template>
    <DashboardLayout>
        <div class="container text-center mt-2 my-4">
            <div class="col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-title">
                        <h1>Registro de Incidente</h1>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="registrarIncidenteEvent">
                            <div class="mb-3">
                                <input type="text" class="form-control" id="inputNombresRegistrarIncidencia"
                                    aria-describedby="inputNombresRegistrarIncidencia" placeholder="Nombres"
                                    v-model="registrarIncidenteForm.Nombres">

                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="inputApellidosRegistrarIncidencia"
                                    aria-describedby="inputApellidosRegistrarIncidencia" placeholder="Apellidos"
                                    v-model="registrarIncidenteForm.Apellidos">

                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="inputIdentificacionRegistrarIncidencia"
                                    aria-describedby="inputIdentificacionRegistrarIncidencia" placeholder="Identificacion"
                                    v-model="registrarIncidenteForm.Identificacion">

                            </div>
                            <div class="mb-3">
                                <input type="date" class="form-control" id="inputFechaRegistrarIncidencia"
                                    aria-describedby="inputFechaRegistrarIncidencia" placeholder=""
                                    v-model="registrarIncidenteForm.Fecha">
                            </div>
                            <!-- <div class="mb-3">
                            <input type="file" multiple class="form-control" id="inputPasswordRegister"
                                aria-describedby="inputPasswordRegister" placeholder="">
                        </div> -->
                            <div class="mb-3">
                                <textarea class="form-control" placeholder="Descripcion"
                                    name="descripcionRegistrarIncidencia" id="descripcionRegistrarIncidencia" cols="60"
                                    rows="8" v-model="registrarIncidenteForm.Descripcion">
                            </textarea>
                            </div>
                            <button type="submit" class="btn text-light" id="boton">Registrar Incidente</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>

<script setup>
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'
import useUser from '../composables/useUser'
import DashboardLayout from '@Layouts/DashboardLayout.vue'

const registrarIncidenteForm = ref({
    Nombres: '',
    Apellidos: '',
    Identificacion: '',
    Fecha: '',
    Descripcion: ''
})

const router = useRouter()
const { registrarIncidente } = useUser()
const swal = inject('$swal')

const registrarIncidenteEvent = async () => {
    try {
        const status = await registrarIncidente(registrarIncidenteForm.value)

        if (status === 200) {
            router.push({ name: 'dashboard' })
            swal("Success", "Incidente registrado correctamente", 'success')
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