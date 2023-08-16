<template>
    <div class="container text-center mt-4">
        <div class="col-md-4 offset-md-4">
            <div class="card">
                <div class="card-title">
                    <h1>Iniciar Sesión</h1>
                </div>
                <form class="card-body">
                    <div class="mb-3">
                        
                        <input type="email" class="form-control" id="inputEmailLogin" 
                            aria-describedby="inputEmailLogin" placeholder="Correo o username">
                    </div>
                    <div class="mb-3">
                        
                        <input type="password" class="form-control" id="inputPasswordLogin"
                            aria-describedby="inputEmailLogin" placeholder="Contraseña">
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

<script lang="ts" setup>

</script>

<style scoped>
h1 {
    color: #0072bc;
}

#boton {
    background: #f7941d;

}
a{
    text-decoration: none;
}
</style>
  