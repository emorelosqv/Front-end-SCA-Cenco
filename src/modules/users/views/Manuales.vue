<template>
    <div class="container text-center mt-4">
        <div class="row my-3">
            <div class="col">
                <router-link to="/manual-conducta">
                    <div class="card">
                        <div class="card-title">
                            <h2>Manual de conducta del visitante</h2>
                            <font-awesome-icon :icon="['fas', 'book']" 
                            style="color: #f7941d;" 
                            beat
                            size="2xl" />

                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col">
                <router-link  to="/manual-caso-emergencia">
                    <div class="card">
                        <div class="card-title">
                            <h2>Protocolo de emergencias</h2>
                            <font-awesome-icon :icon="['fas', 'book']" 
                            style="color: #f7941d;" 
                            beat
                            size="2xl" />
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
h1, h2 {
    color: #0072bc;
}

#boton {
    background: #f7941d;

}

a{
   text-decoration: none; 
}
</style>
  