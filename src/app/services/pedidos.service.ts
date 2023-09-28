import { Injectable } from '@angular/core';
import { EstadoPedido, Pedido } from '../clases/pedido';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {
listaPedidos: Pedido[] = [];
  constructor() { }


  agregarPedido(pedido: Pedido) {
    this.listaPedidos.push(pedido);
  }

 modificarEstado(numero:number, estado: EstadoPedido ){
    this.listaPedidos.forEach((pedido) => {
      if(pedido.numero === numero){
        pedido.estado = estado;
      }
    });
 }

}
