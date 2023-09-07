import type { IAgendarAutorizacion } from "@/models/autorizacion.model";
import { useUserStore } from "@/store/userStore";
import { computed } from "vue";
import { useRouter } from "vue-router";

const useUser = () => {

    const userStore = useUserStore();
    const router = useRouter();

    const agendarAutorizacion = async (autorizacion: IAgendarAutorizacion): Promise<any> => {
        const status = await userStore.agendarAutorizacion(autorizacion);
        return status
    }

    const obtenerSolicitudesPendientes = async () => {
        const result = await userStore.obtenerSolicitudesPendientes();
        return result
    }

    const obtenerSolicitud = async (idSolicitud: any) => {
        const result = await userStore.obtenerSolicitud(idSolicitud);
        return result
    }

    const aprobarSolicitud =async (idSolicitud:any) => {
        const result = await userStore.aprobarSolicitud(idSolicitud);
        return result
    }

    const rechazarSolicitud =async (idSolicitud:any) => {
        const result = await userStore.rechazarSolicitud(idSolicitud);
        return result
    }

    return {
        //methods
        agendarAutorizacion,
        obtenerSolicitudesPendientes,
        obtenerSolicitud,
        aprobarSolicitud,
        rechazarSolicitud,

        //getters
        useObtenerSolicitudesPendientes: computed(() => userStore.getSolicitudesPendientes),
        useObtenerSolicitud: computed(() => userStore.getSolicitud),
        useObtenerDocumentos: computed(() => userStore.getDocumentos),
        useObtenerValorPendientes: computed(() => userStore.getValorPendients)
    };
}

export default useUser;