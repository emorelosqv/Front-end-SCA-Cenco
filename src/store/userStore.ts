import cencoApi from '@/services/cencoApi';
import type { IAgendarAutorizacion} from '@/models/autorizacion.model';
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      status: 0,
      solicitudesPendientes: [],
      solicitudesAprobadas: [],
      solicitudesRechazadas: [],
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
      } catch (error) {
        console.log(error)
        return error
      }
    },
    async obtenerSolicitudesAprobadas(){
      try {
        await cencoApi.get("UserData/obtener-solicitudes-aprobadas").then((result) => {
          if (result.data.data != ""){
            const statusC = result.status
            this.solicitudesAprobadas = JSON.parse(result.data.data)
            return {statusC, result}
          }else{
            this.solicitudesAprobadas = []
          }
        }).catch((error) => {
          console.log(error)
        })    
      } catch (error) {
        console.log(error)
        return error
      }
    },
    async obtenerSolicitudesRechazadas(){
      try {
        await cencoApi.get("UserData/obtener-solicitudes-rechazadas").then((result) => {
          if (result.data.data != ""){
            console.log(result.data.data)
            const statusC = result.status
            this.solicitudesRechazadas = JSON.parse(result.data.data)
            return {statusC, result}
          }else{
            this.solicitudesRechazadas = []
          }
        }).catch((error) => {
          console.log(error)
        })    
      } catch (error) {
        console.log(error)
        return error
      }
    },
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
    },
    async enviarCorreo(correo:any){
      try {
        
        const result = await cencoApi.post("UserData/enviar-correo/", correo)
        return result
      } catch (error) {
        console.log( "Error: "+error)
        return error
      }
    }
  },
  getters:{
    getSolicitudesPendientes: (state) => state.solicitudesPendientes,
    getSolicitudesAprobadas: (state) => state.solicitudesAprobadas,
    getSolicitudesRechazadas: (state) => state.solicitudesRechazadas,
    getSolicitud: (state) => state.solicitud,
    getDocumentos: (state) => state.documentos,
    getValorPendientes: (state) => state.solicitudesPendientes.length,
    getValorAprobadas: (state) => state.solicitudesAprobadas.length,
    getValorRechazadas: (state) => state.solicitudesRechazadas.length
  }
})