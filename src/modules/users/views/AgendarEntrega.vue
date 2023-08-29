<template>
    <div class="container text-center mt-2 my-4">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-title">
                    <h1>Agendar Entrega</h1>
                </div>
                <div class="card-body">
                    <form >
                        <div class="mb-3">
                            <input type="text" class="form-control" id="inputNombresRegistrer"
                                aria-describedby="inputNombresRegistrer" placeholder="Nombres">

                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="inputApellidosRegister"
                                aria-describedby="inputApellidosRegister" placeholder="Apellidos">

                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="inputEmailRegister"
                                aria-describedby="inputEmailRegister" placeholder="Identificacion">

                        </div>
                        <div class="mb-3">
                            <input type="date" class="form-control" id="inputPasswordRegister"
                                aria-describedby="inputPasswordRegister" placeholder="">
                        </div>
                        <div class="mb-3">
                            <input type="file" multiple class="form-control" id="inputPasswordRegister"
                                aria-describedby="inputPasswordRegister" placeholder="">
                        </div>
                        <div class="mb-3">
                            <textarea  class="form-control" placeholder="Descripcion" 
                            name="" id="" cols="60" rows="8">                               
                            </textarea>
                        </div>
                        <button type="submit" class="btn text-light" id="boton">Agendar Entrega</button>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
h1 {
    color: #0072bc;
}
#boton {
    background: #f7941d;

}
a{
    text-decoration: none;
    color:#0072bc;
}
</style>