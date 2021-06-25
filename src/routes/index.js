import userRoute from './userRoute.js';
import serviceRoute from './serviceRoute.js';



const configureAllRoutes = (app) => {
    userRoute(app)
    serviceRoute(app)
}

export default configureAllRoutes;