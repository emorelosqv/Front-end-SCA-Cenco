import cencoApi from '@/services/cencoApi';
import type { IAuth, ICreateUser, ILoginUser, StatusAuth } from '@/models/auth.model';
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  // arrow function recommended for full type inference
  state: (): IAuth => {
    return {
      // all these properties will have their type inferred automatically
      status: "not-authenticated",
      user: null,
      token: null,
      refreshToken: null
    }
  },
  actions: {
    async createUser(userCreate: ICreateUser) {
      try {
        const { status, data } = await cencoApi.post("Auth/registrar-usuario", userCreate);
        this.user = data.usuario;
        return { status };
      } catch (error) {
        console.log(error);
        return { status: 0 };
      }
    },
    async loginUser(userLogin: ILoginUser): Promise<StatusAuth> {
      try {
        this.status = "authenticating";
        
        const { status, data } = await cencoApi.post("Auth/validar", userLogin);
        
        if (status === 200) {
          this.setToken(data.data.sessionToken);
          this.user = data.data.usuario;
          localStorage.setItem("idUsuario", data.data.usuario.identificacion)
          localStorage.setItem("rol", data.data.usuario.idRol)
          localStorage.setItem("nombreCompleto", data.data.usuario.nombres + ' ' + data.data.usuario.apellidos)
          this.status = "authenticated";
        }
        return this.status
      } catch (error) {
        
        this.status = "not-authenticated"
        return this.status
      }
    },
    async checkAuthentication() {
      const token = localStorage.getItem('token')
      if (!token) {
        this.signOut();
        return { ok: false, message: 'No hay token' }
      }
      try {
        //TODO: REFRESH TOKEN
        const { status, data } = await cencoApi.get("/user/token");
      } catch (error) {
        console.log(error);
      }
    },
    setToken(payload: string) {
      this.token = payload;
      localStorage.setItem("token", payload);
    },
    signOut() {
      this.status = "not-authenticated"
      this.user = null
      this.token = null
      this.refreshToken = null
      localStorage.clear()
    },
    cambiarEstado(){
      this.status = "authenticated"
    },
  },
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    getCurrentState: (state) => state.status,
  },
})