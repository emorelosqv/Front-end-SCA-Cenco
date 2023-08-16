<script lang="ts" setup>

</script>
<template>
    <div class="container text-center">
        <div class="row">
            <div class="col">
                <nav class="navbar navbar-expand-lg ml-auto bg-body-tertiary" id="banner">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link text-light" href="/">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    </div>
</template>

<style scoped>
#banner {
    height: 118px;
    width: 100%;
    background-image: url('/encabezado.jpg');

}
</style>