import type { IAgendarAutorizacion } from "@/models/autorizacion.model";
import type { Incidente } from "@/models/incidente.model";
import type { IConducta } from "@/models/conducta.model";
import { useUserStore } from "@/store/userStore";
import { computed } from "vue";

const useUser = () => {

    const userStore = useUserStore();

    const agendarAutorizacion = async (autorizacion: IAgendarAutorizacion): Promise<any> => {
        const status = await userStore.agendarAutorizacion(autorizacion);
        return status
    }

    const obtenerSolicitudesPendientes = async (idUsuario: number) => {
        const result = await userStore.obtenerSolicitudesPendientes(idUsuario);
        return result
    }

    const obtenerSolicitudesAprobadas = async (idUsuario: number) => {
        const result = await userStore.obtenerSolicitudesAprobadas(idUsuario);
        return result
    }

    const obtenerSolicitudesRechazadas = async (idUsuario: number) => {
        const result = await userStore.obtenerSolicitudesRechazadas(idUsuario);
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

    const registrarIncidente = async (incidente: Incidente) => {
        const result = await userStore.registrarIncidente(incidente)
        return result
    }

    const obtenerIncidentes = async () => {
        const result = await userStore.obtenerIncidentes()
        return result
    }

    const registrarConducta = async (conducta: IConducta) => {
        const result = await userStore.registrarConducta(conducta)
        return result
    }

    const obtenerConductas = async () => {
        const result = await userStore.obtenerConductas()
        return result
    }

    const filtrarRegistrosIncidentes = async (dato: string) => {
        const result = await userStore.filtrarRegistrosIncidentes(dato)
        return result
    }

    const filtrarRegistrosConductas = async (dato: string) => {
        const result = await userStore.filtrarRegistrosConductas(dato)
        return result
    }
    
    const obtenerIncidente = async (idIncidente: number) => {
        const result = await userStore.obtenerIncidente(idIncidente)
        return result
    }

    const obtenerDatosSolicitante = async (idSolicitante: number) => {
        const result = await userStore.obtenerDatosSolicitante(idSolicitante)
        return result
    }
    
    const obtenerConductasUsuario = async (idUsuario: number) => {
        const result = await userStore.obtenerConductasUsuario(idUsuario)
        return result
    }

    const obtenerSolicitudesUsuario = async (idUsuario: number) => {
        const result = await userStore.obtenerSolicitudesUsuario(idUsuario)
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
        registrarIncidente,
        obtenerIncidentes,
        registrarConducta,
        obtenerConductas,
        filtrarRegistrosIncidentes,
        filtrarRegistrosConductas,
        obtenerIncidente,
        obtenerDatosSolicitante,
        obtenerConductasUsuario,
        obtenerSolicitudesUsuario,
        //getters
        useObtenerSolicitudesPendientes: computed(() => userStore.getSolicitudesPendientes),
        useObtenerSolicitudesAprobadas: computed(() => userStore.getSolicitudesAprobadas),
        useObtenerSolicitudesRechazadas: computed(() => userStore.getSolicitudesRechazadas),
        useObtenerSolicitud: computed(() => userStore.getSolicitud),
        useObtenerDocumentos: computed(() => userStore.getDocumentos),
        useObtenerValorPendientes: computed(() => userStore.getValorPendientes),
        useObtenerValorAprobadas: computed(() => userStore.getValorAprobadas),
        useObtenerValorRechazadas: computed(() => userStore.getValorRechazadas),
        useObtenerIncidentes: computed(() => userStore.getIncidentes),
        useObtenerConductas: computed(() => userStore.getConductas),
        useObtenerIncidentesFiltrados: computed(() => userStore.getIncidentesFiltrados),
        useObtenerConductasFiltradas: computed(() => userStore.getConductasFiltradas),
        useObtenerIncidente: computed(() => userStore.getIncidente),
        useObtenerDatosSolicitante: computed(() => userStore.getDatosSolicitante),
        useObtenerConductasUsuario: computed(() => userStore.getConductasUsuario),
        useObtenerSolicitudesUsuario: computed(() => userStore.getSolicitudesUsuario)
    };
}

export default useUser;