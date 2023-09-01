<template>
    <div class="container text-center mt-2 my-4">
        <div class="col-md-4 offset-md-4">
            <div class="card">
                <div class="card-title">
                    <h1>Registrarte</h1>
                </div>
                <div class="card-body">
                    <form @submit.prevent="onSubmit">
                        <div class="mb-3">
                            <input type="text" class="form-control" id="inputNombreRegistrer"
                                aria-describedby="inputNombreRegistrer" 
                                required placeholder="Nombre completo"
                                v-model="userForm.NombreCompleto">

                        </div>
                        <!-- <div class="mb-3">
                            <input type="text" class="form-control" id="inputApellidosRegister"
                                aria-describedby="inputApellidosRegister" required placeholder="Apellidos">

                        </div> -->
                        <div class="mb-3">
                            <input type="text" class="form-control" id="inputApellidosRegister"
                                aria-describedby="inputIdentificacionRegister" 
                                required placeholder="Identificacion"
                                v-model="userForm.Identificacion">

                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="inputEmailRegister"
                                aria-describedby="inputEmailRegister" 
                                required placeholder="Correo"
                                v-model="userForm.Correo">

                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="inputPasswordRegister"
                                aria-describedby="inputPasswordRegister" 
                                required placeholder="Contraseña"
                                v-model="userForm.Password">
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="inputValidPasswordRegister"
                                aria-describedby="inputValidPasswordRegister" 
                                required placeholder="Validar contraseña"
                                v-model="userForm.ValidarPassword">
                        </div>
                        <div class="mb-3">
                            <router-link to="/">¿Ya tienes una cuenta? Inicia sesión <strong>aquí</strong></router-link>
                        </div>
                        <button type="submit" class="btn text-light" id="boton">Registrarte</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'

const userForm = ref({
    NombreCompleto: '',
    Identificacion: '',
    Correo: '',
    Password: '',
    ValidarPassword: ''
})

const router = useRouter()
const { createUser, authStatus } = useAuth()
const swal = inject('$swal')

const onSubmit = async () => {
    try {
        if (userForm.value.Password != userForm.value.ValidarPassword) {
            swal('Error', 'Las contraseñas deben coincidir', 'error')
            return 0
        } else {
            const status = await createUser(userForm.value)
            if (status.status === 200) {
                //TODO message success
                router.push({ name: 'login' })
                swal("Success", "Usuario creado exitosamente", 'success')
            } else {
                //TODO: message error
                swal('Error', 'Credenciales invalidas', 'error')
            }
        }
    } catch (error) {
        //console.log(error)
        swal("Erros", "Ha ocurrido un error", 'error')
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