
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
    }
]

export default userRoutes

