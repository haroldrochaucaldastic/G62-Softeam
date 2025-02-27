import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { Llaves } from '../config/Llaves';
const generator =require("password-generator");
const cryptoJS=require("crypto-js");
const fetch= require("node-fetch");
@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */

  GenerarClave(){
    let clave = generator(8,false);
    return clave;
  }
  cifrarClave(clave:string){
    let claveCifrada=cryptoJS.MD5(clave).toString()
    return claveCifrada
  }
  notificacionEmail(destino:string, asunto:string, mensaje:string){
    fetch(Llaves.urlServiciosPython+ `/Email?correo_destino=${destino}&asunto=${asunto}&mensaje=${mensaje}`)
    .then((data:any)=>{

    }
  ).catch((error:any)=>{
    console.log(error)

   })
   return true;
  }
  notificacionSMS(destino:string, mensaje:string ){
    fetch(Llaves.urlServiciosPython+ `/sms?telefono=${destino}&mensaje=${mensaje}`)//no me reconoce las variable
    .then((data:any)=>{

   }
   ).catch((error:any)=>{
    console.log(error)

   }
   )}
   

  }
