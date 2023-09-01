import cencoApi from '@/services/cencoApi';
import type { IAgendarEntrega} from '@/models/entrega.model';
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      status: 0,
      solicitudesPendientes: []
    }
  },
  actions: {
    async agendarEntrega(entrega: IAgendarEntrega): Promise<any> {
      try {

        const { status, data } = await cencoApi.post("UserData/agendar-entrega",entrega ,  {headers :{
          'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*",
        }});
        if (status === 200) {
          this.status = status;
        }
        return this.status
      } catch (error) {
        
        this.status = 200
        return this.status
      }
    },

    async obtenerSolicitudesPendientes(){
      try {
        const res = await cencoApi.get("UserData/obtener-solicitudes-pendientes")
        const statusC = res.status
        this.solicitudesPendientes = JSON.parse(res.data.data)
        return {statusC, res}
      } catch (error) {
        console.log(error)
        return error
      }
    } 
  },
  getters:{
    getSolicitudesPendientes: (state) => state.solicitudesPendientes
  }
})