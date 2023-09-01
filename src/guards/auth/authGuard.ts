import { useAuthStore } from "@/store/authStore"


const isAuthenticatedGuard = (to: any, from: any, next: any) => {
    
    const authStore = useAuthStore();
    const token = localStorage.getItem("token");
    const rol = Number(localStorage.getItem("rol"))
    if(token != null && token!= ''){
        authStore.cambiarEstado();
    }
    if (authStore.getCurrentState === "authenticated") {
        next()
    } 
    else next({ name: "login" })
}


export default isAuthenticatedGuard;