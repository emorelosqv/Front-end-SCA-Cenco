<template>
    <div class="container text-center mt-5">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-title">
                        <h2>
                            Documentos del trabajador 
                            <font-awesome-icon :icon="['fas', 'address-card']"
                                style="color: #0072bc;"
                            />
                        </h2>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="onSubmit">
                            <div class="mb-3">
                                <input type="text" class="form-control" id="inputDescripcionArchivo"
                                    aria-describedby="inputDescripcionArchivo" placeholder="Descripción del documento"
                                    v-model="archivoForm.Descripcion" required>
                            </div>
                            <div class="mb-3">
                                <label for="inputArchivoDocumentoIdentidad">Documento</label>
                                <input type="file" class="form-control" id="inputArchivoDocumentoIdentidad"
                                    aria-describedby="inputArchivoDocumentoIdentidad" @change="changeFile" :ref="miarchivo"
                                    required>

                            </div>
                            <button type="submit" class="btn text-light" id="boton">Subir Archivos</button>
                        </form>
                    </div>

                </div>
            </div>
            <!---<div class="col">
                <div class="card">
                    <div class="card-title">
                        <h2>
                            ARL
                            <font-awesome-icon :icon="['fas', 'user-injured']"
                                style="color: #0072bc;"
                            />
                        </h2>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="onSubmit">
                            <div class="mb-3">
                                <input type="number" class="form-control" id="inputNumIdentificacion"
                                    aria-describedby="inputNumIdentificacion" placeholder="Numero de identificacion"
                                    v-model="archivoForm.IdUsuario" required>

                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="inputDescripcionArchivoARl"
                                    aria-describedby="inputDescripcionArchivoARl" placeholder="Descripcion del documento"
                                    v-model="archivoForm.Descripcion" required>

                            </div>
                            <div class="mb-3">
                                <label for="inputArchivoDocumentoIdentidad">Documento de identidad</label>
                                <input type="file" class="form-control" id="inputArchivoDocumentoIdentidad"
                                    aria-describedby="inputArchivoDocumentoIdentidad" @change="changeFile" :ref="miarchivo"
                                    required>

                            </div>
                            <button type="submit" class="btn text-light" id="boton">Subir Archivos</button>
                        </form>
                    </div>
                </div>
            </div>-->
        </div>
    </div>
</template>

<script  setup>
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'
import userGuard from '../../../guards/userGuard'

const archivoForm = ref({ IdUsuario: 0, Descripcion: '', Archivo: null })
const router = useRouter()
const { subirArchivos, authStatus } = userGuard()
const swal = inject('$swal')



function changeFile() {
    if(localStorage.getItem('token') != null){
        const usuario = localStorage.getItem('idUsuario')
        archivoForm.IdUsuario = usuario
    }

    const input = document.getElementById('inputArchivoDocumentoIdentidad');
    if (input.files && input.files[0]) {
        archivoForm.value.Archivo = input.files[0];
    }
}

const onSubmit = async () => {

    try {
        const status = await subirArchivos(archivoForm.value)
        if (status === 'guardado') {
            //TODO message success
            router.push({ name: 'parafiscalesTrabajadorProveedor' })
            swal("Success", 'Datos almacenados correctamente', 'success')
        } else {
            //TODO: message error
            swal('Error', 'credenciales invalidas', 'error')
        }
    } catch (error) {
        swal("Erros", "Ha ocurrido un error: " + error, 'error')
    }
}

</script>

<style scoped>
h1, h2 {
    color: #0072bc;
}

#boton {
    background: #f7941d;

}
</style>