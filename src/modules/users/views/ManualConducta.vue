<template>
    <DashboardLayout>
        <div class="container text-center mt-4">
            <div class="row my-3">
                <div class="col-md-7">
                    <iframe width="100%" height="600px" src="https://www.youtube.com/embed/AtuhaYj3NzA?si=0OAoap2LE8INQhgN"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
                <div class="col-md-5">
                    <embed src="Teletrabajo.pdf" type="application/pdf" width="100%" height="600px" />
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
  