import cencoApi from '@/services/cencoApi';
import type { IStatus, ISubirArchivo, status } from '@/models/archivo.model';
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  // arrow function recommended for full type inference
  actions: {
    state: (): IStatus => {
      return {
        // all these properties will have their type inferred automatically
        status: "no-guardado"
      }
    },
    async subirArchivo(archivo: ISubirArchivo): Promise<status> {
      try {
        console.log(archivo)

        const { status, data } = await cencoApi.post("UserData/subir-data",archivo,  {headers :{
          'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*",
        }});
        if (status === 200) {
          this.status = "guardado";
        }
        return this.status
      } catch (error) {
        
        this.status = "no-guardado"
        return this.status
      }
    },

  },
})