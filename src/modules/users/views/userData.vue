<template>
    <div class="container text-center mt-4">
        <div class="row">
            <div class="col">
                <router-link to="/subir-parafiscales">
                    <div class="card">
                        <div class="card-title">
                            <h1>Subir parafiscales</h1>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col">
                <router-link  to="/register">
                    <div class="card">
                        <div class="card-title">
                            <h1>Ver reportes</h1>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <router-link to="/register">
                    <div class="card">
                        <div class="card-title">
                            <h1>Test</h1>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col">
                <router-link to="/register">
                    <div class="card">
                        <div class="card-title">
                            <h1>Prueba</h1>
                        </div>
                    </div>
                </router-link>
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
  