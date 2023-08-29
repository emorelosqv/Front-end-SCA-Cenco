import type { ISubirArchivo, status } from "@/models/archivo.model";
import { useUserStore } from "@/store/userStore";
import { computed } from "vue";
import { useRouter } from "vue-router";

const userGuard = () => {

    const userStore = useUserStore();
    const router = useRouter();

    const subirArchivos = async (archivo: ISubirArchivo): Promise<status> => {
        const status = await userStore.subirArchivo(archivo);
        return status
    }

    return {
        //methods
        subirArchivos,
    };
}

export default userGuard;