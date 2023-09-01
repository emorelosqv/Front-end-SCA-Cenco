<template>
    <div class="container text-center mt-4">
        <div class="row">
            <div class="col">
                <router-link to="/agendar-entrega">
                    <div class="card">
                        <div class="card-title">
                            <h2>Agendar entrega</h2>
                            <font-awesome-icon :icon="['fas', 'calendar-days']" style="color: #f7941d;" beat size="2xl" />
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col" colspan="1">
                <router-link to="/manuales">
                    <div class="card">
                        <div class="card-title">
                            <h2>Manuales</h2>
                            <font-awesome-icon :icon="['fas', 'book']" beat style="color: #f7941d;" size="2xl" />
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

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