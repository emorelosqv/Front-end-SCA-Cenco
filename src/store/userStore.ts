import cencoApi from '@/services/cencoApi';
import type { IAgendarAutorizacion, IGenerarIngreso, IGenerarSalida } from '@/models/autorizacion.model';
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
      solicitudesFinalizadas : [],
      solicitudesEnCurso: [],
      incidentes: [] as Incidente[],
      incidentesFiltrados: [] as Incidente[],
      incidente: {},
      conductas: [] as IConducta[],
      conductasFiltradas: [] as IConducta[],
      solicitud: {},
      datosSolicitante: {},
      documentos: [],
      conductasUsuario: [],
      solicitudesUsuario: [],
      aforo: {},
      informacionAforo: []
    }
  },
  actions: {
    async agendarAutorizacion(autorizacion: IAgendarAutorizacion): Promise<any> {
      try {
        const { status, data } = await cencoApi.post("UserData/agendar-solicitud-autorizacion", autorizacion, {
          headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
          }
        });
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

        const { status, data } = await cencoApi.post("UserData/registrar-incidente", incidente, {
          headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
          }
        });
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

        const { status, data } = await cencoApi.post("UserData/registrar-conducta", conducta, {
          headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
          }
        });
        if (status === 200) {
          this.status = status;
        }
        return this.status
      } catch (error) {

        this.status = 200
        return this.status
      }
    },
    async obtenerSolicitudesPendientes(idUsuario: number) {
      try {
        await cencoApi.get("userData/obtener-solicitudes-pendientes/" + idUsuario).then((result) => {
          if (result.data.data != "") {
            const statusC = result.status
            this.solicitudesPendientes = JSON.parse(result.data.data)
            return { statusC, result }
          } else {
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
    async obtenerIncidentes() {
      try {
        await cencoApi.get("UserData/obtener-incidentes").then((result) => {
          if (result.data.data != "") {
            const statusC = result.status
            this.incidentes = JSON.parse(result.data.data)
            return { statusC, result }
          } else {
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
    async obtenerConductas() {
      try {
        await cencoApi.get("UserData/obtener-conductas").then((result) => {
          if (result.data.data != "") {
            const statusC = result.status
            this.conductas = JSON.parse(result.data.data)
            return { statusC, result }
          } else {
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
    async obtenerSolicitudesAprobadas(idUsuario: number) {
      try {
        await cencoApi.get("userData/obtener-solicitudes-aprobadas/" + idUsuario).then((result) => {
          if (result.data.data != "") {
            const statusC = result.status
            this.solicitudesAprobadas = JSON.parse(result.data.data)
            return { statusC, result }
          } else {
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
    async obtenerSolicitudesRechazadas(idUsuario: number) {
      try {
        await cencoApi.get("userData/obtener-solicitudes-rechazadas/" + idUsuario).then((result) => {
          if (result.data.data != "") {
            const statusC = result.status
            this.solicitudesRechazadas = JSON.parse(result.data.data)
            return { statusC, result }
          } else {
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
    async obtenerSolicitudesEnCurso(idUsuario: number) {
      try {
        await cencoApi.get("userData/obtener-solicitudes-en-curso/" + idUsuario).then((result) => {
          if (result.data.data != "") {
            const statusC = result.status
            this.solicitudesEnCurso = JSON.parse(result.data.data)
            return { statusC, result }
          } else {
            this.solicitudesEnCurso = []
          }
        }).catch((error) => {
          console.log(error)
        })
      } catch (error) {
        console.log(error)
        return error
      }
    },
    async obtenerSolicitudesFinalizadas(idUsuario: number) {
      try {
        await cencoApi.get("userData/obtener-solicitudes-finalizadas/" + idUsuario).then((result) => {
          if (result.data.data != "") {
            const statusC = result.status
            this.solicitudesFinalizadas = JSON.parse(result.data.data)
            return { statusC, result }
          } else {
            this.solicitudesFinalizadas = []
          }
        }).catch((error) => {
          console.log(error)
        })
      } catch (error) {
        console.log(error)
        return error
      }
    },
    async filtrarRegistrosIncidentes(dato: string) {
      const result = this.incidentes.filter((item) => {
        return item.nombres.toLocaleLowerCase().includes(dato.toLocaleLowerCase()) ||
          item.apellidos.toLocaleLowerCase().includes(dato.toLocaleLowerCase()) ||
          item.fecha.toLocaleLowerCase().includes(dato.toLocaleLowerCase()) ||
          item.identificacion.toLocaleLowerCase().includes(dato.toLocaleLowerCase())
      });
      this.incidentes = result
      return result
    },
    async filtrarRegistrosConductas(dato: string) {
      const result = this.conductas.filter((item) => {
        return item.nombres.toLocaleLowerCase().includes(dato.toLocaleLowerCase()) ||
          item.apellidos.toLocaleLowerCase().includes(dato.toLocaleLowerCase()) ||
          item.fecha.toLocaleLowerCase().includes(dato.toLocaleLowerCase()) ||
          item.identificacion.toLocaleLowerCase().includes(dato.toLocaleLowerCase())
      });
      this.conductas = result
      return result
    },
    async obtenerSolicitud(idSolicitud: number) {
      try {

        const res = await cencoApi.get("userData/obtener-solicitud/" + idSolicitud)
        if (res != null) {
          const statusC = res.status
          const data = JSON.parse(res.data.data.usuario)
          let element = null
          for (let index = 0; index < data.length; index++) {
            element = data[index];
          }
          this.solicitud = element
          this.documentos = JSON.parse(res.data.data.documentos)
          return { statusC, res }
        }
      } catch (error) {
        console.log("Error: " + error)
        return error
      }
    },
    async obtenerIncidente(idIncidente: number) {
      try {
        const res = await cencoApi.get("userData/obtener-incidente/" + idIncidente)
        if (res != null) {
          const statusC = res.status
          const data = JSON.parse(res.data.data.incidente)
          let element = null
          for (let index = 0; index < data.length; index++) {
            element = data[index];
          }
          this.incidente = element
          return { statusC, res }
        }
      } catch (error) {
        console.log("Error: " + error)
        return error
      }
    },
    async aprobarSolicitud(idSolicitud: number) {
      try {
        const result = await cencoApi.post("userData/aprobar-solicitud/" + idSolicitud)
        const data = JSON.parse(result.data.data.respuestaApi)
        const respuestaApi = data[0]
        return respuestaApi
      } catch (error) {
        console.log("Error: " + error)
        return error
      }
    },
    async generarIngreso(ingreso: IGenerarIngreso) {
      try {
        const result = await cencoApi.post("userData/generar-ingreso", ingreso, {
          headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
          }
        })
        const data = JSON.parse(result.data.data.respuestaApi)
        const respuestaApi = data[0]
        return respuestaApi
      } catch (error) {
        console.log("Error: " + error)
        return error
      }
    },
    async generarSalida(salida: IGenerarSalida) {
      try {
        const result = await cencoApi.post("userData/finalizar-ingreso", salida, {
          headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
          }
        })
        const data = JSON.parse(result.data.data.respuestaApi)
        const respuestaApi = data[0]
        return respuestaApi
      } catch (error) {
        console.log("Error: " + error)
        return error
      }
    },
    async rechazarSolicitud(idSolicitud: number) {
      try {
        const result = await cencoApi.post("userData/rechazar-solicitud/" + idSolicitud)
        const data = JSON.parse(result.data.data.respuestaApi)
        const respuestaApi = data[0]
        return respuestaApi
      } catch (error) {
        console.log("Error: " + error)
        return error
      }
    },
    async enviarCorreo(correo: any) {
      try {
        const result = await cencoApi.post("userData/enviar-correo/", correo)
        return result
      } catch (error) {
        console.log("Error: " + error)
        return error
      }
    },
    async obtenerDatosSolicitante(idSolicitante: number) {
      try {
        await cencoApi.get("userData/obtener-datos-solicitante/" + idSolicitante).then((result) => {
          if (result.data.data != "") {
            const statusC = result.status
            const respuestaApi = JSON.parse(result.data.data)
            this.datosSolicitante = respuestaApi[0]
            return { statusC, result }
          } else {
            this.datosSolicitante = {}
          }
        }).catch((error) => {
          console.log(error)
        })
      } catch (error) {
        console.log(error)
        return error
      }
    },
    async obtenerConductasUsuario(idUsuario: number) {
      try {
        const res = await cencoApi.get("userData/obtener-conductas-usuario/" + idUsuario)
        if (res != null) {
          const statusC = res.status
          const data = JSON.parse(res.data.data.conductas)
          this.conductasUsuario = data
          return { statusC, res }
        }
      } catch (error) {
        console.log("Error: " + error)
        return error
      }
    },
    async obtenerAforo() {
      try {
        const result = await cencoApi.get("userData/aforo")
        const data = JSON.parse(result.data.data.respuestaApi)
        const respuestaApi = data[0]
        this.aforo = respuestaApi
        return respuestaApi
      } catch (error) {
        console.log("Error: " + error)
        return error
      }
    },
    async obtenerInformacionAforo(idUsuario: number) {
      try {
        const result = await cencoApi.get("userData/informacion-aforo/" + idUsuario)
        const data = JSON.parse(result.data.data.respuestaApi)
        const respuestaApi = data[0]
        this.informacionAforo = data
        return respuestaApi
      } catch (error) {
        console.log("Error: " + error)
        return error
      }
    },
    async obtenerSolicitudesUsuario(idUsuario: number) {
      try {
        const res = await cencoApi.get("userData/obtener-solicitudes-por-usuario/" + idUsuario)
        if (res != null) {
          const statusC = res.status
          const data = JSON.parse(res.data.data)
          this.solicitudesUsuario = data
          return { statusC, res }
        }
      } catch (error) {
        console.log("Error: " + error)
        return error
      }
    }
  },
  getters: {
    getSolicitudesPendientes: (state) => state.solicitudesPendientes,
    getSolicitudesAprobadas: (state) => state.solicitudesAprobadas,
    getSolicitudesRechazadas: (state) => state.solicitudesRechazadas,
    getSolicitudesEnCurso: (state) => state.solicitudesEnCurso,
    getSolicitudesFinalizadas: (state) => state.solicitudesFinalizadas,
    getIncidentes: (state) => state.incidentes,
    getConductas: (state) => state.conductas,
    getSolicitud: (state) => state.solicitud,
    getIncidente: (state) => state.incidente,
    getDocumentos: (state) => state.documentos,
    getValorPendientes: (state) => state.solicitudesPendientes.length,
    getValorAprobadas: (state) => state.solicitudesAprobadas.length,
    getValorRechazadas: (state) => state.solicitudesRechazadas.length,
    getValorEnCurso: (state) => state.solicitudesEnCurso.length,
    getValorFinalizadas: (state) => state.solicitudesFinalizadas.length,
    getIncidentesFiltrados: (state) => state.incidentesFiltrados,
    getConductasFiltradas: (state) => state.conductasFiltradas,
    getDatosSolicitante: (state) => state.datosSolicitante,
    getConductasUsuario: (state) => state.conductasUsuario,
    getSolicitudesUsuario: (state) => state.solicitudesUsuario,
    getAforo: (state) => state.aforo,
    getInformacionAfoto: (state) => state.informacionAforo
  }
})