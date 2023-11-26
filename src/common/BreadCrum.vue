<script setup>
import { onMounted, onUpdated, ref } from 'vue'
import useAuth from '../modules/auth/composables/useAuth'
const isLogged = ref(false)

const token = localStorage.getItem("token")


function validarToken() {
    if (token == null || token == '') {
        isLogged.value = false
    } else {
        isLogged.value = true
    }

}

onMounted(() => {
    validarToken()
})
onUpdated(() => {
    validarToken()
})
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="row">
                <div class="col-md-1">
                    <router-link to='/dashboard'>
                        <p><font-awesome-icon :icon="['fas', 'house']" style="color: #0072bc;" /></p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#banner {
    height: 115px;
    width: 100%;
    background-image: url('/encabezado.jpg');

}

a,
button {
    text-decoration: none;
    color: #0072bc;
}
</style>