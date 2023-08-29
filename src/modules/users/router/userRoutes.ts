
const userRoutes = [
    {
        path: "/user-data",
        name: "DatosUsuario",
        component: () => import('@/modules/users/views/UserData.vue')
    },
    {
        path: "/subir-parafiscales",
        name: "parafiscalesTrabajadorProveedor",
        component: () => import('@/modules/users/views/subirParafiscales.vue')
    },
    {
        path: "/acontecimientos",
        name: "acontecimientos",
        component: () => import('@/modules/users/views/Acontecimiento.vue')
    },
    {
        path: "/auditar-acontecimientos",
        name: "auditar-acontecimientos",
        component: () => import('@/modules/users/views/AuditarAcontecimiento.vue')
    },
    {
        path: "/auditar-incidente",
        name: "auditar-incidente",
        component: () => import('@/modules/users/views/AuditarIncidente.vue')
    },
    {
        path: "/registrar-incidente",
        name: "registrarIncidente",
        component: () => import('@/modules/users/views/RegistrarIncidente.vue')
    },
    {
        path: "/registrar-conducta",
        name: "registrar-conducta",
        component: () => import('@/modules/users/views/RegistrarConducta.vue')
    },
    {
        path: "/auditar-conducta",
        name: "auditar-conducta",
        component: () => import('@/modules/users/views/AuditarConducta.vue')
    },
    {
        path: "/manuales",
        name: "manuales",
        component: () => import('@/modules/users/views/Manuales.vue')
    },
    {
        path: "/agendar-entrega",
        name: "agendar-entrega",
        component: () => import('@/modules/users/views/AgendarEntrega.vue')
    },
    {
        path: "/ver-aforo",
        name: "ver-aforo",
        component: () => import('@/modules/users/views/VerAforo.vue')
    }
]



export default userRoutes

