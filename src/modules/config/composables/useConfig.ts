import { useConfigStore } from "@/store/configStore";
import { computed } from "vue";

const useConfig = () => {

    const configStore = useConfigStore();

    const obtenerDepartamentos = async () => {
        const result = await configStore.obtenerDepartamentos();
        return result
    }

    const obtenerMunicipios = async (idDepartamento: number) => {
        const result = await configStore.obtenerMunicipios(idDepartamento)
        return result
    }

    const obtenerTiendas = async (idMunicipio: number) => {
        const result = await configStore.obtenerTiendas(idMunicipio)
        return result
    }


    return {
        //methods
        obtenerDepartamentos,
        obtenerMunicipios,
        obtenerTiendas,

        //computed
        useGetDepartamentos: computed(()=>configStore.getDepartamentos),
        useGetMunicipios: computed(()=>configStore.getMunicipios),
        useGetTiendas: computed(()=>configStore.getTiendas),

    };
}

export default useConfig;