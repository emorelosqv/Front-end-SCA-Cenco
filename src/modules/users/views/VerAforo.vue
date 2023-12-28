<template>
    <DashboardLayout>
        <div class="container">
            <h1 class="text-center">Aforo</h1>
            <p> Cantidad de trabajadores externos presentes actualmente: {{  aforo.CantidadSolicitudesEnCurso }}</p> 
        </div>
    </DashboardLayout>
</template>

<script setup>
import  {onMounted } from 'vue'
import DashboardLayout from '@Layouts/DashboardLayout.vue'
import useUser from '../composables/useUser'


const { useObtenerAforo, obtenerAforo,
} = useUser()

onMounted(() => {
    obtenerAforo()
})

const aforo = useObtenerAforo
console.log(aforo)

</script>