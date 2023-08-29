<template>
    <div class="container text-center mt-4">
        <div class="row my-3">
            <div class="col">
                <router-link to="/auditar-incidente">
                    <div class="card">
                        <div class="card-title">
                            <h2>Auditar Incidente</h2>
                            <font-awesome-icon :icon="['fas', 'magnifying-glass']"
                            beat
                            style="color: #f7941d;"
                            size="2xl"
                             />

                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col">
                <router-link  to="/auditar-conducta">
                    <div class="card">
                        <div class="card-title">
                            <h2>Auditar Conducta</h2>
                            <font-awesome-icon :icon="['fas', 'magnifying-glass']"
                            beat
                            style="color: #f7941d;"
                            size="2xl"
                             />
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
  