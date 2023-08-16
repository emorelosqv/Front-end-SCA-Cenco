<template>
    <div class="container text-center mt-5">
        <div class="col-md-4 offset-md-4">
            <div class="card">
                <div class="card-title">
                    <h1>Subir Parafiscales</h1>
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
                            <input type="email" class="form-control" id="inputEmailRegister"
                                aria-describedby="inputEmailRegister" placeholder="Correo">

                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="inputPasswordRegister"
                                aria-describedby="inputPasswordRegister" placeholder="Contraseña">
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="inputValidPasswordRegister"
                                aria-describedby="inputValidPasswordRegister" placeholder="Validar contraseña">
                        </div>
                        <button type="submit" class="btn text-light" id="boton">Subir información</button>
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
</style>