<template>
    <div class="container text-center mt-2">
        <div class="col-md-4 offset-md-4">
            <div class="card">
                <div class="card-title">
                    <h1>Iniciar Sesión</h1>
                </div>
                <form class="card-body" @submit.prevent="onSubmit">
                    <div class="mb-3">

                        <input type="text" class="form-control" id="inputIdentificacionLogin" 
                            aria-describedby="inputIdentificacionLogin"
                            placeholder="Identificacion" 
                            v-model="userForm.Identificacion" 
                            required>
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="inputPasswordLogin"
                            aria-describedby="inputPasswordLogin" 
                            placeholder="Contraseña"
                            v-model="userForm.Password" 
                            required>
                    </div>
                    <div class="mb-3">
                        <router-link to="/register">¿No tienes una cuenta? Registrate <strong>aquí</strong></router-link>
                    </div>
                    <button type="submit" class="btn text-light" id="boton">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'

const userForm = ref({ Identificacion: '', Password: '' })
const router = useRouter()
const { loginUser, authStatus } = useAuth()
const swal = inject('$swal')

const onSubmit = async () => {
    try {
        const status = await loginUser(userForm.value)
        if (status === 'authenticated') {
            router.push({ name: 'dashboard'})
            swal("Success", "Inicio de sesion exitoso", 'success')
        } else {
            swal('Error', 'Credenciales invalidas', 'error')
        }
    } catch (error) {
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
    color:#0072bc;
}
</style>