<template>
    <div class="row contenedorLayoutDashboard">
        <div class="col-md-3">
            <menu-dashboard></menu-dashboard>
        </div>
        <div class="col-md-9">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import MenuDashboard from '@Components/MenuDashboard.vue'
</script>

<style>
.contenedorLayoutDashboard {
    width: 100%;
}
</style>