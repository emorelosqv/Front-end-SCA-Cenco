<template>
    <div class='container dashboard'>
        <div class="dashboard-nav">
            <header>

                <a class="navbar-brand" href="#"> <img src="@Assets/logo-cenco.svg" alt="logo" class="imagenLogin img-fluid"
                        style="border-radius: 1rem 0 0 1rem;" /></a>

            </header>
            <nav class="dashboard-nav-list">
                <h3 class="username"><span>{{ nombreUsuario }}</span></h3>

                <router-link to="/dashboard" class="dashboard-nav-item">
                    <font-awesome-icon :icon="['fas', 'house']" size="xl" /> Inicio
                </router-link>
                <div v-if="administrador" class='dashboard-nav-dropdown'>
                    <a href="javascript:void(0);"
                        class="dashboard-nav-item dashboard-nav-dropdown-toggle"><font-awesome-icon
                            :icon="['fas', 'clipboard-check']" size="xl" />
                        Gestionar Autorizaciones
                    </a>
                    <div class='dashboard-nav-dropdown-menu'>
                        <router-link to="/validar-autorizaciones" class="dashboard-nav-dropdown-item">Validar
                            autorizaciones</router-link>
                    </div>
                </div>
                <div v-if="administrador || proveedor" class='dashboard-nav-dropdown'>
                    <a href="javascript:void(0);"
                        class="dashboard-nav-item dashboard-nav-dropdown-toggle"><font-awesome-icon
                            :icon="['fas', 'calendar-days']" size="xl" />
                        Autorizaciones de Ingreso
                    </a>
                    <div class='dashboard-nav-dropdown-menu'>
                        <router-link to="/agendar-autorizacion" class="dashboard-nav-dropdown-item">Nueva Aurizacion de
                            Ingreso</router-link>
                        <a href="#" class="dashboard-nav-dropdown-item">Mis autorizaciones</a>
                    </div>
                </div>
                <div v-if="administrador || proveedor" class='dashboard-nav-dropdown'>
                    <a href="javascript:void(0);"
                        class="dashboard-nav-item dashboard-nav-dropdown-toggle"><font-awesome-icon :icon="['fas', 'book']"
                            size="xl" />
                        Manuales
                    </a>
                    <div class='dashboard-nav-dropdown-menu'>
                        <router-link to="/manual-caso-emergencia" class="dashboard-nav-dropdown-item">En caso de
                            emergencia</router-link>
                        <router-link to="/manual-conducta" class="dashboard-nav-dropdown-item">Manual de
                            comportamiento</router-link>
                    </div>
                </div>
                <div v-if="administrador || auditor" class='dashboard-nav-dropdown'>
                    <a href="javascript:void(0);"
                        class="dashboard-nav-item dashboard-nav-dropdown-toggle"><font-awesome-icon
                            :icon="['fas', 'chart-pie']" size="xl" />
                        Indicadores
                    </a>
                    <div class='dashboard-nav-dropdown-menu'>
                        <router-link to="/ver-aforo" class="dashboard-nav-dropdown-item">Aforo</router-link>
                        <a href="#" class="dashboard-nav-dropdown-item">Estadisticas demograficas</a>
                    </div>
                </div>
                <div v-if="administrador || auditor" class='dashboard-nav-dropdown'>
                    <a href="javascript:void(0);" class="dashboard-nav-item dashboard-nav-dropdown-toggle">
                        <font-awesome-icon :icon="['fas', 'person-falling']" size="xl" /> Acontecimientos
                    </a>
                    <div class='dashboard-nav-dropdown-menu'>
                        <router-link to="/registrar-incidente" class="dashboard-nav-dropdown-item">Registrar
                            Incidente</router-link>
                        <router-link to="/registrar-conducta" class="dashboard-nav-dropdown-item">Registrar
                            Antecedente</router-link>
                        <router-link to="/mostrar-incidentes" class="dashboard-nav-dropdown-item">Ver
                            Incidentes</router-link>
                        <router-link to="/mostrar-conductas" class="dashboard-nav-dropdown-item">Ver
                            Antecendentes</router-link>
                    </div>
                </div>
                <div v-if="administrador" class='dashboard-nav-dropdown'>
                    <a href="javascript:void(0);" class="dashboard-nav-item dashboard-nav-dropdown-toggle">
                        <font-awesome-icon :icon="['fas', 'users']" size="xl" />Gestión de usuarios
                    </a>
                    <div class='dashboard-nav-dropdown-menu'>
                        <a href="#" class="dashboard-nav-dropdown-item">Crear usuario</a>
                        <a href="#" class="dashboard-nav-dropdown-item">Editar usuario</a>
                    </div>
                </div>
                <router-link to="#" class="dashboard-nav-item"><font-awesome-icon :icon="['fas', 'user']" size="xl" />Perfil
                </router-link>
                <div class="text-center">
                    <button class="dashboard-nav-item btn" @click="logoutAndClearCache" type="button">
                        <font-awesome-icon :icon="['fas', 'right-from-bracket']" size="xl" /> Cerrar sesión
                    </button>
                </div>
            </nav>
        </div>
    </div>
