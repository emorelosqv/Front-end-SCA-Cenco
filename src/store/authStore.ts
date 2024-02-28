import cencoApi from '@/services/cencoApi';
import type { IAuth, ICreateUser, ILoginUser, StatusAuth } from '@/models/auth.model';
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: (): IAuth => {
    return {
      status: "not-authenticated",
      user: null,
      token: null,
      refreshToken: null
    }
  },
  actions: {
    async createUser(userCreate: ICreateUser) {
      try {
        const { status, data } = await cencoApi.post("auth/registrar-usuario-normal",userCreate, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        });
        this.user = data.usuario;
        return { status };
      } catch (error) {
        console.log(error);
        return { status: 0 };
      }
    },
    async loginUser(userLogin: ILoginUser){
      try {
        const res = await cencoApi.post("auth/login", userLogin, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        });
        if (res.status === 200) {
          this.setToken(res.data.data.sessionToken);
          const arregloUsuario = JSON.parse(res.data.data.usuario)
          const usuario = arregloUsuario[0]
          localStorage.setItem("identifiacionUsuario", usuario.identificacion)
          localStorage.setItem("rol", usuario.idRol)
          localStorage.setItem("nombreCompleto", usuario.nombreCompleto)
          localStorage.setItem("correoElectronico", usuario.correo)
        }
        return res.status
      } catch (error) {
        return 400
      }
    },
    async checkAuthentication() {
      const token = localStorage.getItem('token')
      if (!token) {
        this.signOut();
        return { ok: false, message: 'No hay token' }
      }
      try {
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