<template>
    <div class="col-md-3">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <p class="text-center" style="color: #f7941d;"><strong>{{ documento.descripcion }}</strong></p>
                </div>
                <div class="row text-center">
                    <a :href="documento.rutaDocumentoBase" target="_blank" rel="noopener noreferrer">
                        <font-awesome-icon :icon="['fas', 'file-pdf']" style="color: #f7941d;" beat size="2xl" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { documento } = defineProps(['documento'])
</script>