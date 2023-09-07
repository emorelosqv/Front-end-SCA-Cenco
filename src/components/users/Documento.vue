<template>
    <div class="col-md-4">
        <div class="row">
            <p>{{ documento.descripcion }}</p>
            <a :href="documento.rutaDocumentoBase" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fas', 'file-pdf']" style="color: #f7941d;" beat size="2xl" />
            </a>
        </div>
    </div>
</template>

<script setup>

const { documento } = defineProps(['documento'])
</script>