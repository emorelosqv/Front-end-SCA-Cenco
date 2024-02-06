<template>
    <div class="col-md-12">
        <div class="card my-4" id="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6 text-white">
                        <p>Nombres solicitante: {{ datos.nombres }}</p>
                        <p>Apellidos solicitante: {{ datos.apellidos }}</p>
                    </div>
                    <div class="col-md-6 text-white text-bold">
                        <p><strong>Identificacion del usuario: {{ datos.identificacion }}</strong></p>
                        <p>Correo: {{ datos.correo }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['Solicitante'])
const datos = props.Solicitante

</script>

<style scoped>
a {
    text-decoration: none;
}

#card {
    background: #f7941d;
}

#numeroSolicitud {
    color: #0072bc;
}
</style>