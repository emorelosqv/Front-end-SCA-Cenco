import type { ICreateUser, ILoginUser, StatusAuth } from "@/models/auth.model";
import { useAuthStore } from "@/store/authStore";
import { computed } from "vue";
import { useRouter } from "vue-router";

const useAuth = () => {

    const authStore = useAuthStore();
    const router = useRouter();

    const createUser = async (user: ICreateUser): Promise<any> => {
        const { status } = await authStore.createUser(user);
        return { status };
    }

    const loginUser = async (user: ILoginUser): Promise<StatusAuth> => {
        const status = await authStore.loginUser(user);
        return status
    }

    const checkingAuthStatus = async () => {
         await authStore.checkAuthentication();
    }

    const logout = () => {
        authStore.signOut();
        router.push({ name: "login" })
    }

    return {
        //methods
        createUser,
        loginUser,
        checkingAuthStatus,
        logout,

        //computed
        authStatus: computed(()=>authStore.getCurrentState),

    };
}

export default useAuth;