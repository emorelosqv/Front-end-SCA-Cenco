import type { IAgendarEntrega } from "@/models/entrega.model";
import { useUserStore } from "@/store/userStore";
import { computed } from "vue";
import { useRouter } from "vue-router";

const useUser = () => {

    const userStore = useUserStore();
    const router = useRouter();

    const agendarEntrega = async (entrega: IAgendarEntrega): Promise<any> => {
        const status = await userStore.agendarEntrega(entrega);
        return status
    }

    const obtenerSolicitudesPendientes = async () => {
        const result = await userStore.obtenerSolicitudesPendientes();
        return result
    }

    return {
        //methods
        agendarEntrega,
        obtenerSolicitudesPendientes,
        
        useObtenerSolicitudesPendientes: computed(() => userStore.getSolicitudesPendientes)
    };
}

export default useUser;