</template>

<script setup>
import useAuth from '@Modules/auth/composables/useAuth'
const mobileScreen = window.matchMedia("(max-width: 990px )");
const { logout } = useAuth()
const nombreUsuario = localStorage.getItem('nombreCompleto')
$(document).ready(function () {
    $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });
});
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

const logoutAndClearCache = () => {
    logout()
}
</script>

<style scoped>
*,
*::before,
*::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

nav {
    display: block;
}


a {
    color: #3f84fc;
    text-decoration: none;
    background-color: transparent;
}

a:hover {
    color: #0458eb;
    text-decoration: underline;
}

.dashboard {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 100vh;
}

.dashboard-content {
    -webkit-box-flex: 2;
    -webkit-flex-grow: 2;
    -ms-flex-positive: 2;
    flex-grow: 2;
    padding: 25px;
}

.dashboard-nav {
    min-width: 350px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: auto;
    background: linear-gradient(to left, #0069B4 0%, #0AC3FF 100%);
}

.dashboard-compact .dashboard-nav {
    display: none;
}

.dashboard-nav header {
    min-height: 84px;
    padding: 8px 27px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.dashboard-nav header .menu-toggle {
    display: none;
    margin-right: auto;
}

.username {
    text-align: center;
    color: white;
}

.dashboard-nav a {
    color: #515151;
}

.dashboard-nav a:hover {
    text-decoration: none;
}

.dashboard-nav {
    background: linear-gradient(to left, #0069B4 0%, #0AC3FF 100%);
}

.dashboard-nav a,
button {
    color: #fff;
}

.dashboard-nav-list {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.dashboard-nav-item {
    min-height: 56px;
    padding: 8px 50px 8px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    letter-spacing: 0.02em;
    transition: ease-out 0.9s;
}

.dashboard-nav-item font-awesome-icon {
    margin-left: -40px;
}

.dashboard-nav-item:hover {
    background: rgba(255, 255, 255, 0.04);
}

.active {
    background: rgba(0, 0, 0, 0.1);
}

.dashboard-nav-dropdown {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.dashboard-nav-dropdown.show {
    background: rgba(255, 255, 255, 0.04);
}

.dashboard-nav-dropdown.show>.dashboard-nav-dropdown-toggle {
    font-weight: bold;
}

.dashboard-nav-dropdown.show>.dashboard-nav-dropdown-toggle:after {
    -webkit-transform: none;
    -o-transform: none;
    transform: none;
}

.dashboard-nav-dropdown.show>.dashboard-nav-dropdown-menu {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.dashboard-nav-dropdown-toggle:after {
    content: "";
    margin-left: auto;
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid rgba(81, 81, 81, 0.8);
    -webkit-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
}

.dashboard-nav .dashboard-nav-dropdown-toggle:after {
    border-top-color: rgba(255, 255, 255, 0.72);
}

.dashboard-nav-dropdown-menu {
    display: none;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.dashboard-nav-dropdown-item {
    min-height: 40px;
    padding: 8px 20px 8px 70px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    transition: ease-out 0.5s;
}

.dashboard-nav-dropdown-item:hover {
    background: rgba(255, 255, 255, 0.04);
}

.menu-toggle {
    position: relative;
    width: 42px;
    height: 42px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #443ea2;
}

.menu-toggle:hover,
.menu-toggle:active,
.menu-toggle:focus {
    text-decoration: none;
    color: #875de5;
}

.menu-toggle i {
    font-size: 20px;
}

.dashboard-toolbar {
    min-height: 84px;
    background-color: #dfdfdf;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 8px 27px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
}

.nav-item-divider {
    height: 1px;
    margin: 1rem 0;
    overflow: hidden;
    background-color: rgba(236, 238, 239, 0.3);
}

@media (min-width: 992px) {
    .dashboard-app {
        margin-left: 238px;
    }

    .dashboard-compact .dashboard-app {
        margin-left: 0;
    }
}


@media (max-width: 768px) {
    .dashboard-content {
        padding: 15px 0px;
    }
}

@media (max-width: 992px) {
    .dashboard-nav {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1070;
    }

    .dashboard-nav {
        background: linear-gradient(to left, #0069B4 0%, #0AC3FF 100%);
    }

    .dashboard-nav.mobile-show {
        display: block;
    }
}

@media (max-width: 992px) {
    .dashboard-nav header .menu-toggle {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }
}

@media (min-width: 992px) {
    .dashboard-toolbar {
        left: 238px;
    }

    .dashboard-nav {
        background: linear-gradient(to left, #0069B4 0%, #0AC3FF 100%);
    }

    .dashboard-compact .dashboard-toolbar {
        left: 0;
    }
}

::-webkit-scrollbar {
    widows: 5px;
}
</style>