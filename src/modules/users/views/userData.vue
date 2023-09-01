<script setup>
 import AdministradorData from '@/components/users/AdministradorData.vue'
 import AuditorData from '@/components/users/AuditorData.vue'
 import ProveedorData from '@/components/users/ProveedorData.vue'

const rol = Number(localStorage.getItem("rol"))
let administrador = false
let auditor = false
let proveedor = false
switch (rol) {
    case 1:
        administrador = true
        break;
    case 2:
        auditor = true
        break;
    case 3:
        proveedor = true
        break;
    default:
        console.log("Error! No hay un rol definido")
        break;
}
</script>

<template>
    <AdministradorData v-if="administrador"/>
    <AuditorData v-if="auditor"/>
    <ProveedorData v-if="proveedor"/>
</template>

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
  