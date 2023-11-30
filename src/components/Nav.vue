<template>
    <nav class="navGeneral navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"> <img src="@Assets/logo-cenco.svg" alt="logo login form"
                    class="imagenLogin img-fluid" style="border-radius: 1rem 0 0 1rem;" /></a>
            <div class="d-flex" style="height: 50px; margin: 10px; color: #fff;">
                <div class="vr"></div>
            </div>
            <img src="@Assets/metro.png" alt="logo login form" class="img-fluid" />
            <img src="@Assets/jumbo.png" alt="logo login form" class="img-fluid" />
            <img src="@Assets/spid.png" alt="logo login form" class="img-fluid" />

            <img src="@Assets/easy.png" alt="logo login form" class="img-fluid" />
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto mb-2 mb-lg-0">
                <a class="nav-link" href="#/" style="color: white;">Iniciar Sesión</a>
                <a class="nav-link" href="#/register" style="color: white;">Registrarte</a>
                <a class="nav-link" href="#" style="color: white;">Abc</a>
            </div>
        </div>
    </nav>
</template>

<style scoped>
* {
    margin: 0;
}

.navGeneral {

    background: linear-gradient(to left, #0069B4 0%, #0AC3FF 100%);
}

.container-fluid {
    justify-content: left;
    max-width: 70%;
}
</style>