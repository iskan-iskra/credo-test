import catalog from "../pages/catalog/catalog"
import home from "../pages/home/home"


const publicRoutes = [
    {path: '/', component: home, exact:true},
    {path: '/Catalog', component: catalog, exact:true}
]
export default publicRoutes