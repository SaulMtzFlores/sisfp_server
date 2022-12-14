import authRoutes from './auth/routes';
import usersRoutes from './users/routes';
import rolesRoutes from './roles/routes';
import centersRoutes from './centers/routes';
import degreesRoutes from './degrees/routes';
import subjectsRoutes from './subjects/routes';
import subscriptionRoutes from './subscription/routes';
import groupsRoutes from './groups/routes';
import postsRoutes from './posts/routes';
import commentRoutes from './comments/routes';

export const Routes:any = [
    {
        method: 'GET',
        path: '/',
        options: {
            handler: function(req:any, h:any){ return h.response({time:new Date()})},
            auth: false,
        }
    },
    ...authRoutes,
    ...usersRoutes,
    ...rolesRoutes,
    ...centersRoutes,
    ...degreesRoutes,
    ...subjectsRoutes,
    ...subscriptionRoutes,
    ...groupsRoutes,
    ...postsRoutes,
    ...commentRoutes
]