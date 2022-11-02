import Boom from '@hapi/boom';
import jwt from 'jsonwebtoken';
import User from '../users/model';
import configs from '../../config/index';
import { sendMail } from '../../mail/recover';

export async function _login(request:any, h:any):Promise<any>{
    try {
        const { email, password } = request.payload as any;
        const _user: any = await User.findOne({ email: { $regex: `^${email}$`, $options:'i' }, deleted: { $ne: true } }).select('+password');
        if(!_user){
            return Boom.unauthorized('Credenciales invalidas');
        }
        if(!_user.active){
            return Boom.unauthorized('Inactive user');
        }
        if(!_user.emailVerified){
            return Boom.unauthorized('Usuario no verificado');
        }
        if(password !== _user.password){
            return Boom.unauthorized('Invalid password');
        }

        const token =  jwt.sign({ _id: _user._id }, configs('secret'), { expiresIn: configs('jwtExpiration')});
        return h.response({ token }).code(200);
        
    } catch (error) {
        console.log(error);
        return Boom.badImplementation();
    }
}

export async function _recover(request:any, h:any):Promise<any>{
    try {
        const { email } = request.payload as any;

        const _user: any = await User.findOne({ email: { $regex: `^${email}$`, $options:'i' }, deleted: { $ne: true } });
        if(!_user){
            return Boom.badRequest('El correo dado no pertenece a ningún usuario');
        }
        if(!_user.active){
            return Boom.badRequest('El usuario no está activo');
        }

        // Enviar correo
        await sendMail(email);
        
        return h.response({success: true}).code(200);
    } catch (error) {
        return Boom.badImplementation();
    }
}