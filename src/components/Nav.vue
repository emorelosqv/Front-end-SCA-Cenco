<template>
    <nav class="navGeneral navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"> <img src="@Assets/logo-cenco.svg" alt="logo login form"
                    class="imagenLogin img-fluid" style="border-radius: 1rem 0 0 1rem;" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link" href="#/" style="color: white;">Iniciar Sesión</a>
                    <a class="nav-link" href="#/register" style="color: white;">Registrarte</a>
                    <a class="nav-link" href="#" style="color: white;">Abc</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
* {
    margin: 0;
}

.navGeneral {
    width: 100%;
    background: linear-gradient(to left, #0069B4 0%, #0AC3FF 100%);
}
</style>