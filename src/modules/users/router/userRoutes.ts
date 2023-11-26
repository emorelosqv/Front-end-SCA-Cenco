import isAuthenticatedGuard from '@/guards/auth/authGuard'
import isAuditorGuard from '@/guards/users/auditorGuard'
import isProveedorGuard from '@/guards/users/proveedorGuard'
import isAdministradorGuard from '@/guards/users/administradorGuard'

const userRoutes = [
    {
        path: "/dashboard",
        name: "dashboard",
        beforeEnter:[ isAuthenticatedGuard ],
        component: () => import('@/modules/users/views/UserData.vue')
    },
    {
        path: "/validar-autorizaciones",
        name: "validar-autorizaciones",
        beforeEnter:[ isAdministradorGuard ],
        component: () => import('@/modules/users/views/ValidarAutorizaciones.vue')
    },
    {
        path: "/ver-solicitud/:idSolicitud",
        name: "ver-solicitud",
        beforeEnter:[ isAdministradorGuard ],
        props: true,
        component: () => import('@/modules/users/views/VerSolicitud.vue')
    },
    {
        path: "/acontecimientos",
        name: "acontecimientos",
        beforeEnter:[ isAuditorGuard ],
        component: () => import('@/modules/users/views/Acontecimiento.vue')
    },
    {
        path: "/auditar-acontecimientos",
        name: "auditar-acontecimientos",
        beforeEnter:[ isAuditorGuard ],
        component: () => import('@/modules/users/views/AuditarAcontecimiento.vue')
    },
    {
        path: "/auditar-incidente",
        name: "auditar-incidente",
        beforeEnter:[ isAuditorGuard ],
        component: () => import('@/modules/users/views/AuditarIncidente.vue')
    },
    {
        path: "/registrar-incidente",
        name: "registrarIncidente",
        beforeEnter:[ isAuditorGuard ],
        component: () => import('@/modules/users/views/RegistrarIncidente.vue')
    },
    {
        path: "/mostrar-incidentes",
        name: "mostrar-incidentes",
        beforeEnter:[ isAuditorGuard ],
        component: () => import('@/modules/users/views/MostrarIncidentes.vue')
    },
    {
        path: "/registrar-conducta",
        name: "registrar-conducta",
        beforeEnter:[ isAuditorGuard ],
        component: () => import('@/modules/users/views/RegistrarConducta.vue')
    },
    {
        path: "/mostrar-conductas",
        name: "mostrar-conductas",
        beforeEnter:[ isAuditorGuard ],
        component: () => import('@/modules/users/views/MostrarConductas.vue')
    },
    {
        path: "/auditar-conducta",
        name: "auditar-conducta",
        beforeEnter:[ isAuditorGuard ],
        component: () => import('@/modules/users/views/AuditarConducta.vue')
    },
    {
        path: "/manuales",
        name: "manuales",
        beforeEnter:[ isProveedorGuard],
        component: () => import('@/modules/users/views/Manuales.vue')
    },
    {
        path: "/manual-conducta",
        name: "manual-conducta",
        beforeEnter:[ isProveedorGuard],
        component: () => import('@/modules/users/views/ManualConducta.vue')
    },
    {
        path: "/manual-caso-emergencia",
        name: "manual-caso-emergencia",
        beforeEnter:[ isProveedorGuard],
        component: () => import('@/modules/users/views/ProtocoloEmergencia.vue')
    },
    {
        path: "/agendar-autorizacion",
        name: "agendar-autorizacion",
        beforeEnter:[ isProveedorGuard],
        component: () => import('@/modules/users/views/AgendarAutorizacion.vue')
    },
    {
        path: "/ver-aforo",
        name: "ver-aforo",
        beforeEnter:[isAuditorGuard],
        component: () => import('@/modules/users/views/VerAforo.vue')
    },
    {
        path: "/ver-incidente/:idIncidente",
        name: "ver-incidente",
        props: true,
        beforeEnter:[isAuditorGuard],
        component: () => import('@/modules/users/views/VerIncidente.vue')
    }
]

export default userRoutes

