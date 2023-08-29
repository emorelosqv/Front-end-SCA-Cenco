<template>
    <div class="container text-center mt-2 my-4">
        <div class="col-md-4 offset-md-4">
            <div class="card">
                <div class="card-title">
                    <h1>Registrarte</h1>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="inputNombresRegistrer"
                                aria-describedby="inputNombresRegistrer" placeholder="Nombres">

                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="inputApellidosRegister"
                                aria-describedby="inputApellidosRegister" placeholder="Apellidos">

                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="inputApellidosRegister"
                                aria-describedby="inputIdentificacionRegister" placeholder="Identificacion">

                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="inputEmailRegister"
                                aria-describedby="inputEmailRegister" placeholder="Correo">

                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="rolSelect">
                                <option selected>Rol</option>
                                <option value="2">Proveedor</option>
                                <option value="3">Usuario</option>
                                <option value="4">Auditor</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="inputPasswordRegister"
                                aria-describedby="inputPasswordRegister" placeholder="Contraseña">
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="inputValidPasswordRegister"
                                aria-describedby="inputValidPasswordRegister" placeholder="Validar contraseña">
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

<script lang="ts" setup>

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