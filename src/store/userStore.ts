import cencoApi from '@/services/cencoApi';
import type { IAgendarAutorizacion} from '@/models/autorizacion.model';
import type { Incidente } from '@/models/incidente.model';
import type { IConducta } from '@/models/conducta.model';
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      status: 0,
      solicitudesPendientes: [],
      solicitudesAprobadas: [],
      solicitudesRechazadas: [],
      incidentes: [] as Incidente[],
      incidentesFiltrados: [] as Incidente[],
      incidente: {},
      conductas: [] as IConducta [],
      conductasFiltradas: [] as IConducta[],
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
    async registrarIncidente(incidente: Incidente): Promise<any> {
      try {

        const { status, data } = await cencoApi.post("UserData/registrar-incidente",incidente ,  {headers :{
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
    async registrarConducta(conducta: IConducta): Promise<any> {
      try {

        const { status, data } = await cencoApi.post("UserData/registrar-conducta", conducta ,  {headers :{
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
    async obtenerIncidentes(){
      try {
        await cencoApi.get("UserData/obtener-incidentes").then((result) => {
          if (result.data.data != ""){
            const statusC = result.status
            this.incidentes = JSON.parse(result.data.data)
            return {statusC, result}
          }else{
            this.incidentes = []
          }
        }).catch((error) => {
          console.log(error)
        })    
      } catch (error) {
        console.log(error)
        return error
      }
    },
    async obtenerConductas(){
      try {
        await cencoApi.get("UserData/obtener-conductas").then((result) => {
          if (result.data.data != ""){
            const statusC = result.status
            this.conductas = JSON.parse(result.data.data)
            return {statusC, result}
          }else{
            this.conductas = []
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
    async filtrarRegistrosIncidentes(dato: string){
     const result = this.incidentes.filter((item) => {
        return item.nombres.toLocaleLowerCase().includes(dato.toLocaleLowerCase()) || 
        item.apellidos.toLocaleLowerCase().includes(dato.toLocaleLowerCase()) || 
        item.fecha.toLocaleLowerCase().includes(dato.toLocaleLowerCase()) || 
        item.identificacion.toLocaleLowerCase().includes(dato.toLocaleLowerCase()) 
      });
      this.incidentes = result
      return result
    },
    async filtrarRegistrosConductas(dato: string){
      const result = this.conductas.filter((item) => {
         return item.nombres.toLocaleLowerCase().includes(dato.toLocaleLowerCase()) || 
         item.apellidos.toLocaleLowerCase().includes(dato.toLocaleLowerCase()) || 
         item.fecha.toLocaleLowerCase().includes(dato.toLocaleLowerCase()) || 
         item.identificacion.toLocaleLowerCase().includes(dato.toLocaleLowerCase()) 
       });
       this.conductas = result
       return result
     },
    async obtenerSolicitud(idSolicitud: number){
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
    async obtenerIncidente(idIncidente: number){
      try {       
        const res = await cencoApi.get("UserData/obtener-incidente/"+idIncidente)
        if(res != null){
          const statusC = res.status
          const data = JSON.parse(res.data.data.incidente)
          let element = null
          for (let index = 0; index < data.length; index++) {
            element = data[index];
          }
          this.incidente = element
          return {statusC, res}
        }
      } catch (error) {
        console.log( "Error: "+error)
        return error
      }
    },
    async aprobarSolicitud(idSolicitud:number){
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
    async rechazarSolicitud(idSolicitud:number){
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
    getIncidentes: (state) => state.incidentes,
    getConductas: (state) => state.conductas,
    getSolicitudesRechazadas: (state) => state.solicitudesRechazadas,
    getSolicitud: (state) => state.solicitud,
    getIncidente: (state) => state.incidente,
    getDocumentos: (state) => state.documentos,
    getValorPendientes: (state) => state.solicitudesPendientes.length,
    getValorAprobadas: (state) => state.solicitudesAprobadas.length,
    getValorRechazadas: (state) => state.solicitudesRechazadas.length,
    getIncidentesFiltrados: (state) => state.incidentesFiltrados,
    getConductasFiltradas: (state) => state.conductasFiltradas
  }
})