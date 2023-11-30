<template>
    <Navegacion></Navegacion>
    <div class="contenedor-general">
        <div class="container">
            <section class="vh-100">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-xl-10">
                            <div class="card" style="border-radius: 1rem;">
                                <div class="row g-0">
                                    <div class="imagenTrabajadores col-md-6 col-lg-5 d-none d-md-block p-5">
                                        <!-- <img src="@Assets/cencosud-fondo.png" alt="login form" class="img-fluid"
                                            style="border-radius: 1rem 0 0 1rem; " /> -->
                                    </div>
                                    <div class="contenedorLogin col-md-6 col-lg-7 d-flex align-items-center">

                                        <div class="card-body p-4 p-lg-5 text-black">
                                            <form @submit.prevent="onSubmit">
                                                <h3 class="fw-normal mb-3 pb-3 text-center" style="color: white;">Iniciar
                                                    Sesión
                                                </h3>
                                                <div class="form-outline mb-4" style="color: white;">
                                                    <label class="form-label" for="email">Correo electrónico</label>
                                                    <input type="email" id="email" v-model="loginForm.Correo" required
                                                        placeholder="ejemplo@ejemplo.com"
                                                        class="form-control form-control-lg" />
                                                </div>
                                                <div class="form-outline mb-4" style="color: white;">
                                                    <label class="form-label" for="form2Example27">Contraseña</label>
                                                    <input type="password" id="password"
                                                        class="form-control form-control-lg" placeholder="Contraseña"
                                                        v-model="loginForm.Password" required />
                                                </div>
                                                <div class="pt-1 mb-4">
                                                    <button class="botonLogin btn btn-lg btn-block" type="submit">Iniciar
                                                        sesión</button>
                                                </div>
                                                <p class="registerLink mb-5 pb-lg-2">¿No tienes una cuenta?
                                                    <router-link to="/register" class="registerLinkA">Registrate
                                                        aquí.</router-link>
                                                </p>
                                                <a href="" class="small" style="color: #fff;">Términos y
                                                    Condiciones.</a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <Footer></Footer>
</template>

<script setup>
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'
import Navegacion from '@Components/Nav.vue'
import Footer from '@Components/Footer.vue'

const loginForm = ref({ Correo: '', Password: '' })
const router = useRouter()
const { loginUser, authStatus } = useAuth()
const swal = inject('$swal')

const onSubmit = async () => {
    try {
        const status = await loginUser(loginForm.value)
        if (status === 200) {
            router.push({ name: 'dashboard' })
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
.registerLink,
.registerLinkA {
    color: white;
}

.registerLinkA:hover {
    color: #0072bc;
}

.botonLogin {
    background: #f7941d;
    color: white;

}

.contenedor-general {
    background-image: url("@Assets/cencosud-fondo.png");
    background-repeat: no-repeat;
    background-size: cover;
}

a {
    text-decoration: none;
    color: #0072bc;
}

.imagenTrabajadores {
    background-image: url("@Assets/cencosud-fondo.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 0.5rem;
}

.contenedorLogin {
    background: linear-gradient(to left, #0069B4 0%, #0AC3FF 100%);
    border-radius: 0.5rem;
}
</style>