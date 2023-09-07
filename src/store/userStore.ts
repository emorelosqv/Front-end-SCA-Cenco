import cencoApi from '@/services/cencoApi';
import type { IAgendarAutorizacion} from '@/models/autorizacion.model';
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      status: 0,
      solicitudesPendientes: [],
      solicitud: {},
      documentos: []
    }
  },
  actions: {
    async agendarAutorizacion(autorizacion: IAgendarAutorizacion): Promise<any> {
      try {

        const { status, data } = await cencoApi.post("UserData/agendar-solicitud-autorizacion",autorizacion ,  {headers :{
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
        await cencoApi.get("UserData/obtener-solicitudes-pendientes").then((result) => {
          console.log(result.data.data)
          if (result.data.data != ""){
            const statusC = result.status
            this.solicitudesPendientes = JSON.parse(result.data.data)
            return {statusC, result}
          }else{
            this.solicitudesPendientes = []
          }
        }).catch((error) => {
          console.log(error)
        })
        //.log(res)
        // if (res!=null){
        //   const statusC = res.status
        //   this.solicitudesPendientes = JSON.parse(res.data.data)
        //   return {statusC, res}
        // }
        
      } catch (error) {
        console.log(error)
        return error
      }
    } ,
    async obtenerSolicitud(idSolicitud: any){
      try {
        
        const res = await cencoApi.get("UserData/obtener-solicitud/"+idSolicitud)
        if(res != null){

          const statusC = res.status
          const data = JSON.parse(res.data.data.usuario)
          let element = null
          for (let index = 0; index < data.length; index++) {
            element = data[index];
          }
          this.solicitud = element
          this.documentos = JSON.parse(res.data.data.documentos)
          return {statusC, res}
        }
      } catch (error) {
        console.log( "Error: "+error)
        return error
      }
    },
    async aprobarSolicitud(idSolicitud:any){
      try {
        const result = await cencoApi.post("UserData/aprobar-solicitud/"+idSolicitud)
        const data = JSON.parse(result.data.data.respuestaApi)
        const respuestaApi = data[0]
        return respuestaApi
      } catch (error) {
        console.log( "Error: "+error)
        return error
      }
    },
    async rechazarSolicitud(idSolicitud:any){
      try {
        
        const result = await cencoApi.post("UserData/rechazar-solicitud/"+idSolicitud)
        const data = JSON.parse(result.data.data.respuestaApi)
        const respuestaApi = data[0]
        return respuestaApi 
      } catch (error) {
        console.log( "Error: "+error)
        return error
      }
    }

  },
  getters:{
    getSolicitudesPendientes: (state) => state.solicitudesPendientes,
    getSolicitud: (state) => state.solicitud,
    getDocumentos: (state) => state.documentos,
    getValorPendients: (state) => state.solicitudesPendientes.length
  }
})