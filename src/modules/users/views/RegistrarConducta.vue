<template>
    <DashboardLayout>
        <div class="container text-center mt-2 my-4">
            <div class="col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-title">
                        <h1>Registro de Conducta</h1>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="registrarConductaEvent">
                            <div class="mb-3">
                                <input type="text" class="form-control" id="inputNombresRegistrarConducta"
                                    aria-describedby="inputNombresRegistrarConducta" placeholder="Nombres"
                                    v-model="registrarConductaForm.Nombres">
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="inputApellidosRegistrarConducta"
                                    aria-describedby="inputApellidosRegistrarConducta" placeholder="Apellidos"
                                    v-model="registrarConductaForm.Apellidos">
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="inputIdentificacionRegistrarConducta"
                                    aria-describedby="inputIdentificacionRegistrarConducta" placeholder="Identificacion"
                                    v-model="registrarConductaForm.Identificacion">
                            </div>
                            <div class="mb-3">
                                <input type="date" class="form-control" id="inputFechaRegistrarConducta"
                                    aria-describedby="inputFechaRegistrarConducta" v-model="registrarConductaForm.Fecha">
                            </div>
                            <!-- <div class="mb-3">
                            <input type="file" multiple class="form-control" id="inputPasswordRegister"
                                aria-describedby="inputPasswordRegister" placeholder="">
                        </div> -->
                            <div class="mb-3">
                                <textarea class="form-control" placeholder="Descripcion" name="" id="" cols="60" rows="8"
                                    v-model="registrarConductaForm.Descripcion">

                            </textarea>
                            </div>
                            <button type="submit" class="btn text-light" id="boton">Registrar Conducta</button>
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

const registrarConductaForm = ref({
    Nombres: '',
    Apellidos: '',
    Identificacion: '',
    Fecha: '',
    Descripcion: ''
})

const router = useRouter()
const { registrarConducta } = useUser()
const swal = inject('$swal')

const registrarConductaEvent = async () => {
    try {
        const status = await registrarConducta(registrarConductaForm.value)
        if (status === 200) {
            router.push({ name: 'dashboard' })
            swal("Success", "Conducta registrada correctamente", 'success')
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