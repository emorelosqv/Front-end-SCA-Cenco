import { useAuthStore } from "@/store/authStore"


const isAuditorGuard = (to: any, from: any, next: any) => {
    const authStore = useAuthStore();
    const token = localStorage.getItem("token");
    const rol = Number(localStorage.getItem("rol"))
    if(token != null && token!= ''){
        authStore.cambiarEstado();
    }
    if (authStore.getCurrentState === "authenticated") {
        if(rol === 2 || rol === 1){
            next()
        }else{
            next({ name: "dashboard" })
        }
    }
    else next({ name: "login" })
}

export default isAuditorGuard;