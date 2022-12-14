import { _login, _recover, _redeem } from ".";
import { recoverPassword, recoverPasswordResponse, redeemPassword, signIn, signInResponse } from './validators'
import { failAction } from '../../core/joi'

const prefix:string = '/auth';

export default [
    {
        method: 'POST',
        path: `${prefix}/login`,
        options: {
            handler: _login,
            auth: false,
            description: 'Iniciar sesión, retorna token',
            validate: {
                payload: signIn,
                failAction
            },
            response: {
                schema: signInResponse,
                failAction
            }
        }
    },
    {
        method: 'POST',
        path: `${prefix}/recover`,
        options: {
            handler: _recover,
            auth: false,
            description: 'Envía correo de recuperación',
            validate: {
                payload: recoverPassword,
                failAction
            },
            response: {
                schema: recoverPasswordResponse,
                failAction
            }
        }
    },
    {
        method: 'POST',
        path: `${prefix}/redeem`,
        options: {
            handler: _redeem,
            auth: false,
            description: 'Para validar una cuenta de correo',
            validate: {
                payload: redeemPassword,
                failAction
            },
            response: {
                schema: recoverPasswordResponse,
                failAction
            }
        }
    }
]