import cencoApi from '@/services/cencoApi';
import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
  state: () => {
    return {
      status: 0,
      departamentos: [],
      municipios: [],
      tiendas: []
    }
  },
  actions: {
    async obtenerDepartamentos(){
      try {
        const result = await cencoApi.get("config/obtener-departamentos")
        this.departamentos = JSON.parse(result.data.data)
        return result.status
      } catch (error) {
        console.log(error)
        return error
      }
    },
    async obtenerMunicipios(idDepartamento: number){
      try {
        const result = await cencoApi.get("config/obtener-municipios/"+idDepartamento)
        this.municipios = JSON.parse(result.data.data)
        return result.status
      } catch (error) {
        console.log( "Error: "+error)
        return error
      }
    },
    async obtenerTiendas(idMunicipio: number){
      try {       
        const result = await cencoApi.get("config/obtener-tiendas/"+idMunicipio)
          this.tiendas = JSON.parse(result.data.data)
          return result.status
      } catch (error) {
        console.log( "Error: "+error)
        return error
      }
    }
  },
  getters:{
    getDepartamentos: (state) => state.departamentos,
    getMunicipios: (state) => state.municipios,
    getTiendas: (state) => state.tiendas
  }
})