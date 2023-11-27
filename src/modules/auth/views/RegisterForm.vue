<template>
    <Navegacion></Navegacion>
    <div class="container text-center mt-2 my-4">
        <!-- <div class="col-md-4 offset-md-4">
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
        </div> -->
        <section class="h-100">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12">
                        <div class="card card-registration card-registration-2" style="border-radius: 15px;">
                            <div class="card-body p-0">
                                <form @submit.prevent="onSubmit">
                                    <div class="row g-0">
                                        <div class="col-lg-6">
                                            <div class="p-5">
                                                <h3 class="fw-normal mb-5 headerDatosPersonales">Datos personales</h3>
                                                <div class="row">
                                                    <div class="col-md-6 mb-4 pb-2">
                                                        <label class="form-label" for="form3Examplev2">Tipo de
                                                            identificación</label>
                                                        <select class="select form-control form-control-lg"
                                                            v-model="registerForm.TipoIdentificacion" required>
                                                            <option value="CC">Cédula de ciudadanía</option>
                                                            <option value="NIT">NIT</option>
                                                            <option value="TI">Tarjeta de identidad</option>
                                                            <option value="RC">Registro civil</option>
                                                            <option value="PS">Pasaporte</option>
                                                            <option value="TE">Tarjeta de extranjería</option>
                                                            <option value="CE">Cédula de extranjería</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6 mb-4 pb-2">
                                                        <div class="form-outline">
                                                            <label class="form-label" for="form3Examplev2">Número de
                                                                identificación</label>
                                                            <input type="text" id="form3Examplev2"
                                                                class="form-control form-control-lg"
                                                                v-model="registerForm.Identificacion" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="mb-4 pb-2">
                                                        <div class="form-outline">
                                                            <label class="form-label" for="form3Examplev2">Nombre
                                                                completo</label>
                                                            <input type="text" id="form3Examplev2"
                                                                class="form-control form-control-lg"
                                                                v-model="registerForm.NombreCompleto" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline">
                                                        <label class="form-label" for="form3Examplev4">Correo
                                                            electrónico</label>
                                                        <input type="email" id="form3Examplev4"
                                                            class="form-control form-control-lg"
                                                            v-model="registerForm.Correo" required />

                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="mb-4 pb-2">
                                                        <div class="form-outline">
                                                            <label class="form-label"
                                                                for="form3Examplev5">Contraseña</label>
                                                            <input type="password" id="form3Examplev5"
                                                                class="form-control form-control-lg"
                                                                v-model="registerForm.Password" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="mb-4 pb-2">
                                                        <div class="form-outline">
                                                            <label class="form-label" for="confirmPassword">Confirmar
                                                                contraseña</label>
                                                            <input type="password" id="confirmPassword"
                                                                class="form-control form-control-lg" required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 contenedorDatosEmpresa text-white">
                                            <div class="p-5">
                                                <h3 class="fw-normal mb-5">Datos de la empresa</h3>

                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline form-white">
                                                        <label class="form-label" for="form3Examplea2">Nombre de la
                                                            empresa</label>
                                                        <input type="text" id="form3Examplea2"
                                                            class="form-control form-control-lg"
                                                            v-model="registerForm.NombreEmpresa" required />

                                                    </div>
                                                </div>
                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline form-white">
                                                        <label class="form-label" for="form3Examplea3">Nit de la
                                                            empresa</label>
                                                        <input type="text" id="form3Examplea3"
                                                            class="form-control form-control-lg"
                                                            v-model="registerForm.NitEmpresa" required />

                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="mb-4 pb-2">
                                                        <label class="form-label" for="form3Examplea4">¿Qué cargo que
                                                            desempeña en la empresa?</label>
                                                        <div class="form-outline form-white">
                                                            <input type="text" id="form3Examplea4"
                                                                class="form-control form-control-lg"
                                                                v-model="registerForm.CargoTrabajador" required />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-check d-flex justify-content-start mb-4 pb-3">
                                                    <input class="form-check-input me-3" type="checkbox" value=""
                                                        id="form2Example3c" required />
                                                    <label class="form-check-label text-white" for="form2Example3">
                                                        He leído y acepto <a href="" class="text-white"><u>Términos y
                                                                Condiciones
                                                            </u></a> del sitio.
                                                    </label>
                                                </div>
                                                <button type="submit" class="botonRegister btn btn-lg"
                                                    data-mdb-ripple-color="dark">Registrarte</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <Footer></Footer>
</template>
<script setup>
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'
import Navegacion from '@Components/Nav.vue'
import Footer from '@Components/Footer.vue'
const registerForm = ref({
    TipoIdentificacion: '',
    Identifacion: '',
    Correo: '',
    NombreCompleto: '',
    Password: '',
    NombreEmpresa: '',
    NitEmpresa: '',
    CargoTrabajador: ''
})

const router = useRouter()
const { createUser, authStatus } = useAuth()
const swal = inject('$swal')

const onSubmit = async () => {
    try {
        const confirmPassword = document.getElementById('confirmPassword').value
        if (confirmPassword != registerForm.value.Password) {
            swal('Error', 'Las contraseñas no coinciden', 'error')
            return 0
        } else {
            const status = await createUser(registerForm.value)
            if (status.status === 200) {
                router.push({ name: 'login' })
                swal("Success", "Usuario creado exitosamente", 'success')
            } else {
                swal('Error', 'Credenciales invalidas', 'error')
            }
        }
    } catch (error) {
        console.log(error)
        swal("Erros", "Ha ocurrido un error", 'error')
    }
}

</script>
<style scoped>
h1 {
    color: #0072bc;
}

.botonRegister {
    background: #f7941d;
    color: white;

}


.headerDatosPersonales {
    color: #0072bc;
}

.contenedorDatosEmpresa {

    background: linear-gradient(to left, #0069B4 0%, #0AC3FF 100%);
}


a {
    text-decoration: none;
    color: #0072bc;
}

@media (min-width: 1025px) {
    .h-custom {
        height: 100vh !important;
    }
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
    font-size: 1rem;
    line-height: 2.15;
    padding-left: .75em;
    padding-right: .75em;
}

.card-registration .select-arrow {
    top: 13px;
}

@media (min-width: 992px) {
    .card-registration-2 .bg-indigo {
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }
}

@media (max-width: 991px) {
    .card-registration-2 .bg-indigo {
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
}
</style>