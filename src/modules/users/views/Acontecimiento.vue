<template>
    <DashboardLayout>
        <div class="container text-center mt-4">
            <div class="row my-3">
                <div class="col">
                    <router-link to="/registrar-incidente">
                        <div class="card">
                            <div class="card-title">
                                <h2>Registrar Incidente</h2>
                                <font-awesome-icon :icon="['fas', 'box-archive']" style="color: #f7941d;" beat size="2xl" />

                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col">
                    <router-link to="/registrar-conducta">
                        <div class="card">
                            <div class="card-title">
                                <h2>Registrar Conducta</h2>
                                <font-awesome-icon :icon="['fas', 'box-archive']" style="color: #f7941d;" beat size="2xl" />
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@Layouts/DashboardLayout.vue'

</script>

<style scoped>
h1,
h2 {
    color: #0072bc;
}

#boton {
    background: #f7941d;

}

a {
    text-decoration: none;
}
</style>
  