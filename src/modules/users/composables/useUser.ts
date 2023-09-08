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

    const obtenerSolicitudesAprobadas = async () => {
        const result = await userStore.obtenerSolicitudesAprobadas();
        return result
    }

    const obtenerSolicitudesRechazadas = async () => {
        const result = await userStore.obtenerSolicitudesRechazadas();
        return result
    }

    const obtenerSolicitud = async (idSolicitud: any) => {
        const result = await userStore.obtenerSolicitud(idSolicitud);
        return result
    }

    const aprobarSolicitud = async (idSolicitud:any) => {
        const result = await userStore.aprobarSolicitud(idSolicitud);
        return result
    }

    const rechazarSolicitud = async (idSolicitud:any) => {
        const result = await userStore.rechazarSolicitud(idSolicitud);
        return result
    }

    const enviarCorreo =async (correo:any) => {
        const result = await userStore.enviarCorreo(correo)   ;
        return result 
    }

    return {
        //methods
        agendarAutorizacion,
        obtenerSolicitudesPendientes,
        obtenerSolicitudesAprobadas,
        obtenerSolicitudesRechazadas,
        obtenerSolicitud,
        aprobarSolicitud,
        rechazarSolicitud,
        enviarCorreo,

        //getters
        useObtenerSolicitudesPendientes: computed(() => userStore.getSolicitudesPendientes),
        useObtenerSolicitudesAprobadas: computed(() => userStore.getSolicitudesAprobadas),
        useObtenerSolicitudesRechazadas: computed(() => userStore.getSolicitudesRechazadas),
        useObtenerSolicitud: computed(() => userStore.getSolicitud),
        useObtenerDocumentos: computed(() => userStore.getDocumentos),
        useObtenerValorPendientes: computed(() => userStore.getValorPendientes),
        useObtenerValorAprobadas: computed(() => userStore.getValorAprobadas),
        useObtenerValorRechazadas: computed(() => userStore.getValorRechazadas)

    };
}

export default useUser;